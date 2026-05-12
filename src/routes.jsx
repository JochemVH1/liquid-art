import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import GalleryPage from './pages/GalleryPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<GalleryPage />} />
        <Route path="gallery" element={<Navigate to="/" replace />} />
        <Route path="artworks/:artworkId" element={<ArtworkDetailPage />} />
        <Route path="about" element={<Navigate to="/#about" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
      </Route>
    </Routes>
  );
}
