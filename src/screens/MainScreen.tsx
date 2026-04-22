import useGetUser from "../hooks/useGetUsers"
import Header from "../Components/header";
import { useNavigate } from "react-router-dom";
import { MainContainer,Button } from "../styles/MainScreen.style";


export default function Main(theme) {
    const navigate = useNavigate();
    const { users, isLoading, error } = useGetUser();
    if (isLoading) {
        return <div>로딩중...</div>
    }
    if (error) {
        return <div>에러 : {error.message}</div>
    }
    return (
        <MainContainer $theme={theme}>
            <Header/>
            {users.map((user)=>
                <Button
                    key={user.id}
                    $theme={theme}
                    onClick={()=> navigate(`/user/${user.id}`)}
                >
                {user.name}
            </Button>)}
        </MainContainer>
    )
}
