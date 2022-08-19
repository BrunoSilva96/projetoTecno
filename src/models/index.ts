import { Users } from "./User";
import { Post } from "./Post";
import { Role } from "./Role";
import { Upload } from "./Upload";
import { Active } from "./Actives";

Role.hasMany(Users, { as: "users" });

Users.hasMany(Post, { as: "posts" });
Users.belongsTo(Role);
Users.hasMany(Active);

Post.belongsTo(Users);
Post.hasOne(Upload, { as: "uploads" });

Upload.belongsTo(Post);
Upload.belongsTo(Active);

Active.hasMany(Upload, { as: "uploads" });
//Active.belongsToMany(Users, { through: Post });
//Conferir se os relacionamentos estão certos, apos implementar o upload de arquivos testar todos os relacionamentos

export { Users, Post, Role };
