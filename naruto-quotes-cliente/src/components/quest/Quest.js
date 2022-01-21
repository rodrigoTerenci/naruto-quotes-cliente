import styled from "styled-components"

export const Quest = (({resposta}) =>{
    let nomes= ['Naruto Uzumaki', 'Orochimaru', 'Haku', 'Iruka Umino']
    /*let apagaIndex= nomes.indexOf('Naruto Uzumaki')
       nomes.splice(apagaIndex)*/

    let apagaNome = nomes.filter((item) => item !== resposta)
    const random = (()=> parseInt(Math.random() * apagaNome.length))
    let r = random()
    let randomName = (r)=>apagaNome[r]

    const confereResposta = ((child)=>{
        return child === resposta ? true : false
     })
     
    return(
        <QuestTag>
            <p>Who sayed???</p>
            <Button onClick= {confereResposta(randomName)}>{randomName(r)}</Button>
            <Button onClick= {confereResposta(randomName)}>{randomName(r)}</Button>
            <Button onClick= {confereResposta(resposta)}>{resposta}</Button>
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


