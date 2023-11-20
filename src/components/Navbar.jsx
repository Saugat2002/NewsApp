import { Component } from 'react'
import PropTypes from 'prop-types'
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

    static propTypes = {
        handleBusinessClick: PropTypes.func.isRequired,
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
                        <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 600,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            TazaKhabar
                        </Typography>

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
                                    <a href="/"><Typography textAlign="center">Home</Typography></a>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <a href="/about"><Typography textAlign="center">About</Typography></a>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseNavMenu}>
                                    <a href="/contact"><Typography textAlign="center">COntact</Typography></a>
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
                            }}
                        >
                            TazaKhabar
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                            <a href="/">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Home
                                </Button>
                            </a>
                            <a href="/business">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Business
                                </Button>
                            </a>
                            <a href="/entertainment">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Entertainment
                                </Button>
                            </a>
                            <a href="/health">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Health
                                </Button>
                            </a>
                            <a href="/science">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Science
                                </Button>
                            </a>
                            <a href="/sports">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Sports
                                </Button>
                            </a>
                            <a href="/technology">
                                <Button
                                    onClick={this.handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Technology
                                </Button>
                            </a>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}
export default Navbar;


