import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
// import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
  },
}))


export default function SelectCustom(props) {
  const { items } = props;
  const classes = useStyles();

  const [value, setValue] = React.useState('');
  // setValue is a function, value is the parameter
  const [open, setOpen] = React.useState(false);
  // or use import useState from 'react' in line 6 
  // and then the lines above will say:
  // const [value, setValue] = useState('');
  // const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true)
  };

  return (
    <FormControl varian='outlined' className={classes.root}>
       <Select
        labelId="sector-label"
        id="sector-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onChange={handleChange}
      >
        {
          // looping thru 'items'
          items.map(item => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))
        }
      </Select>
    </FormControl >
  )
}
