import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Mutation to create a new post
export const createPost = mutation({
  args: {
    title: v.string(),
    authorEmail: v.string(),
    description: v.string(),
    category: v.string(),
    imageUrl: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    const { title, authorEmail, description, category, imageUrl } = args;

    // Ensure the user exists
    const user = await ctx.db.query("users").filter(q => q.eq(q.field("email"), authorEmail)).first();
    if (!user) {
      throw new Error("User not found");
    }

    // Insert the post
    await ctx.db.insert("posts", {
      title,
      authorEmail,
      description,
      category,
      imageUrl,
      createdAt: new Date().toISOString(),
    });
  },
});

// Mutation to generate an upload URL for images
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// Mutation to store an uploaded image
export const sendImage = mutation({
  args: {
    storageId: v.id("_storage"),
    authorEmail: v.string(),
  },
  handler: async (ctx, args) => {
    const { storageId, authorEmail } = args;

    // Ensure the user exists
    const user = await ctx.db.query("users").filter(q => q.eq(q.field("email"), authorEmail)).first();
    if (!user) {
      throw new Error("User not found");
    }

    // Insert the image
    await ctx.db.insert("images", {
      storageId,
      authorEmail,
      format: "image",
      createdAt: new Date().toISOString(),
    });
  },
});
