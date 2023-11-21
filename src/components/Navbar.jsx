import { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            anchorElNav: null
        }
    }



    handleOpenNavMenu = (event) => {
        this.setState({
            anchorElNav: event.currentTarget,
        });
    };

    handleCloseNavMenu = () => {
        this.setState({
            anchorElNav: null,
        });
    }

    render() {

        return (
            <AppBar color="secondary" position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to="/">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontWeight: 600,
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: { "md": 22, "lg": 24 }
                                    }}
                                >
                                    TazaKhabar
                                </Typography>
                            </div>
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={this.handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(this.state.anchorElNav)}
                                onClose={this.handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <Link to="/"><Typography textAlign="center">Home</Typography></Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <Link to="/business"><Typography textAlign="center">Business</Typography></Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <Link to="/entertainment"><Typography textAlign="center">Entertainment</Typography></Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <Link to="/health"><Typography textAlign="center">Health</Typography></Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <Link to="/science"><Typography textAlign="center">Science</Typography></Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <Link to="/sports"><Typography textAlign="center">Sports</Typography></Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <Link to="/technology"><Typography textAlign="center">Technology</Typography></Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <NewspaperIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 600,
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: {"xs": 16, "sm": 20, }
                            }}
                        >
                            TazaKhabar
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link to="/">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link to="/business">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Business
                                </Button>
                            </Link>
                            <Link to="/entertainment">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Entertainment
                                </Button>
                            </Link>
                            <Link to="/health">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Health
                                </Button>
                            </Link>
                            <Link to="/science">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Science
                                </Button>
                            </Link>
                            <Link to="/sports">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Sports
                                </Button>
                            </Link>
                            <Link to="/technology">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Technology
                                </Button>
                            </Link>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}
export default Navbar;


