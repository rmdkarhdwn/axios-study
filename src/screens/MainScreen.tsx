import useGetId from "../hooks/useGetId"


export default function Main() {
    const name = useGetId();
    return (
        <div>
            {name?.map((n)=> <div key={n}>{n}</div>)}
        </div>
    )
}