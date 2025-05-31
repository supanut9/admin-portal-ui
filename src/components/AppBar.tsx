'use client';

import {
  AppBar as AppBarMUI,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Drawer from './Drawer';

const AppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} setOpen={setOpen} />
      <AppBarMUI position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Admin Portal
          </Typography>
        </Toolbar>
      </AppBarMUI>
    </>
  );
};

export default AppBar;
