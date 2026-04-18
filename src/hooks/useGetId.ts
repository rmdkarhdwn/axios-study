import { useEffect } from "react";
import { getPosts } from "../api/posts";

export default function useGetId() {
    console.log("훅 실행됨");
    useEffect(() => {
        async function a() {
            const posts = await getPosts();
            const postId = posts.map((post) => post.id);
            console.log(postId);
        }
        a();
    },[])
}
