import {client} from "@/lib/rpc";
import {useMutation} from "@tanstack/react-query";
import {InferRequestType, InferResponseType} from "hono";

type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>;

export const useLogout = () => {
    return useMutation<ResponseType, Error>({
        mutationFn: async (json) => {
            const response = await client.api.auth.logout["$post"]();
            return response.json();
        }
    });
}
