const fs = require('fs');

module.exports = (src) => {
  return fs.readFileSync(`src/assets/svg/${src}.svg`);
};
