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
  public: path.resolve(CURRENT_WORKING_DIR, '../Vettvangur.Site/build'),
  source: path.resolve(CURRENT_WORKING_DIR, 'src'),
  templates: path.resolve(CURRENT_WORKING_DIR, 'src/templates'),
  build: path.resolve(CURRENT_WORKING_DIR, '../Vettvangur.Site/build'),
  devServerContent: path.resolve(CURRENT_WORKING_DIR, '../Vettvangur.Site'),
  certKey: path.resolve(globalNpmModules, 'localcert', 'localhostserver.key'),
  certFile: path.resolve(globalNpmModules, 'localcert', 'localhostserver.crt'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'src/assets'),
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
  fonts: path.resolve(CURRENT_WORKING_DIR, 'src/assets/fonts'),
  images: path.resolve(CURRENT_WORKING_DIR, 'src/assets/images'),
  components: path.resolve(CURRENT_WORKING_DIR, 'src/scripts/components/index.ts'),
  utility: path.resolve(CURRENT_WORKING_DIR, 'src/scripts/utility'),
  helpers: path.resolve(CURRENT_WORKING_DIR, 'src/scripts/utility/helpers.ts'),
  interfaces: path.resolve(CURRENT_WORKING_DIR, 'src/scripts/utility/interfaces.ts'),
  polyfills: path.resolve(CURRENT_WORKING_DIR, 'src/scripts/utility/polyfills.ts')
}
