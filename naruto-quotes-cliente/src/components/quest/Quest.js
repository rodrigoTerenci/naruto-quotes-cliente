import { Button } from "../button"
import { getQuote } from '../../services/'
import { useState } from "react"

export const Quest = (() =>{
    return(
        <div>
            <Button >Teste</Button>
            <Button >Teste</Button>
            <Button >Teste</Button>
            <Button >Teste</Button>
        </div>
    )
    const [response, setResponse] = useState({
        
        speaker:'loading speaker ...'
      })
    setResponse(async()=> await getQuote().speaker)
})

