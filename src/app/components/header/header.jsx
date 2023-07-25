'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';
import { Button, IconButton } from '@mui/material';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import DrawerMenu from './drawer/drawer';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ direction: 'flex', justifyContent: 'center', height: 72 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: { xs: 1, sm: 2 }, pr: 0 }}
          >
            <MenuOutlinedIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', height: 40 }}
          >
            <LogoDevIcon sx={{ fontSize: 40, mr: 1 }} />

            <Typography
              variant="h5"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                fontSize: '30px',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              LOGO
            </Typography>
          </Link>

          <Button
            variant="contained"
            color="success"
            startIcon={<AppsIcon />}
            sx={{
              height: 40,
              mr: 2,
              minWidth: 100,
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            Catologue
          </Button>

          <FormControl
            variant="outlined"
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexGrow: 1,
              mr: 2,
            }}
          >
            <OutlinedInput
              placeholder="search..."
              type="text"
              aria-label="search items"
              sx={{ flexGrow: 1, height: 40, pr: 0, background: '#fff' }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              endAdornment={
                <Button
                  position="end"
                  variant="contained"
                  sx={{
                    height: '100%',
                    color: '#fff',
                  }}
                >
                  Find
                </Button>
              }
            />
          </FormControl>

          <Box
            sx={{
              justifyContent: 'end',
            }}
          >
            <IconButton color="inherit" aria-label="shoping basket">
              <Link href="/basket">
                <ShoppingBasketOutlinedIcon sx={{ fontSize: 40 }} />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
        <DrawerMenu
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </AppBar>
    </>
  );
}
