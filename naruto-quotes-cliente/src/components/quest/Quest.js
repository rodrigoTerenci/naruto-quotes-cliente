//import { Button } from "../button"
import { getQuote } from '../../services/'
import { useState } from "react"
import styled from "styled-components"

export const Quest = (({resposta}) =>{
    const nomes= ['Naruto', 'Orochimaru']
    const apagaNome = nomes.filter((item)=> item != resposta)
    const random = (()=> parseInt(Math.random() * apagaNome.length))
    var r = random()
    
    return(
        <QuestTag>
            <p>Who sayed???</p>
            <Button>{apagaNome[r]}</Button>
            <Button>{apagaNome[r]}</Button>
            <Button>{resposta}</Button>
        </QuestTag>
    )
    
})
const QuestTag = styled.div`
        flex-direction:row;
        margin:10px;
    }
`
const Button = styled.button`
    background:transparent;
    color:#fff;
    border: none;
    font-size:0.95em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor:pointer;
    text-shadow: 2px 2px 2px black;
    width:25%;    
    &:hover{
        transform: scale(1.5);
        text-shadow: #333 3px 3px;
    }
`
/*const Question = styled.div`
    text-align:center;
    
`*/


