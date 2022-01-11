import logo from '../../images/logo.svg'
import narutoImg from '../../images/narutoKunai.png'
import styled from 'styled-components'
import './App.css'
import {Quotes} from '../../components'
import { getQuote } from '../../services'
import { useState, useEffect } from 'react'
import  jutsoSound  from '../../sound/jutsoSound.mp3'

const audio = new Audio(jutsoSound)
function App() {
  useEffect(()=>{
    onUpdate()
  },[])
  const [quoteState, setQuoteState]= useState({
    quote:'ok', speaker:'Speaker'
  })
  
  const onUpdate = async () =>{
    audio.play()
    const quote = await getQuote()
    setQuoteState(quote)
    
  }
  return (
    <Content>
      <Quotes 
      /*quote={quoteState.quote} speaker={quoteState.speaker} */
      {...quoteState}/*operador spread*/
      onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt='Naruto with a Kunai'/>
    </Content>
  );
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
  width: 50vw;
  align-self: flex-end;
`;
export default App;
