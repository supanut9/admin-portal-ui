import {
  AppBar as AppBarMUI,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from '@mui/material';

import MenuButtonWithDrawer from './MenuButtonWithDrawer';
import SignIn from './sign-in';
import { auth } from '@/auth';

const AppBar = async () => {
  const session = await auth();

  return (
    <AppBarMUI position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <MenuButtonWithDrawer />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Admin Portal
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <SignIn />
          <Avatar src={session?.user?.image || ''} alt="profile" />
        </Box>
      </Toolbar>
    </AppBarMUI>
  );
};

export default AppBar;
