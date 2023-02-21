import Option from './Option';

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Option Component', () => {
  it('renders', () => {
    render(
      <Option value="test" setValue={() => {}} isSelected={false}></Option>
    );
    expect(screen.getByTestId('option')).toBeInTheDocument();
  });
});
