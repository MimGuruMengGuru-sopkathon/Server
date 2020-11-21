const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const { Post } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    todayPost: async (req, res) => {
        try {
            const posts = await Post.findAll({ where: { id: [1, 2, 3, 4, 5, 6, 7, 8] } });
            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.GET_IMAGE_ALL_SUCCESS, posts));

        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.GET_IMAGE_ALL_FAIL));
        }
    },

    readAll: async (req, res) => {
        const { hashtag } = req.query;
        try {
            const readImage = await Post.findAll({
                where: {
                    [Op.or]: [
                        { tag1: hashtag },
                        { tag2: hashtag },
                        { tag3: hashtag }
                    ]
                }
            })

            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.GET_IMAGE_ALL_SUCCESS, readImage));

        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.GET_IMAGE_ALL_FAIL));
        }

    }



}