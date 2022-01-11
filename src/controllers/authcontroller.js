import * as dotenv from 'dotenv';
dotenv.config()
import dbUser from "../models/persistence/user.js";
import jwt from "jsonwebtoken";


export const signUp = async (req, res, next) => {
  const { id, username, email, password } = req.body;
  try {
    const user = new dbUser({
      id,
      username,
      email,
      password,
    });
    const savedUser = await user.save();
    const token = jwt.sign({ id: user.id }, `${process.env.SECRET}`, { expiresIn: 60 * 60 * 24 });

    res.send({ auth: true, token });

  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await dbUser.findOne({
      where: {
        email,
        password
      } 
     });
  if (!user) {
    return res.status(404).send("User not found");
  }
  const validPassword = await user.password;
  if (!validPassword) {
    return res.status(401).json({ auth: false, token: null });
  }
  const token = jwt.sign({ id: user.id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60 * 24,
  });
  res.json({ auth: true, token });
};

export const auth = async (req, res, next) => {

  const user =  await dbUser.findAll(req.UserId, {password: 0})
  if (!user){
      return res.status(404).send('No user found')
  }
  res.json(user)
};
