import React from 'react'
import {Button} from '@shopify/polaris';

function Buttonpol(props) {
    const handler=()=>{
        props.buttonfun(true)
    }
  return (
    <Button primary onClick={handler}>Submit</Button>
  )
}

export default Buttonpol