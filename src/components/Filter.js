
import React from 'react'
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles ((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
    padding: '1rem',
    minWidth: '220px',
    marginBottom: '1rem'
  },
  title: {
    ...theme.fonts.extraBold,
    fontSize: '1rem',
    marginBottom: '0.91rem'
  },
  links: {
    listStyle: 'none',
    padding: 0,
    color: theme.palette.common.beta,
    // sets span color
    '& span': {
      color: theme.palette.common.alpha,
    },
    '& li': {
      // sets list bottom spacing
      marginBottom: '0.4rem',
      '& a': {
        // styles the 'a' tag of the links
        textDecoration: 'none',
        // no underline on text
        color: 'inherit'
      }
    }
  }
}));  

export default function Filter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>Browse by sector</Typography>

      <ul className={classes.links}>
        <li><Link to='/'>Technology<span>(14)</span></Link></li>
        <li><Link to='/'>Engineering<span>(200)</span></Link></li>
        <li><Link to='/'>Healthcare<span>(38)</span></Link></li>
      </ul>
    </div>
  )
}