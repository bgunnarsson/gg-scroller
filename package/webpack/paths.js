const os = require('os');
const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

const platform = os.platform();
let globalNpmModules;

if (platform === 'win32') {
  globalNpmModules = path.resolve(process.env.APPDATA, 'npm', 'node_modules');
} else {
  globalNpmModules = path.resolve('/usr/local/lib/node_modules');
}

module.exports = {
  public: path.resolve(CURRENT_WORKING_DIR, 'build'),
  source: path.resolve(CURRENT_WORKING_DIR, 'src'),
  build: path.resolve(CURRENT_WORKING_DIR, 'build'),
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
}
