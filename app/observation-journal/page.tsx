/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchArenaChannel } from '../lib/arena';
import OJGallery from './OJGallery';
import DetailHeader from '../components/DetailHeader';

export const dynamic = 'force-static';

export default async function ObservationJournal() {
  const channel = 'observation-journal-m2yoxj0iahg';
  
  console.log('🔍 Fetching arena data at build time...');
  const arena = await fetchArenaChannel(channel);
  console.log('✅ Arena data received:', {
    hasData: !!arena,
    contentsLength: arena?.contents?.length,
    firstImage: arena?.contents?.[0]?.image
  });

  return (
    <div className="container py-5 mt-3">
      <DetailHeader 
        title="observation journal" 
        subtitle="Photos from my iPhone. Usually of trees, colorful graffiti, the sky, or light." 
      />
      {/* Add this debug info temporarily */}
      {/* <div style={{ padding: '1rem', background: '#f0f0f0', margin: '1rem 0' }}>
        <p>Debug: Arena contents count: {arena?.contents?.length || 0}</p>
        <p>Images with thumbs: {arena?.contents?.filter((b: any) => b.image?.thumb?.url).length || 0}</p>
      </div> */}
      <OJGallery arena={arena} />
    </div>
  );
}