import { render, screen, fireEvent } from '@testing-library/react';
import { Quotes } from '../../components';
import App from './App';
import { rest } from 'msw'
import{ setupServer } from 'msw/node'
import {getQuote} from '../../services'



test('renders the app with a button and a img', () => {
  render(<App />);
  const textEl = screen.getByText('loading speaker')
  const imgEl = screen.getByRole('img')
  const buttonEl = screen.getByRole('button')

  expect(textEl).toBeInTheDocument()
  expect(imgEl).toBeInTheDocument()
  expect(buttonEl).toBeInTheDocument()

});
/*MOKANDO SERVER*/

const response = {speaker:'Speaker', quote:'test quote'}
const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx)=>{
      return res(ctx.json(response))
  })
)

beforeAll(()=> server.listen())
afterEach(()=> server.resetHandlers())
afterAll(()=> server.close())

test('transform json response into object', async () =>{
  const quote = await getQuote()
  expect(quote).toStrictEqual(response)
})

test('call api on button click and update its text', async ()=>{
 render(<App />)

 const buttonEl = screen.getByRole('button')

 fireEvent.click(buttonEl)

 const quoteEl = await screen.findByText(response.quote)

 expect(quoteEl).toBeInTheDocument()
})

test('calls an api on startup and renders it response', async ()=>{
  render(<App />)
  const quoteEl = await screen.findByText(response.quote)
  expect(quoteEl).toBeInTheDocument()
})