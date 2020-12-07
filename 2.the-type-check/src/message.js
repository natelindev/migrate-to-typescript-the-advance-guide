/// <reference path="./message.d.ts" />

const someLib = require('some-js-lib');
const camelCase = require('lodash.camelcase');

/**
 * @type {sendMessage}
 */
async function sendMessage(from, to, message) {
  return someLib.sendMessage(from.id, to.id, camelCase(message.content));
}
