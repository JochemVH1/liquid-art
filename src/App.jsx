import { artworks } from './data/artworks';

export default function App() {
  const firstArtwork = artworks[0];

  return (
    <main>
      <h1>Liquid Art Portfolio</h1>
      <p>{firstArtwork.title}</p>
    </main>
  );
}
