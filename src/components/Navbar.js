import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Star from '@material-ui/icons/Star';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom'
import Search from './Search';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  }));

// Its a pure function no react component needed
 const Navbar = (props)=>{
    const classes = useStyles();
    let location = useLocation();
    let notify_cart = props.addedItems.length ? props.addedItems.length : "0";

    return(
        <div className={classes.grow}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className="toolbar">
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                        <Link to="/Adobe_Cart" ><Star /></Link>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/Adobe_Cart" >Adobe Cart</Link>
                    </Typography>
                    <Search/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton>
              <Badge badgeContent={notify_cart} color="secondary">
              <Link to="/cart" ><ShoppingCart /></Link>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          {location.pathname !== '/cart' ? 
          <div className="slider-box">
              <Typography id="non-linear-slider" gutterBottom>
                  Price Range
              </Typography>
              <Sidebar/> 
          </div>
          : null}
      </Drawer>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
    }
}

export default connect(mapStateToProps)(Navbar)
