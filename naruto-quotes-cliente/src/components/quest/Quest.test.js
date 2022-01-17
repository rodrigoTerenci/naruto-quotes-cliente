import { render, screen, fireEvent} from '@testing-library/react'
import { Quest } from './Quest'


test('when render need have a 3 buttons and response',()=>{
    render(<Quest />)
    const buttonEl = screen.getAllByRole('button')

    expect(buttonEl).toHaveLength(4)
}) 