import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()


export const sendEmail = async (req, res) => {
    const {name, email, message} = req.body
    contentHTML = `
    <h1> User Information </h1>
    <ul> 
        <li>Username: ${name}</li>
        <li>User email: ${email}</li>
    </ul>
    <p>${message}</p>`

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.USER_NODEMAILER,
            pass: process.env.PASS_NODEMAILER
        }
    });

    const info = await transporter.sendMail({
        from: 'Servidor Node js',
        to: process.env.USER_NODEMAILER,
        subject: 'Test email',
        html: contentHTML
    })
    res.send('recibido')
}