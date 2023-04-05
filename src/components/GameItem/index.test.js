import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import GameItem from './index';

const mockItem = {
  id: 1,
  title: 'Test Game',
  shortDescription: 'Test Game Short Description',
  thumbnail: '/thumbnail.jpg',
};

describe('GameItem', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Router>
        <GameItem item={mockItem} />
      </Router>
    );

    expect(container).toBeInTheDocument();
  });

  it('displays the correct title and short description', () => {
    render(
      <Router>
        <GameItem item={mockItem} />
      </Router>
    );

    const title = screen.getByText(mockItem.title)
    const description = screen.getByText(mockItem.shortDescription)
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
