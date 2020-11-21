const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { Meme } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    readAll: async (req, res) => {
        const { hashtag } = req.query;
        try {
            const searchData = await Meme.findAll({
                where: {
                    [Op.or]: [
                        { hashtag1: hashtag },
                        { hashtag2: hashtag }
                    ]
                }
            });

            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SEARCH_READ_ALL_SUCCESS, searchData));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SEARCH_READ_ALL_FAIL));
        }
    },
}