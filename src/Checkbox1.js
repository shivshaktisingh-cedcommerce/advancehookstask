import React, { useState } from 'react'
import {Checkbox} from '@shopify/polaris'

function Checkbox1(props) {
  const[checked , setChecked]=useState(false)
var x;
 const handleChange=()=>{
  x=!checked;
  setChecked(!checked)
  props.parentfun(x)

 }
  


  return (
    <Checkbox
      label="Barcode/GTIN Exemption"
      checked={checked}
      onChange={handleChange}
    />
  )
}

export default Checkbox1