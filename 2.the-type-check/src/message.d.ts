type Message = {
  content: string;
  createAt: Date;
  likes: number;
};

type sendMessage = (
  from: User,
  to: User,
  message: Message
) => Promise<MessageResult>;
