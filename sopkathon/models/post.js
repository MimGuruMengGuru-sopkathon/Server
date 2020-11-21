module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        //모델의 Attributes (Column)을 정의하는곳
        tag1: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },

        tag2: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },

        tag3: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },

        imageUrl: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: true,
        },
        like: {
            type: DataTypes.INTEGER,
        }
    }, {
        //모델의 옵션들을 지정하는곳    
        freezeTableName: true,
        timestamps: false,
    });
};