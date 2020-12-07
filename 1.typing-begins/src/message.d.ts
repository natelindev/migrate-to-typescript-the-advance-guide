import { User } from './models/user';

type Message = {
  content: string;
  createAt: Date;
  likes: number;
};

interface MessageResult {
  ok: boolean;
  statusCode: number;
  json: () => Promise<any>;
  text: () => Promise<string>;
}

type sendMessage = (
  from: User,
  to: User,
  message: Message
) => Promise<MessageResult>;
