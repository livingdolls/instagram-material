import { Tabs, Tab, Avatar, Paper, Stack, Typography, Skeleton } from "@mui/material";
import { CircularProgress } from "@mui/material/";
import {useState} from 'react'
import asuka from '../img/static/asuka.png';
import yurhir from '../img/static/YurHir.png';
import yurina from '../img/static/YurinaHirate.png';
import Posts from "./Posts";

const postData = [
    {id:'1',name:'Yurina',post:'Aslong ago im love you',comment:'3.00',like:'9.000',love:true,date:'2',img:'asuka'},
    {id:'2',name:'Asuka',post:'Aslong ago im love you',comment:'1.200',like:'12.300',love:false,date:'3',img:'yurhir'},
    {id:'3',name:'Yurina',post:'Aslong ago im love you',comment:'1.000',like:'5.760',love:true,date:'6',img:'yurina'}
]
const StorySlide = ({setModalAction}) => {
    const [loading, setLoading] = useState(true)
    
    const handleActionModal = () =>{
        setModalAction(true)
    }

    setTimeout(() => {
        setLoading(false)
    }, 3000);
    
    return(
        <Stack sx={{maxWidth:500}} spacing={3} p={1}>
            {loading 
                ? ( 
                <>
                    <CircularProgress sx={{ml:'auto', mr:'auto'}} />
                    <Skeleton variant="rounded" width={500} height={500} />
                    <Skeleton variant="rounded" width={500} height={500} />
                    <Skeleton variant="rounded" width={500} height={500} />
                </>
                )
                : 
                (<>
                <Paper elevation={3} >
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        value={1}
                    >
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>yurina</Typography>} icon={<Avatar src={yurina} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>asuka</Typography>} icon={<Avatar src={asuka} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>hirate</Typography>} icon={<Avatar src={yurhir} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>saito</Typography>} icon={<Avatar src={asuka} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>setiawan</Typography>} icon={<Avatar src={yurhir} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>nanang</Typography>} icon={<Avatar src={yurina} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>yurina</Typography>} icon={<Avatar src={yurina} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>yurhir</Typography>} icon={<Avatar src={yurina} sx={{width:60,height:60}} />} />
                        <Tab label={<Typography variant='subtitle2' fontSize={12} fontWeight={400}>yurina</Typography>} icon={<Avatar src={yurina} sx={{width:60,height:60}} />} />
                    </Tabs>
                </Paper>

                <Posts postData={postData} handleActionModal={handleActionModal} />
                </>)
        }
        </Stack>
    )
}

export default StorySlide;