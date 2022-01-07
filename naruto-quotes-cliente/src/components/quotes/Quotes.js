import styled from "styled-components"
import { string } from 'prop-types'/*tipar propriedades*/ 
import { Button } from '../button'

export const Quotes = ({quote, speaker}) => {
    return(
       <Wrapper>
        <Quote>{quote}</Quote>
        <Speaker>{speaker}</Speaker>
        <Button>Quote No Jutsu</Button>
       </Wrapper> 
    )
}
/*tipar propriedades*
* o tipo string é esperado*/ 
Quotes.propTypes = {
    quote:string,
    speaker: string
}
const Wrapper = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-item: center;
`

const Quote= styled.p`
    font-size: 0.85em;
    margin: 0;
`

const Speaker = styled(Quote)`
    text-align:right;
    margin-bottom: 50px;
`