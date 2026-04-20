import {useState} from "react";
import useGetId from "../hooks/useGetId"
import { MainContainer,Button } from "../styles/MainScreen.style";


export default function Main() {
    const [selectedName,setSelectedName] = useState<string | null>(null);
    const { names, isLoading, error } = useGetId();
    if (isLoading) {
        return <div>로딩중...</div>
    }
    if (error) {
        return <div>에러 : {error.message}</div>
    }
    return (
        <MainContainer>
            {names &&names.map((n)=>
                <Button
                    selected={selectedName === n}
                    key={n}
                    onClick={()=>setSelectedName(n)}
                >
                {n}
            </Button>)}
        </MainContainer>
    )
}

