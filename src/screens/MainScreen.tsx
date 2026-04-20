import useGetId from "../hooks/useGetId"
import { MainContainer,Button } from "../styles/MainScreen.style";


export default function Main() {
    const { names, isLoading, error } = useGetId();
    if (isLoading) {
        return <div>로딩중...</div>
    }
    if (error) {
        return <div>에러 : {error.message}</div>
    }
    return (
        <MainContainer>
            {names &&names.map((n)=> <Button selected={true} key={n}>
                {n}
            </Button>)}
        </MainContainer>
    )
}

