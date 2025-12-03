/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchArenaChannel } from '../lib/arena';
import FilmGallery from './FilmGallery';
import DetailHeader from '../components/DetailHeader';

export const dynamic = 'force-static';

export default async function ObservationJournal() {
  const channel = 'film-photos-wkrlc5m6i2a';
  
  const arena = await fetchArenaChannel(channel);

  return (
    <div className="container py-5 mt-3">
      <DetailHeader 
        title="film photo gallery" 
        subtitle="Making my way back and forth from a point and shoot and SLRs." 
      />
      <FilmGallery arena={arena} />
    </div>
  );
}