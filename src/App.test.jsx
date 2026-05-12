import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AppRoutes from './routes';

describe('App routes', () => {
  it('shows the featured artwork on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Aurora Flow' })).toBeInTheDocument();
  });

  it('renders the gallery on the gallery route', () => {
    render(
      <MemoryRouter initialEntries={['/gallery']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /selected works/i })).toBeInTheDocument();
  });
});
