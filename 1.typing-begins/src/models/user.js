/**
 * @typedef {import('./user').User} User
 */

/**
 * @type {User}
 */
const user = {
  firstname: 'Bruce',
  lastname: 'Wayne',
  status: 'online',
};

/**
 * @type {User[]}
 */
const users = [];

const onlineUsers = users.filter((u) => u.status === 'online');
