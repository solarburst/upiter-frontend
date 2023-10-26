import { GlobalStyle, StyledComponentsRegistry, ThemeProvider } from '@/shared/styles';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ru">
            <StyledComponentsRegistry>
                <ThemeProvider>
                    <GlobalStyle />
                    <body>{children}</body>
                </ThemeProvider>
            </StyledComponentsRegistry>
        </html>
    );
};

export default RootLayout;
