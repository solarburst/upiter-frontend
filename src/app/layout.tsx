import { PageLayout } from '@/layouts';
import { GlobalStyle, StyledComponentsRegistry, ThemeProvider } from '@/shared/styles';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ru">
            <StyledComponentsRegistry>
                <ThemeProvider>
                    <GlobalStyle />
                    <body>
                        <PageLayout>{children}</PageLayout>
                    </body>
                </ThemeProvider>
            </StyledComponentsRegistry>
        </html>
    );
};

export default RootLayout;
