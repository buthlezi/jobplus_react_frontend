import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '33px'
  },

}));

export default function CheckboxCustom(props) {
  const classes = useStyles();
  const { value } = props;

  return (
    <FormControlLabel
      // 'value's given in Profile.js go into this CheckboxCustom.js 
      // and are rendered in lines 21 and 23 
      value={value}
      control={<Checkbox color='primary' />}
      label={value}
      labelPlacement='end'
      classes={{root: classes.root}}
    />
  )
}
