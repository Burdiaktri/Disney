import dbUser from '../models/persistence/user.js'
 
export const signUp = async (req, res, next) => {
     const {username, email, password} = req.body
     const user = new dbUser({
        username,
        email,
        password
    })
    user.password = await user.encryptPassword(user.password)
    console.log(user.password)
    res.send('message received')
}

export const logIn = (req, res) => {

}

export const auth = (req, res) => {
    res.send('prueba')

}