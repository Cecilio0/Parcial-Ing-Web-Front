"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
require("dotenv/config");
const axios_1 = require("axios");
const API_URL = `${process.env.API_URL}/users`;
const authenticate = async ({ username, password, }) => {
    axios_1.default
        .post(`${API_URL}/authenticate`, {
        username,
        password,
    })
        .then(response => {
        console.log(response.data.token);
        const result = response.data.token;
        return result;
    })
        .catch(error => {
        console.log(error);
    });
};
exports.authenticate = authenticate;
//# sourceMappingURL=jwt.helper.js.map