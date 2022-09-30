import { TextField } from '@shopify/polaris'
import React, { useReducer } from 'react'
import Checkbox1 from './Checkbox1'
import Radiobutton1 from './Radiobutton1'
import Buttonpol from './Buttonpol'
import {Button, Modal, TextContainer} from '@shopify/polaris';
import {useState, useCallback} from 'react'
;


export default function Component1() {
    const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

 
    const initialstate= {
        title:'' ,
        description:'',
        handling:'',
        parentsku:'',
        cbvalue:'',
        amazoncat:'',
        rvalue:''
    }
    const reducer=(state , action)=>{
         console.log(action.payload)
        switch(action.type){
          case 'title':
            return {...state ,[action.field]:[action.payload]} 
            case 'parentsku':
                return {...state ,[action.field]:[action.payload]} 
            case 'description':
              return {...state ,[action.field]:[action.payload]} 
            case 'handling':
            return {...state ,[action.field]:[action.payload]} 
            case 'amazoncat':
                return {...state ,[action.field]:[action.payload]} 
            case 'checkboxval':
                
                return {...state , [action.field]:[action.payload===true?'Yes':'No']}
            case 'radioboxval':
                return {...state , [action.field]:[action.payload]}
          default:
            return state
        }
      }
      const handleTextChange=(e , x)=>{
        dispatch({
            type:x, 
            field:x,
            payload:e
        })
      }

      const parentfun=(i)=>{
        console.log(i)
       dispatch({
        type:'checkboxval', 
        field:'cbvalue',
        payload:i
       })
      }
      const parentfunradio=(i , j)=>{
        console.log(i , j)
        dispatch({
         type:'radioboxval', 
         field:'rvalue',
         payload:j
        })
       }
       const[count , dispatch]=useReducer( reducer ,initialstate)
 const arr=[
    {
        title:"Title" ,
        field:<TextField  onChange={(e)=>handleTextChange(e , 'title')} value={count.title}/>
    } ,
    {
        title:"Description" ,
        field:<TextField  onChange={(e)=>handleTextChange(e , 'description')} value={count.description}/>
    } ,
    {
        title:"Handling time" ,
        field:<TextField  onChange={(e)=>handleTextChange(e , 'handling')} value={count.handling}/>
    } ,
    {
        title:"Amazon Parent Sku" ,
        field:<TextField name="title" onChange={(e)=>handleTextChange(e , 'parentsku')} value={count.parentsku}/>
    } ,
    {
        title:"Barcode Gtn Exemption" ,
        field:<Checkbox1 parentfun={parentfun}/>
    } ,
    {
        title:"Add amazon Category" ,
        field:<TextField name="title" onChange={(e)=>handleTextChange(e , 'amazoncat')} value={count.amazoncat}/>
    } ,
    {
        title:"Image Selection" ,
        field:<Radiobutton1 parentfunradio={parentfunradio}/>
    } ,
 ]

 const buttonfun=(t)=>{
  setActive(t)
 }
  const check = arr.map((d , index)=>{
    return (
        <div id="check_div_main" key={index}>
            <div id="check_div_main1">{d.title}</div>
            <div id="check_div_main2">{d.field}</div>
        </div>
    )
  })
  return (
    <div id="main_div_id_component_page">
        {check}
        <Buttonpol buttonfun={buttonfun}/>
        <div style={{height: '500px'}}>
      <Modal
    
        open={active}
        onClose={handleChange}
     
      >
        <Modal.Section >
          <TextContainer >
            <p><span>Title : </span><span className="span_id">{count.title}</span></p>
            <p><span>Description : </span><span className="span_id">{count.description}</span></p>
            <p><span>Handling Time: </span><span className="span_id">{count.handling}</span></p>
            <p><span>Amazon Parent Sku : </span><span className="span_id">{count.parentsku}</span></p>
            <p><span>Barcode Gtn Exemption : </span><span className="span_id">{count.cbvalue}</span></p>
            <p><span>Add Amazon Category : </span><span className="span_id">{count.amazoncat}</span></p>
            <p><span>Image Selection : </span><span className="span_id">{count.rvalue}</span></p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
        
    </div>
  )
}
