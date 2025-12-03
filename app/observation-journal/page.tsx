import { fetchArenaChannel } from '../lib/arena';
import OJGallery from './OJGallery';
import DetailHeader from '../components/DetailHeader';

export default async function ObservationJournal() {
    const channel = 'observation-journal-livy8yieymy';
    const arena = await fetchArenaChannel(channel);

    // console.log('ARENA DATA:', arena); // 👈 log the entire object

    return (
        <div className="container py-5 mt-3">
            <DetailHeader 
                title="observation journal" 
                subtitle="Photos from my iPhone. Usually of trees, colorful graffiti, the sky, or light." 
            />
            <OJGallery arena={arena} />
        </div>
    )
}
