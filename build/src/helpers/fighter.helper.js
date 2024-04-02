"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFighterNames = void 0;
require("dotenv/config");
const axios_1 = require("axios");
const API_URL = `${process.env.API_URL}/fighters`;
const getFighterNames = async (jwt) => {
    axios_1.default
        .get(`${API_URL}/names`, {
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
exports.getFighterNames = getFighterNames;
//# sourceMappingURL=fighter.helper.js.map