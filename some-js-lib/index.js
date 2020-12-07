export default {
  sendMessage(from, to, message) {
    console.log(`message ${message} from ${from} to ${to} sent successfully`);
    return {
      ok: true,
      statusCode: 200,
      json: () => ({
        data: 123,
      }),
      text: () => '{data:123}',
    };
  },
};
