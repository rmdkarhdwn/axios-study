import styled from "styled-components";
import { useLocation,useNavigate } from "react-router-dom";
import type { ThemeMode } from "../styles/MainScreen.style";

type HeaderProps = {
    theme: ThemeMode;
    toggleTheme: () => void;
};

export default function Header({theme, toggleTheme}: HeaderProps) {
    const location = useLocation()
	const navigate = useNavigate()
    const showBackButton = location.pathname !== "/";
    return (
        <HeaderContainer $theme={theme}>
            {showBackButton && <BackButton $theme={theme} onClick={() => navigate(-1)}>뒤로가기</BackButton>}
            <Title $theme={theme}>Users</Title>
            <ThemeButton $theme={theme} onClick={toggleTheme}>
                {theme === "light" ? "다크모드" : "라이트모드"}
            </ThemeButton>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div<{ $theme: ThemeMode }>`
    width: min(960px, 96vw);
    min-height: 68px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 18px;
    border-radius: 18px;
    border: 1px solid ${({ $theme }) => ($theme === "dark" ? "rgba(150, 186, 255, 0.2)" : "rgba(73, 119, 228, 0.2)")};
    background: ${({ $theme }) =>
        $theme === "dark"
            ? "linear-gradient(125deg, rgba(22, 32, 57, 0.95), rgba(12, 18, 35, 0.95))"
            : "linear-gradient(125deg, rgba(255, 255, 255, 0.9), rgba(235, 243, 255, 0.95))"};
    box-shadow: ${({ $theme }) => ($theme === "dark" ? "0 20px 32px rgba(4, 8, 18, 0.35)" : "0 20px 32px rgba(89, 126, 200, 0.16)")};
`;

const Title = styled.h1<{ $theme: ThemeMode }>`
    margin: 0;
    color: ${({ $theme }) => ($theme === "dark" ? "#dbe7ff" : "#123063")};
    font-size: 18px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;

const BaseButton = styled.button<{ $theme: ThemeMode }>`
    min-height: 38px;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid ${({ $theme }) => ($theme === "dark" ? "rgba(194, 214, 255, 0.35)" : "rgba(78, 124, 228, 0.35)")};
    background: ${({ $theme }) =>
        $theme === "dark"
            ? "rgba(32, 43, 71, 0.8)"
            : "rgba(255, 255, 255, 0.88)"};
    color: ${({ $theme }) => ($theme === "dark" ? "#eaf1ff" : "#123063")};
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
    white-space: nowrap;

    &:hover {
        transform: translateY(-1px);
        background: ${({ $theme }) =>
            $theme === "dark" ? "rgba(47, 61, 98, 0.9)" : "rgba(246, 250, 255, 0.98)"};
    }
`;

const BackButton = styled(BaseButton)``;

const ThemeButton = styled(BaseButton)`
    padding: 8px 12px;
    margin-left: auto;
`;
