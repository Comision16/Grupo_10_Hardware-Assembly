module.exports = (sequelize, DataTypes) => {
    let alias = 'Order';
    let cols = {
        id: { 
            type: DataTypes.INTEGER.UNSIGNED,
            unique: true,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstname : {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        lastname : {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        password : {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        rol_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        avatar_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        street : {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        city : {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phone : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        payment_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        } 
    };
    let config = {
        timestamps: true,
        underscored: true,
    }
    const User = sequelize.define(alias, cols , config)

/*         ASOCIACIONES       */

    User.associate = (models) => {
        User.belongsTo(models.Role, {
            as: "rol",
            foreingKey : "rol_id"
         })
};
    User.associate = (models) => {
        User.belongsTo(models.Avatar, {
            as: "avatar",
            foreingKey : "avatar_id"
         })
};

    User.associate = (models) => {
        User.belongsTo(models.Payment, {
            as: "payment",
            foreingKey : "payment_id"
         })
};



    User.associate = (models) => {
        User.hasMany(models.Order, {
            as :"order",
            foreingKey : "user_id"
        })
    };

    return User
}