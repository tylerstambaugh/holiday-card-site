import { Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";

const pages = [{ name: 'Home', route: '/' }, { name: 'Archive', route: '/archive' }];


export const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

    <Toolbar className="header">
      <Box sx={{ display: { md: 'none' } }}>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{color: "beige"}}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={() => { navigate(`${page.route}`); handleCloseNavMenu() }}>
              <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Link variant="h6" underline="none" color="inherit" href="/">
        <Typography
          variant="h6"
          noWrap
          className="header-title"
          sx={{
            // mr: 2,
            // fontFamily: 'monospace',
            // fontWeight: 700,
            // letterSpacing: '.3rem',
            // color: 'inherit',
            // textDecoration: 'none',
            display: { xs: 'flex', md: 'none' },
          }}
        >
          Tyler's Holiday Cards
        </Typography>
      </Link>


      <Link variant="h3" underline="none" color="inherit" href="/" >
        <Typography
          variant="h3"
          className="header-title"
          sx={{
            // fontFamily: 'monospace',
            // fontWeight: 700,
            // color: 'inherit',
            // textDecoration: 'none',
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          Tyler's Holiday Cards
        </Typography>
      </Link>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} >
        {pages.map((page) => (
          <Button
            key={page.name}
            onClick={() => { navigate(`${page.route}`); handleCloseNavMenu() }}
            sx={{ color: 'white', display: 'block', marginLeft: 2}}
            className={"header-nav-buttons"}
            
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
}