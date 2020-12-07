interface MessageResult {
  ok: boolean;
  statusCode: number;
  json: () => Promise<any>;
  text: () => Promise<string>;
}

declare module 'some-js-lib' {
  export const sendMessage: (
    from: number,
    to: number,
    message: string
  ) => Promise<MessageResult>;
}
