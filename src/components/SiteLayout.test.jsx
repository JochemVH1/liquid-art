import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import SiteLayout from './SiteLayout';

describe('SiteLayout', () => {
  it('renders primary navigation and wrapped page content', () => {
    render(
      <MemoryRouter>
        <SiteLayout>
          <p>Featured artwork content</p>
        </SiteLayout>
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByText('Featured artwork content')).toBeInTheDocument();
  });
});
