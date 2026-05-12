import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';

function InfoPage({ title, description }) {
  return (
    <section className="info-page">
      <p className="eyebrow">{title}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="artworks/:artworkId" element={<ArtworkDetailPage />} />
        <Route
          path="about"
          element={
            <InfoPage
              title="About"
              description="A quiet collection of liquid-inspired studies in color, light, and motion."
            />
          }
        />
        <Route
          path="contact"
          element={
            <InfoPage
              title="Contact"
              description="For commissions, exhibitions, and studio visits, please get in touch."
            />
          }
        />
      </Route>
    </Routes>
  );
}
