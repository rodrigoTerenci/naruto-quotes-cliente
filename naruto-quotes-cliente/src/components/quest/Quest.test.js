import { render, screen, fireEvent} from '@testing-library/react'
import { Quest } from './Quest'


test('when render quest component need have a question, a 3 buttons and response-not visible-',()=>{
    render(<Quest />)
    const textEl = screen.getByText(/Who sayed/i)
    const buttonEl = screen.getAllByRole('button')

    expect(textEl).toBeInTheDocument()
    expect(buttonEl).toHaveLength(3)
}) 