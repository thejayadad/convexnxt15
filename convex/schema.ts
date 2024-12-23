import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatar: v.string(),
    createdAt: v.string(),
  }).index("by_email", ["email"]),
  
  posts: defineTable({
    title: v.string(),
    authorEmail: v.string(), // Relation to users via email
    description: v.string(),
    category: v.string(),
    imageUrl: v.optional(v.id("_storage")), // Reference to storage
    createdAt: v.string(),
  }).index("by_author_email", ["authorEmail"]),
  
  images: defineTable({
    storageId: v.id("_storage"),
    authorEmail: v.string(),
    format: v.string(),
    createdAt: v.string(),
  }).index("by_author_email", ["authorEmail"]),
});
