import { Modal, styled, Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

const ModalAction = styled(Modal)((({theme}) => ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})))

const BoxModal = styled(Box)((({theme}) => ({
    maxWidth:'450px',
    borderRadius:'10px',
    minWidth:'300px',
})))

const ModalPostAction = ({modalAction,setModalAction}) => {
    return (
        <ModalAction
            open={modalAction}
            onClose={() => setModalAction(false)}
        >
            <BoxModal bgcolor={'background.default'}>
                <List disablePadding>
                    <ListItem disablePadding>
                        <ListItemButton sx={{borderBottom:1,borderBlockColor:'rgba(88,88,88, 0.1)'}}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1' 
                                        color={'error.main'}
                                        fontWeight={550}
                                    >
                                        Laporkan
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{borderBottom:1,borderBlockColor:'rgba(88,88,88, 0.1)'}}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1'
                                        fontWeight={550} 
                                        color={'error.main'}
                                    >
                                        Berhenti Mengikuti
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{borderBottom:1,borderBlockColor:'rgba(88,88,88, 0.1)'}}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1'
                                    >
                                        Tambahkan ke favorit
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{borderBottom:1,borderBlockColor:'rgba(88,88,88, 0.1)'}}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1'
                                    >
                                        Buka Kiriman
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{borderBottom:1,borderBlockColor:'rgba(88,88,88, 0.1)'}}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1'
                                    >
                                        Bagikan Ke...
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{borderBottom:1,borderBlockColor:'rgba(88,88,88, 0.1)'}}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1'
                                    >
                                        Salin Tautan
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{borderBottom:1,borderBlockColor:'rgba(88,88,88, 0.1)'}}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1'
                                    >
                                        Sematkan
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setModalAction(false)}>
                            <ListItemText 
                                sx={{textAlign:'center'}}
                                primary={
                                    <Typography 
                                        variant='subtitle1'
                                    >
                                        Batal
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </BoxModal>
        </ModalAction>
    )
}

export default ModalPostAction;