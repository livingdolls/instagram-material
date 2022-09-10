import { BookmarkBorderOutlined, Favorite, FavoriteBorderOutlined, ModeCommentOutlined, MoodBadOutlined, MoreHoriz, SendOutlined } from "@mui/icons-material";
import { Box, Avatar, Paper, List, ListItemAvatar, ListItemText, ListItemButton, Typography, Link, Input, InputAdornment, styled, Button } from "@mui/material";
import yurhir from '../img/static/YurHir.png';
import yurina from '../img/static/YurinaHirate.png';

const BoxFlex = styled(Box)((({theme}) => ({
    display:'flex',
    alignContent:'center',
    justifyContent:'space-between'
})))

const CommentBox = styled('div')((({theme}) => ({
    padding:'9px',
})))

const Posts = ({postData, handleActionModal}) => {
    return(
        postData.map((post) => {
            return (
                <Paper elevation={3} sx={{borderRadius:3}} key={post.id}>
                <Box 
                    pl={2}
                    pr={2}
                    ml={-2}
                    sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <List disablePadding>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar src={yurhir} sx={{width:40, height:40}} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={post.name}
                            />

                        </ListItemButton>
                    </List>
                    <MoreHoriz onClick={() => handleActionModal()} />
                </Box>
                <Box>
                    <img src={yurina} alt={post.img} width='500px'/>
                </Box>

                <BoxFlex p={2}>
                    <BoxFlex width={120}>
                        {post.love
                            ? <Favorite sx={{fontSize:30, color:'red'}} />
                            : <FavoriteBorderOutlined sx={{fontSize:30}} />
                        }
                        <ModeCommentOutlined sx={{fontSize:30}} />
                        <SendOutlined sx={{fontSize:30}} />
                    </BoxFlex>
                    <Box>
                        <BookmarkBorderOutlined sx={{fontSize:30}} />
                    </Box>
                </BoxFlex>

                <Box pl={2} pr={2} pb={2} sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant="subtitle1" fontWeight={700}>{post.like} Suka</Typography>
                    <Box mb={1}>
                        <Typography
                            sx={{display:'inline'}}
                            variant='subtitle1'
                            color='text.primary'
                            fontWeight={700}
                        >
                            Asuka Saito
                        </Typography>
                        {' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here'}
                        <Link underline="none" color="gray">...Lihat Selengkapnya</Link>
                    </Box>

                    <Link href="#" underline="none" color='gray'>Lihat semua {post.comment} komentar</Link>

                    <Typography variant="overline" color='gray' fontWeight={500} sx={{fontSize:12}}>{post.date} Jam yang lalu</Typography>
                </Box>

                <Box p={0.7} sx={{borderTop:1, borderTopColor:'rgba(33,33,33, 0.1)'}}>
                    <CommentBox>
                        <Input
                            disableUnderline
                            placeholder='Tambahkan Komentar' 
                            startAdornment ={
                                <InputAdornment position='start'>
                                    <MoodBadOutlined sx={{fontSize:'35px'}} />
                                </InputAdornment>
                            }
                            endAdornment ={
                                <Button variant="text">Kirim</Button>
                            }
                            fullWidth
                        />
                    </CommentBox>
                </Box>
            </Paper>
            )
        })
    )
}

export default Posts;