import { Button } from "../button"
import { getQuote } from '../../services/'
import { useState } from "react"
import styled from "styled-components"

export const Quest = (() =>{
    const [responseState, setResponse] = useState('loading speaker ...')
    setResponse(async()=> await getQuote().speaker)

    const nomes= ['Naruto', 'Orochimaru']
    const apagaNome = nomes.filter((item)=> item != responseState)
    return(
        <QuestTag>
            <p role='p'>Who sayed???</p>
            <Button>{nomes[0]}</Button>
            <Button>Test2</Button>
            <Button>Test3</Button>
            <Button>{responseState}</Button>
        </QuestTag>
    )
    
})
const QuestTag = styled.div`
    button{
        width:25%;
        flex-direction:row;
        margin:10px;
    }
`

