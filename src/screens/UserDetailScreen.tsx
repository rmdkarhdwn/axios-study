import Header from "../Components/header"
import useGetUser from "../hooks/useGetUsers"
import { useNavigate} from "react-router-dom";
import { deleteUser } from "../api/delete";
import { updateUsername } from "../api/petch";
import { useParams } from "react-router-dom";
import { MainContainer, Button, UserCard, UserMeta } from "../styles/MainScreen.style";


export default function Userdeta(theme) {
    const { users, isLoading, error } = useGetUser();
    const params = useParams();
    const navigate = useNavigate();
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
    const handleDelete = async()=> {
        await deleteUser(selectedUser.id)
        navigate("/")
    }
    const handlePetch = async() => {
        await updateUsername(selectedUser.id,"Hello world")
    }
    return(
        <MainContainer $theme={theme}>
            <Header/>
            <UserCard $theme={theme}>
                <UserMeta $theme={theme}>ID: {selectedUser.id}</UserMeta>
                <UserMeta $theme={theme}>Name: {selectedUser.name}</UserMeta>
                <UserMeta $theme={theme}>Username: {selectedUser.username}</UserMeta>
                <Button $theme={theme} onClick={handlePetch}>수정</Button>
                <Button $theme={theme} onClick={handleDelete}>삭제</Button>
            </UserCard>
        </MainContainer>
    )
}
