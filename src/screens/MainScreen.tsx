import {useState} from "react";
import useGetId from "../hooks/useGetUsers"
import { MainContainer,Button } from "../styles/MainScreen.style";


export default function Main() {
    const [selectedUserId,setselectedUserId] = useState<string | null>(null);
    const { users, isLoading, error } = useGetId();
    if (isLoading) {
        return <div>로딩중...</div>
    }
    if (error) {
        return <div>에러 : {error.message}</div>
    }
    return (
        <MainContainer>
            {users &&users.map((user)=>
                <Button
                    selected={selectedUserId === user.name}
                    key={user.id}
                    onClick={()=>setselectedUserId(user.name)}
                >
                {user.name}
            </Button>)}
        </MainContainer>
    )
}

