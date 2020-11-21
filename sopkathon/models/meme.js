module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Meme', {
        //모델의 Attributes (Column)을 정의하는곳
        tag: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        imageURI: {
            type: DataTypes.STRING(500),
            unique: true,
            allowNull: false,
        },
        like: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        //모델의 옵션들을 지정하는곳    
        freezeTableName: true,
        timestamps: false,
    });
};