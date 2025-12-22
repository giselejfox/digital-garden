import { fetchArenaChannel } from '../lib/arena';
import DetailHeader from '../components/DetailHeader';

interface ArenaBlock {
    id: number;
    generated_title: string | null;
    description: string | null;
    source: { url: string };
}

interface ArenaData {
    contents: ArenaBlock[];
}

export default async function FavoriteWebsites() {
    const channel = 'favorite-websites-rxkvgeiizge';
    const arena: ArenaData = await fetchArenaChannel(channel);

    const listElements = arena.contents.map((block) => {
        return (
            <li key={block.id}>
                <a
                    href={block.source.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {block.generated_title}
                </a>
                {" - "}
                {block.description}
            </li>
        );
    });

    return (
        <div className="container py-5 mt-3">
            <DetailHeader
                title="my favorite websites"
                subtitle="welcome to my internet"
            />
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <ul>{listElements}</ul>
                </div>
            </div>
        </div>
    );
}