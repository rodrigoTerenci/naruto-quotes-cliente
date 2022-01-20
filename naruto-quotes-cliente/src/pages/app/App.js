import logo from '../../images/naruto.png'
import narutoImg from '../../images/narutoKunai.png'
import styled from 'styled-components'
import './App.css'
import {Quotes} from '../../components'
import { getQuote } from '../../services'
import { useState, useEffect, useRef } from 'react' /*HOOKS*/
import  jutsoSound  from '../../sound/jutsoSound.mp3'
import { Quest } from '../../components/quest'

const audio = new Audio(jutsoSound)
function App() {
  
  const isMounted=useRef(true)/*mantém estado da váriavel mesmo após render*/
  
  useEffect(()=>{
    onUpdate()
    return ()=>{
      isMounted.current=false
    }
  },[])
  const [quoteState, setQuoteState]= useState({
    quote:'loading quote ...',
    speaker:'loading speaker ...'
  })
  
  const onUpdate = async () =>{
   
    const quote = await getQuote()
    if(isMounted.current){
      audio.play()
      setQuoteState(quote)
    }
    
  }
  return (
    <Content>
      <NarutoLogo src={logo}/>
      <Quotes 
      /*quote={quoteState.quote} speaker={quoteState.speaker} */
      {...quoteState}/*operador spread*/
      onUpdate={onUpdate}/>
      <Quest></Quest>
      <NarutoImg src={narutoImg} alt='Naruto with a Kunai'/>
    </Content>
  )
}
const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const NarutoImg = styled.img`
  padding-top:95px;
  width: 50vw;
  align-self: flex-end;
`;
const NarutoLogo= styled.img`
  width: 100vw;
  height: 80px;
  align-self: flex-start;
  margin:50px;
  transform: rotate(-15deg);
`

export default App;
