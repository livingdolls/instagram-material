import { AddBoxOutlined, BookmarkBorderOutlined, ExploreOutlined,  FavoriteBorderOutlined, HomeOutlined, KeyboardArrowDown, ModeNight, PersonOutlineOutlined, PublishedWithChangesOutlined, Search, SendOutlined, SettingsOutlined, StarOutlineOutlined} from '@mui/icons-material';
import { AppBar, Avatar, IconButton, Input, InputAdornment, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, styled, Switch, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import logo from '../img/static/logo.png'
import profil from '../img/static/Yurina.png'

const NavAppBar = styled(AppBar)((({theme}) => ({
    backgroundColor: theme.palette.background.default,
    height:'67px',
    color:theme.palette.text.primary
})))

const SearchBar = styled('div')((({theme}) => ({
    width:'300px',
    backgroundColor:theme.palette.divider,
    padding:'9px',
    borderRadius:'10px'
})))

const BoxNavContent = styled(Box)((({theme})=> ({
    display:'flex',
    justifyContent:'center',
    aligntItems:'center',
    alignContent:'center'
})))
const Navbar = ({setMode, mode}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorEl2, setAnchorEl2] = useState(null)
    const open =Boolean(anchorEl);
    const open2 =Boolean(anchorEl2);

    const handleClick = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleMenuLogo = e =>{
        setAnchorEl2(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setAnchorEl2(null)
    }

    return(
        <NavAppBar position='sticky'>
            <Box
                ml='auto'
                mr='auto'
                sx={{height:'100%',
                    maxWidth:1048, 
                    display:'flex', 
                    alignContent:'center', 
                    alignItems:'center',
                    gap:'50px', 
                    justifyContent:'space-between'}}>

                <BoxNavContent>
                    <img src={logo} height={35} alt="logo" />
                    <Tooltip title="menu" sx={{ml:-1, mt:-1}} onClick={handleMenuLogo}>
                        <IconButton>
                            <KeyboardArrowDown />
                        </IconButton>
                    </Tooltip>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        >
                        <Paper sx={{width:250, mb:-2, mt:-0.9}} elevation={0}>
                            <MenuList disablePadding >
                                <MenuItem sx={{mb:1}} onClick={() => handleClose()}>
                                    <ListItemIcon>
                                        <PersonOutlineOutlined />
                                    </ListItemIcon>
                                    <ListItemText>Mengikuti</ListItemText>
                                </MenuItem>

                                <MenuItem sx={{mb:1}} onClick={() => handleClose()}>
                                    <ListItemIcon>
                                        <StarOutlineOutlined />
                                    </ListItemIcon>
                                    <ListItemText>Favorit</ListItemText>
                                </MenuItem>

                                <MenuItem sx={{mb:1}} >
                                    <ListItemIcon>
                                        <ModeNight />
                                    </ListItemIcon>
                                    <ListItemText> Mode Tampilan
                                        <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}/>
                                    </ListItemText>
                                </MenuItem>
                            </MenuList>
                        </Paper>
                    </Menu>

                </BoxNavContent>

                <Box sx={{display:{xs:'none', md:'block', lg:'block'}}}>
                    <SearchBar>
                        <Input
                            disableUnderline
                            placeholder='Cari' 
                            startAdornment ={
                                <InputAdornment position='start'>
                                    <Search />
                                </InputAdornment>
                            }
                            sx={{ml:1}}
                        />
                    </SearchBar>                    
                </Box>

                <BoxNavContent 
                    sx={{
                        width:'300px',
                        display:'flex', 
                        alignContent:'center', 
                        alignItems:'center',
                        justifyContent:'space-between'
                        }}>
                    <HomeOutlined sx={{fontSize:'32px'}} />
                    <SendOutlined sx={{fontSize:'32px'}} />
                    <AddBoxOutlined sx={{fontSize:'32px'}} />
                    <ExploreOutlined sx={{fontSize:'32px'}} />
                    <FavoriteBorderOutlined sx={{fontSize:'32px'}} />

                    <Avatar src={profil} sx={{height:30, width:30}} 
                         id="basic-button"
                         aria-controls={open ? 'basic-menu' : undefined}
                         aria-haspopup="true"
                         aria-expanded={open ? 'true' : undefined}
                         onClick={handleClick}
                    />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            >
                            <Paper sx={{width:250, mt:-1}} elevation={1}>
                                <MenuList disablePadding>
                                    <MenuItem sx={{mb:1}} onClick={() => handleClose()}>
                                        <ListItemIcon>
                                            <PersonOutlineOutlined />
                                        </ListItemIcon>
                                        <ListItemText>Profil</ListItemText>
                                    </MenuItem>

                                    <MenuItem sx={{mb:1}} onClick={() => handleClose()}>
                                        <ListItemIcon>
                                            <BookmarkBorderOutlined />
                                        </ListItemIcon>
                                        <ListItemText>Disimpan</ListItemText>
                                    </MenuItem>

                                    <MenuItem sx={{mb:1}} onClick={() => handleClose()}>
                                        <ListItemIcon>
                                            <SettingsOutlined />
                                        </ListItemIcon>
                                        <ListItemText>Pengaturan</ListItemText>
                                    </MenuItem>

                                    <MenuItem sx={{mb:1}} onClick={() => handleClose()}>
                                        <ListItemIcon>
                                            <PublishedWithChangesOutlined />
                                        </ListItemIcon>
                                        <ListItemText>Ganti Akun</ListItemText>
                                    </MenuItem>
                                </MenuList>
                        </Paper>
                            <MenuItem>
                                <ListItemText>Keluar</ListItemText>
                            </MenuItem>
                        </Menu>
                </BoxNavContent>
                
            </Box>
        </NavAppBar>
    )
}

export default Navbar;