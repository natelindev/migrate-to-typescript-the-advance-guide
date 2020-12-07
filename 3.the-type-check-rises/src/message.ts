import camelCase from 'lodash.camelcase';
import someAPI from 'some-js-lib';

import { User } from './models/user';

type Message = {
  content: string;
  createAt: Date;
  likes: number;
};

async function sendMessage(
  from: User,
  to: User,
  message: Message
): Promise<MessageResult> {
  return someAPI.sendMessage(from.id, to.id, camelCase(message.content));
}
