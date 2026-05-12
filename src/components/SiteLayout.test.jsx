import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
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

  it('provides a skip link to jump to the main content region', () => {
    render(
      <MemoryRouter>
        <SiteLayout>
          <p>Featured artwork content</p>
        </SiteLayout>
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main-content'
    );
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
  });

  it('respects reduced-motion when scrolling to hash targets', () => {
    const originalMatchMedia = window.matchMedia;
    const originalScrollIntoView = HTMLElement.prototype.scrollIntoView;
    const scrollIntoView = vi.fn();

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn()
    }));
    HTMLElement.prototype.scrollIntoView = scrollIntoView;

    render(
      <MemoryRouter initialEntries={['/#about']}>
        <SiteLayout>
          <p>Featured artwork content</p>
        </SiteLayout>
      </MemoryRouter>
    );

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto', block: 'start' });

    window.matchMedia = originalMatchMedia;
    HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  });
});
