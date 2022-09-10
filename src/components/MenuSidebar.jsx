import { Avatar, Box, Link, List, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from "@mui/material";
import asuka from '../img/static/asuka.png';
import yurhir from '../img/static/YurHir.png';
import yurina from '../img/static/YurinaHirate.png';

const BoxProfil = styled(Box)((({theme}) => ({
    display:'flex',
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center'
})))

const MenuSideBar = () => {
    return(
        <>
        <BoxProfil>
            <List disablePadding sx={{ml:-2}}>
                <ListItemButton>
                    <ListItemIcon>
                        <Avatar src={asuka} sx={{width:60, height:60}} />
                    </ListItemIcon>
                    <ListItemText sx={{ml:3}}
                        primary={<Typography color={'text.primary'}>Nanang Setiawan</Typography>}
                        secondary={<Typography color={'text.secondary'} variant="subtitle2">nanangsetiawan</Typography>}
                    />
                </ListItemButton>
            </List>

            <Link href="#" underline="none">Alihkan</Link>
            
        </BoxProfil>

        <BoxProfil mt={1}>
            <Typography 
                variant="subtitle1" 
                color='gray' 
                fontWeight={500}
            >
                Saran Untuk Anda
            </Typography>
            <Typography color={'text.primary'} variant="body2">Lihat Semua</Typography>
        </BoxProfil>

        <BoxProfil>
            <List disablePadding >
                    <ListItemButton sx={{ml:-1.5}}>
                        <ListItemIcon>
                            <Avatar src={asuka} sx={{width:40, height:40}} />
                        </ListItemIcon>
                        <ListItemText 
                            primary={<Typography color={'text.primary'}>Asuka Saito</Typography>}
                            secondary="asukaSaito"
                        />
                    </ListItemButton>
            </List>
            <Link href="#" underline="none">Ikuti</Link>
        </BoxProfil>

        <BoxProfil>
            <List disablePadding>
                <ListItemButton sx={{ml:-1.5}}>
                    <ListItemIcon>
                        <Avatar src={yurina} sx={{width:40, height:40}} />
                    </ListItemIcon>
                    <ListItemText 
                        primary={<Typography color={'text.primary'}>Asuka Saito</Typography>}
                        secondary="YurinaHirate"
                    />
                </ListItemButton>
            </List>
            <Link href="#" underline="none">Ikuti</Link>
        </BoxProfil>
                    
        <BoxProfil>
            <List disablePadding>
                    <ListItemButton sx={{ml:-1.5}}>
                        <ListItemIcon>
                            <Avatar src={yurhir} sx={{width:40, height:40}} />
                        </ListItemIcon>
                        <ListItemText 
                            primary={<Typography color={'text.primary'}>Asuka Saito</Typography>}
                            secondary="Hirate"
                        />
                    </ListItemButton>
            </List>
            <Link href="#" underline="none">Ikuti</Link>
        </BoxProfil>

        <BoxProfil>
            <List disablePadding>
                    <ListItemButton sx={{ml:-1.5}}>
                        <ListItemIcon>
                            <Avatar src={yurhir} sx={{width:40, height:40}} />
                        </ListItemIcon>
                        <ListItemText 
                        primary={<Typography color={'text.primary'}>Asuka Saito</Typography>}
                            secondary="Hirate"
                        />
                    </ListItemButton>
            </List>
            <Link href="#" underline="none">Ikuti</Link>
        </BoxProfil>

        <BoxProfil sx={{flexWrap:'wrap', justifyContent:'center'}} mt={2} mb={2} width={370}>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Tentang</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Bantuan</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Pers</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>API</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Pekerjaan</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Privasi</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Ketentuan</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Lokasi</Typography></Link>
            <Link href="#" underline="none"> <Typography variant="body2" sx={{m:1}}  color={'text.secondary'}>Bahasa</Typography></Link>
        </BoxProfil>

        <Typography variant='button' color={'text.secondary'} fontWeight={300}>@ 2022 Instagram From Meta</Typography>
        </>
    )
}

export default MenuSideBar;