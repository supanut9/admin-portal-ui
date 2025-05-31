'use client';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer';

const MenuButtonWithDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
};

export default MenuButtonWithDrawer;
