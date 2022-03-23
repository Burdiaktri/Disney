import * as dotenv from 'dotenv';
dotenv.config()
import dbUser from "../models/persistence/user.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

export const signUp = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10)
  const { id, username, email, password } = req.body;
  try {
    const user = new dbUser({
      id,
      username,
      email,
      password: await bcrypt.hash(req.body.password, salt),
    });
    const savedUser = await user.save();
    const token = jwt.sign({ id: user.id }, `${process.env.SECRET}`, { expiresIn: 60 * 60 * 24 });

    res.send({ auth: true, token, savedUser});

  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  try{
    const user = await dbUser.findOne({
      where: {
        email
      } 
     });
  if (!user) {
    return res.status(404).send("User not found");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ auth: false, token: null });
  }
  const token = jwt.sign({ id: user.id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60 * 24,
  });
  res.json({ auth: true, token });
  }catch(err){
    res.status(500).send('Internal server error')
    console.log(err)
  }
  
};

export const auth = async (req, res, next) => {

  const user =  await dbUser.findAll(req.UserId, {password: 0})
  if (!user){
      return res.status(404).send('No user found')
  }
  res.json(user)
};
