import React, { useCallback } from 'react'
import {Stack, RadioButton} from '@shopify/polaris';

function Radiobutton1(props) {
 

  const handleChange = useCallback(
    (_checked, newValue) => {
     
      props.parentfunradio(_checked , newValue)
    } , []);
  return (
    <Stack vertical>
    <RadioButton
      label="Set Product Image as shown on shopify"
      value = 'Set Product Image as shown on shopify'
      id="Set Product Image as shown on shopify"
      name="accounts"
      onChange={handleChange}
    />
    <RadioButton
      label="Set custom Amazon images"
      id="Set custom Amazon images"
      value='Set custom Amazon images'
      name="accounts"
       onChange={handleChange}
    />
  </Stack>
  )
}

export default Radiobutton1