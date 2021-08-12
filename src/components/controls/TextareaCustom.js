import React from 'react'
import { TextareaAutosize } from '@material-ui/core';

export default function TextareaCustom(props) {
  const { placeholder, rows } = props;
  //  either placeholder or rows or both can be sent over 

  return (
    <TextareaAutosize
    rows={rows || 7}
    placeholder={placeholder}
    />
  )
}
