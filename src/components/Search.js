import React from 'react'
import { connect } from 'react-redux'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {searchItems} from './actions/cartAction';

const useStyles = makeStyles(theme => ({
    search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)` ,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Search = (props) => {
    const classes = useStyles();
    let filtered, searchString;

    const handleSearch = (e) => {
        if(e.target.value) {
          filtered = []; let itemToFilter = [];
          itemToFilter = (props.originalItems && props.originalItems.length > 0) ? props.originalItems : props.items;
          searchString = e.target.value;
          const regexp = new RegExp(searchString, 'i');
          filtered = itemToFilter.filter(x => regexp.test(x.name));
        }

        // props.searchItems(searchString, filtered);
    }

    const populateItems = () => {
      let itemToFilter = (props.originalItems && props.originalItems.length > 0) ? props.originalItems : props.items;
      props.searchItems(searchString, filtered, itemToFilter);
    }

    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearch}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                // Do code here
                ev.preventDefault();
                populateItems()
              }
            }}
            />
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        items: state.items,
        originalItems: state.originalItems
    }
}

//Add the dispatchers to events which will connect to redux later  
const mapDispatchToProps= (dispatch)=>{
    return{
        searchItems: (searchString, payload, originalItems) => {dispatch(searchItems(searchString, payload, originalItems))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)