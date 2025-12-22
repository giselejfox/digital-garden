import Image from 'next/image';

import { fetchArenaChannel } from '../lib/arena';
import DetailHeader from '../components/DetailHeader';

interface ArenaImage {
    thumb: { url: string };
    original: { url: string };
}

interface ArenaBlock {
    id: number;
    title: string | null;
    generated_title: string | null;
    image: ArenaImage | null;
}

interface ArenaData {
    contents: ArenaBlock[];
}

export default async function FiberCrafts() {
    const channel = 'fiber-crafts';
    const arena: ArenaData = await fetchArenaChannel(channel);

    console.log('Fetched arena data:', arena);

    const listElements = arena.contents.map((block) => {
        return (
            <div key={block.id} className="col-6 col-md-6 col-lg-3 d-flex justify-content-center m-3">
                <a
                    key={block.id}
                    href={block.image!.original.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        height: '15rem',
                        flex: '0 0 auto',
                        margin: '0.25rem',
                    }}
                >
                    <Image
                        src={block.image!.thumb.url}
                        alt={block.title || block.generated_title || ''}
                        width={240}
                        height={240}
                        style={{
                            height: '15rem',
                            width: 'auto',
                            objectFit: 'cover'
                        }}
                    />
                </a>
            </div>
        );
    });

    return (
        <div className="container py-5 mt-3">
            <DetailHeader
                title="my fiber crafts"
                subtitle="an unfinished list of my handmade items"
            />
            <div className="row justify-content-center">
                {listElements}
            </div>
        </div>
    );
}