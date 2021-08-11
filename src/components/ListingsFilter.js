import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Hidden } from '@material-ui/core';
import Filter from './Filter';
import Listings from './Listings';
// same level import


const useStyles = makeStyles ((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    // min-content for 'Filter' and 1fr for 'Listings'
    gridGap: '1.2rem',
    ...theme.container,
    // ... ignores curly brackets in theme.container and spreads the contents
    marginTop: '1.5rem'
  },
  lblock: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
  },
  rblock: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
  }

}));

export default function ListingFilter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        {/* hide filters from small devices going downwards */}
        <Hidden smDown>  
        <Filter />
        <Filter />
        </Hidden>
      </div>
      <div className={classes.rblock}>
        <Listings />
        <Listings />
      </div>
    </div>
  )
}

