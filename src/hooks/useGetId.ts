import { getPosts } from "../api/posts";
import { useQuery } from "@tanstack/react-query";

type User = {
    id : number;
    name : string;
}

export default function useGetId() {
    const { data,isLoading,error } = useQuery<User[]>({
        queryKey: ["posts"],
        queryFn: getPosts,
    });
    return {
        names : data?.map((d)=> d.name) || [],
        isLoading,
        error
    }
};

