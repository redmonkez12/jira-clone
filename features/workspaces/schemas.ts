export const createWorkspaceSchema = z.object({
        name: z.string().trim(1, "Required"),
        image: z.union([
            z.instanceof(File),
            z.string().transform(value => value === "" ? undefined : value),
        ]).optional(),
});
