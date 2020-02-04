const axios = require('axios');
const scrape = require('./scrape');
const parse = require('../reportcard/parse');
const condense = require('./condense');

// Expose simplified API
module.exports = {
  fetch: skywardURL => (
    auth => scrape(axios, skywardURL)(auth)
  ),

  getData: raw => condense(parse(raw)),
};