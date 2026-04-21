import Header from "../Components/header"
import useGetUser from "../hooks/useGetUsers"
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { MainContainer,Button } from "../styles/MainScreen.style";

export default function Userdeta() {
    const { users, isLoading, error } = useGetUser();
    const params = useParams();
    const selectedUser = users.find((user) => Number(params.id) === user.id)
    if (isLoading) {
        return <div>로딩중...</div>
    }
    if (error) {
        return <div>에러 : {error.message}</div>
    }
    if (!selectedUser) {
        return <div>유저를 찾을 수 없습니다</div>;
    }
    return(
        <MainContainer>
            <Header></Header>
            <Div>
                {selectedUser.id}
                /
                {selectedUser.name}
                /
                {selectedUser.username}
                <Button>수정</Button>
                <Button>삭제</Button>
            </Div>
        </MainContainer>
    )
}
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`