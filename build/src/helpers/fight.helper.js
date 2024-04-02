"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFight = void 0;
require("dotenv/config");
const axios_1 = require("axios");
const API_URL = `${process.env.API_URL}/fight`;
const getFight = async (jwt, id_fight) => {
    axios_1.default
        .get(`${API_URL}/id/${id_fight}`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then((response) => {
        console.log(response);
        const result = response.data;
        return result;
    })
        .catch((error) => {
        console.log(error);
    });
};
exports.getFight = getFight;
//# sourceMappingURL=fight.helper.js.map