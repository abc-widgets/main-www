import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import * as mathFuncs from '@iwsllc/secret-math-funcs'
import App from './App';

test('should behave properly when clicking button', async () => {
  const user = userEvent.setup()

  const MOCK_VALUE = 4

  // we're going to fake the package result
  jest.spyOn(mathFuncs, 'secretLongRunningFunction').mockImplementation(async () => MOCK_VALUE)
  
  render(<App />);

  const buttonElement = screen.getByTestId('actionButton');
  expect(buttonElement).toBeInTheDocument();

  // results and spinner should not be shown
  expect(screen.queryByText(/Result/i)).not.toBeInTheDocument();
  expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  
  // When user clicks
  await user.click(buttonElement)

  // spinner should appear
  expect(screen.getByTestId('spinner')).toBeInTheDocument()
  
  await waitFor(() => {
    // result should appear
    expect(screen.getByText(/Result/i)).toBeInTheDocument()
  })

  // check the value; make sure it matches our mock
  expect(screen.getByTestId('actual-result').textContent).toEqual(`${MOCK_VALUE}`)
  
  // spinner should go away
  expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();

  // When user clicks (again)
  await user.click(buttonElement)

  // just make sure the result goes away. The rest is covered in previous assertions
  expect(screen.queryByText(/Result/i)).not.toBeInTheDocument();
});
