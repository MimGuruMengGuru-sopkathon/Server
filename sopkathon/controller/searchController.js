const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { Meme } = require('../models');

module.exports = {
    readAll: async (req, res) => {
        const { tag } = req.query;
        try {
            const searchData = await Meme.findAll({
                where: {tag: tag}
            });

            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SEARCH_READ_ALL_SUCCESS, searchData));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SEARCH_READ_ALL_FAIL));
        }
    },
}