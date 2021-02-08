const packageJson = require('./package.json');
const fs = require("fs");
fs.writeFileSync(
    __dirname + "/lib/version.js",
    `export var JSENCRYPT_VERSION = "${packageJson.version}";`
);