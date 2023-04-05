import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterItem from './index';

const mockData = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

describe('FilterItem', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <FilterItem label="Test Label" data={mockData} onChange={() => {}} />
    );

    expect(container).toBeInTheDocument();
  });

  it('displays the correct label', () => {
    render(
      <FilterItem label="Test Label" data={mockData} onChange={() => {}} />
    );

    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument();
  });
});
