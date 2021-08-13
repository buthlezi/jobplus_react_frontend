import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Hidden } from '@material-ui/core';
import Filter from './Filter';
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

export default function ListingsFilter(props) {
  // this gives the filter and the listings
  const classes = useStyles();
  const { components } = props;

  const sectors = [
    { link: '/', name: 'Technology', count: 45 },
    { link: '/', name: 'Engineering', count: 200 },
    { link: '/', name: 'Healthcare', count: 50 },
  ]

  const locations = [
    { link: '/', name: 'Jobs in London', count: 230 },
    { link: '/', name: 'Jobs in West Midlands', count: 40 },
    { link: '/', name: 'Jobs in Yorkshire', count: 25 },
  ]

  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        {/* hide filters from small devices going downwards */}
        <Hidden smDown>  
          <Filter title='Browse by sector' items={sectors} />
          <Filter title='Browse by location' items={locations} />
        </Hidden>
      </div>
      <div className={classes.rblock}>
        {/* loop thru listings passed into this (ListingsFilter) component
        from relevant pages and print them out*/}
        {components.map((comp) => (
          comp
        ))}
      </div>
    </div>
  )
}

