import styled from "styled-components";
import { useLocation,useNavigate } from "react-router-dom";

export default function Header() {
    const location = useLocation()
	const navigate = useNavigate()
    const showBackButton = location.pathname !== "/";
    return (
        <HeaderContainer>
            {showBackButton && <button onClick={() => navigate(-1)}>뒤로가기</button>}
            <Title>Users</Title>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: #222;
`;

const Title = styled.h1`
    color: white;
    font-size: 20px;
`;