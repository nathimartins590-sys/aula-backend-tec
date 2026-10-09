import User from "../model/user.js"

class RepositoryUser {
    async Buscar() {
        return User.findAll()
    }

    async Detalhe(id) {
        return User.findByPk(id)
    }

    async BuscarEmail(id) {
        return User.findOne({ where: {email} })
    }

    async Criar(nome, email, password) {
        User.create({ nome, email, password })
    }

    async Alterar(id, nome, email, password) {
        const user = await User.findByPk(id)

        if(!user) {
            throw new Error("usuario não encontrado")
        }

        user.nome = nome || user.nome
        user.email = email || user.email
        user.password = password || user.password

        await user.save()
    }

    async Deletar(id) {
        const user = await User.findByPk(id)

        if(!user) {
            throw new Error("usuario não encontrado")
        }

        await User.destroy()
    }
}

export default new RepositoryUser()