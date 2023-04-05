import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemDetails from './index';
import useData from '../../hooks/useData';

jest.mock('../../hooks/useData');

describe('ItemDetails Component', () => {
  it('renders without crashing', () => {
    useData.mockReturnValue({
      gameDetails: {
        id: 1,
        title: 'Test Game',
        thumbnail: '/thumbnail.jpg',
        graphics: 'Test Graphics',
        memory: 'Test Memory',
        os: 'Test OS',
        processor: 'Test Processor',
        storage: 'Test Storage',
        genre: 'Test Genre',
        developer: 'Test Developer',
        publisher: 'Test Publisher',
        releaseDate: '2023-04-05',
        description: 'Test Description',
        screenshots: [
          {
            id: 1,
            image: '/screenshot1.jpg',
          },
          {
            id: 2,
            image: '/screenshot2.jpg',
          },
        ],
      },
    });

    const { container } = render(
      <Router>
        <ItemDetails />
      </Router>
    );

    expect(container).toBeInTheDocument();
  });
});
