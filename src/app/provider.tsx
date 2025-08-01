'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const getTheme = () =>
  createTheme({
    palette: {
      mode: 'light',
    },
  });

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const theme = getTheme();

  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default Provider;
