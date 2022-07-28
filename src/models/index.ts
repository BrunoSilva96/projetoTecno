import { Users } from "./User"
import { Post } from "./Post"
import { Roles } from "./Roles";


Users.hasMany(Post, { as: 'posts' });
Users.belongsTo(Roles, { as: 'roles' });

Roles.hasMany(Users, { as: 'user' });

Post.belongsTo(Users);


export {
   Users,
   Post,
   Roles
}