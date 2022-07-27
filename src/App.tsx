import * as React from 'react';
// style
import "./App.css"
// end style
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ProductPage from './components/pages/ProductPage';
import ReportPage from './components/pages/ReportPage';
import CreatePage from './components/pages/CreatePage';
import EditPage from './components/pages/EditPage';
import ProfilePage from './components/pages/ProfilePage';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
  easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// edit theme
const editTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          
        },
      },
    },
  },
  typography:{
    fontFamily:'Josefin Sans'
  },
  palette: {
    // primary: {
    //   main: '#8544E0'
    // },
    background: {
      default: "#FBFBFC",
    },
  },
});

export default function App() {
  const [open, setOpen] = React.useState(true);

  // Drawer open-close
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={editTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* ส่ง function ไปเป็น prop */}
        <Header open={open} setDrawerOpen={handleDrawerOpen}/>
        <Navbar open={open} setDrawerClose={handleDrawerClose}/>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/products' element={<ProductPage />}/>
          <Route path='/reports' element={<ReportPage />}/>
          <Route path='/products/create' element={<CreatePage />}/>
          <Route path='/product/edit/:id' element={<EditPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/' element={<Navigate to={"/login"}/>}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

// page not found
const PageNotFound=()=>(
  <div>
    <h1>404 Not found</h1>
    {/* // Link เหมือนกับ tag a */}
    <Link to="/">Go home</Link>
  </div>
);
