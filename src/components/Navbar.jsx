import { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '6ch',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
        [theme.breakpoints.only('md')]: {
            width: '6ch',
            '&:focus': {
                width: '10ch',
            },
        },
        [theme.breakpoints.only('xs')]: {
            width: '6ch',
            '&:focus': {
                width: '10ch',
            },
        },
    },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


export class Navbar extends Component {

    static propTypes = {
        handleEnterPress: PropTypes.func.isRequired,
        handleNavClick: PropTypes.func.isRequired,
    }

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
                        <Box sx={{ display: 'flex', width: "100vw", alignItems: 'center', xs: { justifyContent: 'space-between', alignItems: 'center', }, }}>
                            <Link to="/">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component="img" src="/icon.png" alt="icon" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: 32 }} />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mr: 2,
                                            fontWeight: 600,
                                            display: { xs: 'none', md: 'flex' },
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
                                    onClick={this.handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <MenuItem onClick={this.props.handleNavClick}>
                                        <Link to="/"><Typography textAlign="center">Home</Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.props.handleNavClick}>
                                        <Link to="/business"><Typography textAlign="center">Business</Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.props.handleNavClick}>
                                        <Link to="/entertainment"><Typography textAlign="center">Entertainment</Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.props.handleNavClick}>
                                        <Link to="/health"><Typography textAlign="center">Health</Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.props.handleNavClick}>
                                        <Link to="/science"><Typography textAlign="center">Science</Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.props.handleNavClick}>
                                        <Link to="/sports"><Typography textAlign="center">Sports</Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.props.handleNavClick}>
                                        <Link to="/technology"><Typography textAlign="center">Technology</Typography></Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
                                <Box component="img" src="/icon.png" alt="icon" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: 32, }} />
                                <Typography
                                    variant="h6"
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 2,
                                        display: { xs: "none", sm: "flex", md: 'none' },
                                        flexGrow: 1,
                                        fontWeight: 600,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        fontSize: { "xs": 16, "sm": 20, }
                                    }}
                                >
                                    TazaKhabar
                                </Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Link to="/">
                                    <Button
                                        onClick={this.props.handleNavClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Home
                                    </Button>
                                </Link>
                                <Link to="/business">
                                    <Button
                                        onClick={this.props.handleNavClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Business
                                    </Button>
                                </Link>
                                <Link to="/entertainment">
                                    <Button
                                        onClick={this.props.handleNavClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Entertainment
                                    </Button>
                                </Link>
                                <Link to="/health">
                                    <Button
                                        onClick={this.props.handleNavClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Health
                                    </Button>
                                </Link>
                                <Link to="/science">
                                    <Button
                                        onClick={this.props.handleNavClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Science
                                    </Button>
                                </Link>
                                <Link to="/sports">
                                    <Button
                                        onClick={this.props.handleNavClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Sports
                                    </Button>
                                </Link>
                                <Link to="/technology">
                                    <Button
                                        onClick={this.props.handleNavClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Technology
                                    </Button>
                                </Link>
                            </Box>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    onKeyDown={this.props.handleEnterPress}
                                    placeholder="Search…"
                                />
                            </Search>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}
export default Navbar;


