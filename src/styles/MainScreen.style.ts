import styled, { css } from "styled-components";

export type ThemeMode = "light" | "dark";

type ThemeProps = {
    $theme: ThemeMode;
};

export const MainContainer = styled.div<ThemeProps>`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
    padding: 32px 20px 48px;
    ${({ $theme }) =>
        $theme === "dark"
            ? css`
                background:
                    radial-gradient(circle at 15% 10%, rgba(100, 149, 237, 0.2), transparent 30%),
                    radial-gradient(circle at 85% 80%, rgba(72, 61, 139, 0.35), transparent 34%),
                    linear-gradient(160deg, #0b1020 0%, #131a2e 45%, #0a1022 100%);
                color: #eef3ff;
                `
            : css`
                background:
                    radial-gradient(circle at 15% 10%, rgba(126, 162, 255, 0.2), transparent 32%),
                    radial-gradient(circle at 85% 80%, rgba(148, 201, 255, 0.22), transparent 34%),
                    linear-gradient(160deg, #eff4ff 0%, #dbe9ff 48%, #f5f8ff 100%);
                    color: #15203c;
                `}
    box-sizing: border-box;
`;

export const Button = styled.button<ThemeProps>`
    width: min(360px, 92vw);
    min-height: 56px;
    margin: 0;
    padding: 14px 16px;
    border-radius: 14px;
    border: 1px solid ${({ $theme }) => ($theme === "dark" ? "rgba(176, 201, 255, 0.22)" : "rgba(30, 73, 182, 0.18)")};
    background: ${({ $theme }) =>
        $theme === "dark"
            ? "linear-gradient(145deg, rgba(30, 39, 66, 0.9), rgba(16, 23, 43, 0.95))"
            : "linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(243, 248, 255, 0.95))"};
    color: ${({ $theme }) => ($theme === "dark" ? "#f4f7ff" : "#14274d")};
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: ${({ $theme }) => ($theme === "dark" ? "rgba(185, 211, 255, 0.5)" : "rgba(50, 101, 224, 0.36)")};
        box-shadow: ${({ $theme }) => ($theme === "dark" ? "0 14px 28px rgba(7, 11, 24, 0.45)" : "0 14px 28px rgba(73, 107, 191, 0.2)")};
    }

    &:active {
        transform: translateY(0);
    }
`;

export const UserCard = styled.div<ThemeProps>`
    width: min(420px, 92vw);
    padding: 24px 20px;
    border-radius: 18px;
    border: 1px solid ${({ $theme }) => ($theme === "dark" ? "rgba(176, 201, 255, 0.2)" : "rgba(64, 112, 224, 0.2)")};
    background: ${({ $theme }) =>
        $theme === "dark"
            ? "linear-gradient(145deg, rgba(23, 31, 55, 0.92), rgba(13, 19, 37, 0.95))"
            : "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 246, 255, 0.95))"};
    box-shadow: ${({ $theme }) => ($theme === "dark" ? "0 24px 42px rgba(4, 8, 20, 0.4)" : "0 24px 42px rgba(95, 133, 214, 0.2)")};
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const UserMeta = styled.p<ThemeProps>`
    margin: 0;
    font-size: 15px;
    color: ${({ $theme }) => ($theme === "dark" ? "#dfe7ff" : "#1f3566")};
`;
