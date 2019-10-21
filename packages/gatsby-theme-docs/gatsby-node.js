const withDefaults = require('./utils/default-options');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

exports.onPreBootstrap = ({ store }, options) => {
  const {program } = store.getState();
  const { contentPath } = withDefaults(options);
  const dir = path.join(program.directory, contentPath);
  //todo get options with defaults
  //todo figure out the content path
  //todo if directory create it
}

if (!fs.existsSync(dir)) {
  mkdirp.sync(dir);
}
