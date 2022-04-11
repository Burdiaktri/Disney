import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv';
dotenv.config()

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token']
    if (!token) {
        return res.status(401).son({
            auth: false,
            message: 'no token provided'
        })
    }
     const decoded = jwt.verify(token, `${process.env.SECRET}`)
     req.userId = decoded.id
     next()
}

export default verifyToken