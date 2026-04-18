import { useEffect,useState } from "react";
import { getPosts } from "../api/posts";

export default function useGetId() {
    const [postName,setpostName] = useState<string[]>([]);
    console.log("훅 실행됨");
    useEffect(() => {
        async function a() {
            const posts = await getPosts();
            setpostName(posts.map((post) => post.name));
        }
        a();
    },[])
    return postName;
}
