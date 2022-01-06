import dbUser from '../models/persistence/user.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const signUp = async (req, res, next) => {
     const {username, email, password} = req.body
     const user = new dbUser({
        username,
        email,
        password
    })
    await user.save()

    jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60 * 60 * 24})

    res.send({auth: true, token})
}

export const logIn = async (req, res, next) => {
    const {email, password} = req.body
    const mail = await dbUser.findOne({email})
    if(!user){
        return res.status(404).send('User not found')
    }
    const validPassword = await user.password
    if (!validPassword){
       return res.status(401).json({auth: false, token: null})
    }
    const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60 * 60* 24} )
    res.json({auth: true, token})
}

export const auth = async (req, res, next) => {
  

    const user =  await dbUser.findbyId(req.UserId)
    if (!user){
        return res.status(404).send('No user found')
    }
    res.json(user)
}