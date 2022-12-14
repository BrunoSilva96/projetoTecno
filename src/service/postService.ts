import { Post, Users } from "../models";

export const postService = {
  posting: async (description: string, userId: number) => {
    const post = await Post.create({ description, userId });

    return post;
  },

  findByPkShowAllPosts: async (id: string) => {
    const postWithUsers = await Users.findByPk(id, {
      attributes: ["name", "email"],
      include: {
        association: "posts",
        attributes: ["id", "description"],
      },
    });

    return postWithUsers;
  },

  findOnePost: async (id: string) => {
    const idPost = await Post.findByPk(id, {
      attributes: ["userId", "description"],
    });

    return idPost;
  },

  updatePost: async (id: string, description: string) => {
    const updatePost = await Post.update({ description }, { where: { id } });

    return updatePost;
  },

  deletePost: async (id: string) => {
    const deletePost = await Post.destroy({ where: { id } });
    return 1;
  },
};
