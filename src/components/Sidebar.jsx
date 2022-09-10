import { Box, Skeleton } from "@mui/material";
import { useState } from "react";
import MenuSideBar from "./MenuSidebar";


const Sidebar = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000);
    return (
        <Box width={380} pt={1} pl={2} pr={2} sx={{display:{xs:'none', md:'block', lg:'block'}}}>
            
            {loading 
                ? (<Skeleton variant="rounded" height={400} width={400} />) 
                : 
                (
                    <MenuSideBar />
                )
            }
            
        </Box>

        )
}

export default Sidebar;