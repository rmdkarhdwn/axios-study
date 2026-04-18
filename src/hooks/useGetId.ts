import { useEffect } from "react";
import { getPosts } from "../api/posts";

export default function useGetId() {
    useEffect(() => {
        async function a() {
            try {
                console.log(await getPosts());
            } catch (error) {
                console.error(error)
            }
        }
        a();
    },[])
}
