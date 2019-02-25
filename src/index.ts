#!/usr/bin/env node

import Creator from './helper';
const creator = new Creator();
const args = require('minimist')(process.argv.slice(2))
if (creator.createReadme()) {
  let summaryPath = args['summary'];
  if (!summaryPath || summaryPath.length <= 0) {
    summaryPath = undefined;
  }
  creator.insertBadges(summaryPath);
}
