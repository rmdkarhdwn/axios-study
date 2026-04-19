import useGetId from "../hooks/useGetId"
import { MainContainer,Button } from "../styles/MainScreen.style";


export default function Main() {
    const name = useGetId();
    return (
        <MainContainer>
            {name?.map((n)=> <Button selected={true} key={n}>{n}</Button>)}
        </MainContainer>
    )
}

