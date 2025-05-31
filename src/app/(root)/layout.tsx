import AppBar from '@/components/AppBar';
import { Box } from '@mui/material';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box>
      <AppBar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
