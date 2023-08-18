import React from 'react'
import { render,screen, waitFor, within } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './state'
import App from './App'

const initComponents = ['snackbar','header']
const components = ['snackbar','header','sidebar','mission-add','mission-table']

test('Renders init components', () => {
  render(<Provider store={store}><App /></Provider>)

  initComponents.forEach(x=>{
    expect(screen.getByTestId(x)).toBeInTheDocument()
  })
})

test('Snackbar init message', () => {
  render(<Provider store={store}><App /></Provider>)
  const {getByText} = within(screen.getByTestId('snackbar'))
  expect(getByText('Have fun on Mars!')).toBeInTheDocument()
})

test('All components loaded', async() => {
  render(<Provider store={store}><App /></Provider>)
  await waitFor(() => {
    components.forEach(x=>{
      expect(screen.getByTestId(x)).toBeInTheDocument()
    })
    })
})

test('Show missions count on sidebar', async() => {
  render(<Provider store={store}><App /></Provider>)
  await waitFor(() => {
    const element = screen.getByTestId('sidebar')
    expect(element).toHaveTextContent('Missions Count:')
  })
})

test('Show missions on table', async() => {
  render(<Provider store={store}><App /></Provider>)
  await waitFor(() => {
    const element = screen.getByTestId('mission-table')
    expect(element).toHaveTextContent('Edit')
  })
})

test('Show add button on mission form', async() => {
  render(<Provider store={store}><App /></Provider>)
  await waitFor(() => {
    const element = screen.getByTestId('mission-add')
    expect(element).toHaveTextContent('Add')
  })
})