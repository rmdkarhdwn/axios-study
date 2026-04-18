import useGetId from "../hooks/useGetId"


export default function Main() {
    const name = useGetId();
    return (
        <div>
            {name?.map((n)=> <button key={n}>{n}</button>)}
        </div>
    )
}

