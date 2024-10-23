import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createWorkspaceSchema } from "@/features/workspaces/schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";
import { ID } from "node-appwrite";

const app = new Hono()
    .post(
        "/", 
        zValidator("json", createWorkspaceSchema),
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");
            const storage = c.get("storage");
            const user = c.get("user");
            
            const { name, image } = c.req.valid("json");

            let uploadedImageUrl: string | undefined;

            if (image instanceof Image) {
                const file = await storage.createFile(
                    IMAGE_BUCKET_ID,
                    ID.unique(),    
                    image,
                );
                
                const arrayBuffer = await storage.getFilePreview(
                    IMAGE_BUCKET_IT,
                    file.$id,
                );
            }
            
            const workspace = await databases.createDocument(
                DATABASE_ID,
                WORKSPACES_ID,
                ID.unique(),
                {
                    name,
                    userId: user.$id,
                },
            );

            return c.json({ data: workspace });
        },
    );

export default app;