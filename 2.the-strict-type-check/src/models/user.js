/// <reference path="./user.d.ts" />

/**
 * @type {User}
 */
const user = {
  id: 1234,
  firstname: 'Bruce',
  lastname: 'Wayne',
  status: 'online',
};

/**
 * @type {User[]}
 */
const users = [user];

const onlineUsers = users.filter((u) => u.status === 'online');

console.log(
  onlineUsers.map((ou) => `${ou.firstname} ${ou.lastname} is ${ou.status}`)
);
