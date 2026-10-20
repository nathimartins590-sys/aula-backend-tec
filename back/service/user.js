import RepositoryUser from '../repository/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { STRING } from 'sequelize'

const SECRET = 'omello3umapassiva'
const SALT = 12

class ServiceUser {
    async Buscar() {
        return RepositoryUser.Buscar()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("favor informar id")
        }

        return RepositoryUser.Detalhe(id)
    }

    async Criar(nome, email, password) {
        if( !nome|| !email|| !password ) {
            throw new Error("favor informar todos os dados")
        }

        const cryptPass = await bcrypt.hash(password, SALT)

        await RepositoryUser.Criar(nome, email, cryptPass)
    }

    async Alterar(id, nome, email, password) {
         if( !id|| !nome|| !email|| !password ) {
            throw new Error("favor informar todos os dados")
        }

        const cryptPass = !password
          ?undefined
          :await bcrypt.hash(password, SALT)

        await RepositoryUser.Alterar(id, nome, email, cryptPass)
    }

    async Deletar(id) {
         if(!id) {
            throw new Error("favor informar id")
        }

        await RepositoryUser.Deletar(id)
    }

    async Login(email, password) {
          if( !email|| !password ) {
            throw new Error("email ou senha invalido")
        }

        const user = await RepositoryUser.BuscarEmail(email)

        if(!user || !(await bcrypt.compare(STRING(password), user.password))){
            throw new Error("email ou senha invalido")
        }

        return jwt.sign({ id: user.id, email: user.email }, SECRET,{ expiresIn: 60*60 })
    }
}

export default new ServiceUser()