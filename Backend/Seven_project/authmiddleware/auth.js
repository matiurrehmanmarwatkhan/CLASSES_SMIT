import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header.authorization.split(" ")[1];

  if (!token) {
    return res.status(403).json({
      massage: "Forbidden",
      success: false,
    });
  }

  const decoded = jwt.verify(token, "asdfjlkasdjf;lkajsd;lfkjoqiuropiqwerhj");

  if (!decoded._id) {
    return res.status(403).json({
      message: "Forbidden",
      success: false,
    });
  }

  req.user = decoded;
};
