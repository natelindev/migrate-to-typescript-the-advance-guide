export interface User {
  id: number;
  firstname: string;
  lastname: string;
  status: 'online' | 'offline';
}

const user: User = {
  id: 1234,
  firstname: 'Bruce',
  lastname: 'Wayne',
  status: 'online',
};

const users = [user];

const onlineUsers = users.filter((u) => u.status === 'online');

console.log(
  onlineUsers.map((ou) => `${ou.firstname} ${ou.lastname} is ${ou.status}`)
);
