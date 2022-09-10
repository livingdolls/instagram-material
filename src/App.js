import { Box, createTheme, Stack, styled, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import ModalPostAction from './components/ModalPostAction';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import StorySlide from './components/StorySlide';

const LayoutTheme = styled(Stack)((({theme}) => ({
  marginLeft:'auto',
  marginRight:'auto',
  maxWidth:1000
})))



function App() {
  const [modalAction, setModalAction] = useState(false);
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'}>
      <Navbar setMode={setMode} mode={mode} />
        <LayoutTheme 
          direction='row' 
          p={2} 
          spacing={2} 
          justifyContent='center'
          >
          <StorySlide setModalAction={setModalAction}/>
          <Sidebar />
        </LayoutTheme>
        <ModalPostAction modalAction={modalAction} setModalAction={setModalAction} />
      </Box>
        
    </ThemeProvider>
    </>
  );
}

export default App;
