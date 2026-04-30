import { Blog } from "../models/blog.js";

export const blogByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const blogs = await Blog.find({ createdBy: userId });

    res.status(200).json({
      massage: "Blogs Fetched Successfully",
      blogs,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      massage: error.massage || "Error Feteching Blogs!",
    });
  }
};

export const createBlog = async (req, res) => {
  const { userId } = req.params;
  console.log(req.body);

  try {
    const { title, content } = req.body;

    const existBlog = await Blog.findOne({ title });
    if (existBlog) {
      return res
        .status(400)
        .json({ massage: "Blog with this title already exists!" });
    }
    const newBlog = await Blog.create(
      {
        title,
        content,
        createdBy: userId,
      },
      { new: true },
    );

    res.status(201).json({
      massage: "Blog Created Successfully",
      blog: newBlog,
    });
  } catch (error) {
    res.status(400).json({
      massage: error.massage,
    });
  }
};
