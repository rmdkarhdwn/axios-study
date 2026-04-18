import useGetId from "../hooks/useGetId"


export default function Main() {
    console.log("Main 렌더링됨");
    useGetId();
    return (
        <div>main</div>
    )
}