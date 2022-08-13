import { Users } from "./User"
import { Post } from "./Post"
import { Role } from "./Role";

Role.hasMany(Users, { as: 'users' });

Users.hasMany(Post, { as: 'posts' });
Users.belongsTo(Role);

Post.belongsTo(Users);


export {
   Users,
   Post,
   Role
}