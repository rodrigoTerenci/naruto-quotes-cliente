import styled from "styled-components"
import { string, func } from 'prop-types'/*tipar propriedades*/ 
import { Button } from '../button'

export const Quotes = ({quote, speaker, onUpdate}) => {
    return(
       <Wrapper>
        <Quote>
            {quote}
        </Quote>
        <Speaker>- {speaker}</Speaker>
        <Quest>
            <p>Who sayed???</p>
            <Button>Test1</Button>
            <Button>Test2</Button>
            <Button>Test3</Button>
        </Quest>
        <Button onClick={onUpdate}>Quote No Jutsu</Button>
       </Wrapper> 
    )
}
/*tipar propriedades*
* o tipo string é esperado*/ 
Quotes.propTypes = {
    quote:string,
    speaker: string,
    onUpdate: func
}
const Wrapper = styled.div`
    flex:1;
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    align-item: center;
`
const Quest= styled.div`
    button{
        width:25%;
        flex-direction:row;
        margin:10px;
    }
`

const Quote= styled.p`
    flex:1;
    text-shadow: 2px 2px 2px black;
`

const Speaker = styled(Quote)`
    text-align:right;
    width:100%;
    display:none;
`