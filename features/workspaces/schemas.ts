export const createWorkspaceSchema = z.object({
    name: z.string().trim(1, "Required"),    
});
