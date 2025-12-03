import { fetchArenaChannel } from '../lib/arena';
import OJGallery from './OJGallery';
import DetailHeader from '../components/DetailHeader';

export const dynamic = 'force-static';

export default async function ObservationJournal() {
  const channel = 'observation-journal-livy8yieymy';
  
  try {
    const arena = await fetchArenaChannel(channel);
    
    if (!arena || !arena.contents) {
      return <div>No gallery data available</div>;
    }

    return (
      <div className="container py-5 mt-3">
        <DetailHeader 
          title="observation journal" 
          subtitle="Photos from my iPhone. Usually of trees, colorful graffiti, the sky, or light." 
        />
        <OJGallery arena={arena} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching arena data:', error);
    return <div>Error loading gallery</div>;
  }
}