import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_sOjpJ9DkvQ7d@ep-royal-rice-adm4liqk-pooler.c-2.us-east-1.aws.neon.tech/ai-short-video-generator?sslmode=require&channel_binding=require'
  
});