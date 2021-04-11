const _ = require("lodash");
const data = new Map();
module.exports = {
    saveLaptop:  async laptop => {
        if (data.get(laptop.getId())) {
            throw "Laptop already exist in the store";
        }
        data.set(laptop.getId(), _.cloneDeep(laptop));
    }
};