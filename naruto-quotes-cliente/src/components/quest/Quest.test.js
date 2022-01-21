import { render, screen, fireEvent} from '@testing-library/react'
import { Quest } from './Quest'


test('when render quest component need have a question, a 3 buttons and response-not visible-',()=>{
    render(<Quest />)
    const textEl = screen.getByText(/Who sayed/i)
    const buttonEl = screen.getAllByRole('button')

    expect(textEl).toBeInTheDocument()
    expect(buttonEl).toHaveLength(3)
}) 

test('when render componet it eraser speaker name of the nome list',()=>{

})

test('when click each botton on quest componet run a function that checks if its children is equal to the answer ',()=>{
    render(<Quest resposta={}/>)
    const buttonsEl = screen.getAllByRole('button')
    const flag = 'Naruto Uzumaki'
    buttonsEl.forEach((item)=> fireEvent.click(item).expect(function (flag){
        if(flag!==)
    }))
})