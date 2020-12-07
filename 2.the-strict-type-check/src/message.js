/// <reference path="./models/user.d.ts" />
/// <reference path="./message.d.ts" />

const someLib = require('some-js-lib');
const camelCase = require('lodash.camelcase');

/**
 * @param {User} from
 * @param {User} to
 * @param {Message} message
 * @returns {Promise<MessageResult>}
 */
async function sendMessage(from, to, message) {
  return someLib.sendMessage(from.id, to.id, camelCase(message.content));
}
