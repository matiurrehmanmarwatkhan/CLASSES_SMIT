import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const users = [
  {
    id: 1,
    name: "mati",
    email: "matiurrehmanmarwatkhan@gmail.com",
    password: "matiurrehman",
  },
];

export const test = (req, res) => {
  res.status(200).json({
    massage: "work Successfully",
    success: true,
  });
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const findUser = users.find((user) => user.email === email);

  if (findUser) {
    res.status(409).json({
      massage: "User Already Exist!",
      success: false,
    });
  } else {
    const hashPassword = await bcrypt.hash(password, 10);
    // const comparePassword = await bcrypt.compare(
    //     password,
    // )

    console.log(hashPassword);
    users.push({
      id: new Date(),
      name,
      email,
    });
    res.status(201).json({
      massage: "SignUp Succesfully",
      success: true,
      data: {
        id: new Date(),
        name,
        email,
      },
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const findUser = users.find((user) => user.email === email);

  if (!findUser) {
    return res.status(404).json({
      massage: "User not found",
      success: false,
    });
  }
  const comparedPassword = await bcrypt.compare(password, findUser.password);

  if (!comparedPassword) {
    res.status(401).json({
      massage: "Invalid Credentails!",
      success: false,
    });
  }

  //   const token  =
};
