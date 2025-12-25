import { defineConfig } from "prisma/config"

export default defineConfig({
  datasource: {
    url: "postgresql://neondb_owner:npg_JSOAx2GhgKF5@ep-long-tooth-a41dm53c-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
})
