import { User } from "./User"
import { Post } from "./Post"

User.hasMany(Post, { as: 'posts' });

Post.belongsTo(User);


export {
   User,
   Post
}