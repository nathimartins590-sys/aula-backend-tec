import database from "../config/database"

class User {
   constructor() {
     this.model = database.db.define("user", {
        id: {
            type: database.db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: database.db.Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: database.db.Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: database.db.Sequelize.STRING,
            allowNull: false
            // unique: true
        }
     })
   }
}

export default new User().model