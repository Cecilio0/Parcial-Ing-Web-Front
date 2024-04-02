"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fighter_helper_1 = require("./helpers/fighter.helper");
const jwt_helper_1 = require("./helpers/jwt.helper");
const main = async () => {
    const jwt = await (0, jwt_helper_1.authenticate)({
        username: 'Cecilio',
        password: 'password',
    });
    if (typeof jwt == 'string') {
        const names = await (0, fighter_helper_1.getFighterNames)(jwt);
        console.log(names);
    }
};
main();
//# sourceMappingURL=fight.main.js.map