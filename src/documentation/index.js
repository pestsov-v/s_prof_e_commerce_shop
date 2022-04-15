const path = require("path");
const YAML = require("yamljs");

const main = path.resolve(__dirname, "./main.yaml");
const documentation = YAML.load(main);

module.exports = documentation;
