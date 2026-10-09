import jwt from 'jsonwebtoken'

const SECRET = 'omello3umapassiva'

export default async function authMiddleware(req, res, next) {
    try {
        const token = req.headers['authorization']

        if(!token) {
            throw new Error()
        }

        const decoded = jwt.verify(token, SECRET)
        req.session = decoded
        next()
    } catch (error) {
        res.send({ message: "usuario ou senha invalido" })
    }
}