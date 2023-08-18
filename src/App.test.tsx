import React from 'react'
import { render,screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './state'
import App from './App'

const initComponents = ['snackbar','header']
const components = ['snackbar','header','sidebar','mission-form','mission-table']

test('renders init components', () => {
  render(<Provider store={store}><App /></Provider>)

  initComponents.forEach(x=>{
    const element = screen.getByTestId(x)
    expect(element).toBeInTheDocument()
  })
})