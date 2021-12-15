import logo from '../../images/logo.svg'
import narutoImg from '../../images/narutoKunai.png'
import styled from 'styled-components'
import './App.css'
import {Quotes} from '../../components'

function App() {
  return (
    <Content>
      <Quotes quote={'OK'} speaker={'Speaker'}/>
      <NarutoImg src={narutoImg} alt='Naruto with a Kunai'/>
    </Content>
  );
}
const Content = styled.div`
  height: 100vh;
  width:50vw;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const NarutoImg = styled.img`
  max-width: 250vw;
  align-self: flex-end;
`;
export default App;
