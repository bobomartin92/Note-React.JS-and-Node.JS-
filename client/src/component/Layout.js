import { AddCircleOutlineRounded, NotesRounded } from "@mui/icons-material";
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useHistory, useLocation } from "react-router";
import { format } from 'date-fns'

const drawerWidth = 240
const classes = {
    active: {
        background: '#f4f4f4'
    },
    page: {
        background: '#f9f9f9',
        width: '100%',
        padding: 2
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
        }
    },
    title: {
        padding: 2
    },
    appBar : {
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`
    }
}

const menuItem = [
    {
        text: 'My Notes',
        icon: <NotesRounded color='primary' />,
        path: '/'
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutlineRounded color='primary' />,
        path: '/create'
    }
]

const Layout = ({ children }) => {

    const history = useHistory()
    const location = useLocation()

    return ( 
        <Box sx={{display: 'flex'}}>

            {/* {app bar} */}
            <CssBaseline />
            <AppBar sx={classes.appBar} elevation={0} >
                <Toolbar>
                    <Typography variant='h6' component='div' noWrap >
                        {format(new Date(), 'do MMMM y')}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* { side drawer } */}
            <Drawer
                sx={classes.drawer}
                variant='permanent'
                anchor='left'
            >
                
                <Box>
                    <Typography variant='h5' sx={classes.title} >
                        NOTES
                    </Typography>
                </Box>
                <Box>
                    <List>
                        {menuItem.map(item => (
                            <ListItem button 
                                key={item.text} 
                                onClick={() => history.push(item.path)}
                                sx={location.pathname === item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                
                
            </Drawer>

            <Box sx={classes.page}>
            <Toolbar />
                {children}
            </Box>
            
        </Box>
     );
}
 
export default Layout;