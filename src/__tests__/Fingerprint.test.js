import { render, screen, fireEvent } from '@testing-library/svelte'

import Fingerprint from '../Fingerprint'

test('needs to conform to d3.dsv', () => {
  let data = []
  expect(() => {
    render(Fingerprint, { data })
  }).toThrow();
})
test('renders', () => {
  let data = [{"a": "a"}]
  data.columns = ["a"]
  render(Fingerprint, { data: data })

  expect(screen.getByTestId('canvas')).toBeInTheDocument()
})
