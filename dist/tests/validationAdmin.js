"use strict";
const validationAdminPage_1 = require("../page-objects/validationAdminPage");
const loginAdminPage_1 = require("../selectors/loginAdminPage");
const f = require("../service/exportFunction");
module.exports = {
    tags: ["ValidationAdminPage"],
    "Validation Admin Page": (browser) => {
        const browserN = browser.options.desiredCapabilities.browserName;
        new validationAdminPage_1.ValidationAdminPage(browser, f, loginAdminPage_1.selectors, "ValidationAdminPage.txt", browserN).testAdmin();
    },
};
//# sourceMappingURL=validationAdmin.js.map