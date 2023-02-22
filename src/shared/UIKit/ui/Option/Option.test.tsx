import Option from './Option';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Option Component', () => {
  it('renders', () => {
    render(
      <Option value="test" setValue={() => {}} isSelected={false}></Option>
    );
    expect(screen.getByTestId('option')).toBeInTheDocument();
  });

  it('renders child', () => {
    render(
      <Option value="test" setValue={() => {}} isSelected={false}>
        <div>test</div>
      </Option>
    );
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  it('accurate to snapshot', () => {
    const option = render(
      <Option value="test" setValue={() => {}} isSelected={false}></Option>
    );
    expect(screen.getByTestId('option')).toMatchSnapshot();
  });
});
