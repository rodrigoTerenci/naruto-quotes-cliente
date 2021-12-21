import {render, screen} from '@testing-library/react'
import { Button } from './Button'

test('renders button with text', () =>{
    render(<Button>TEST</Button>)

    const buttonEl = screen.getByText('TEST')

    expect(buttonEl).toBeInTheDocument()
})