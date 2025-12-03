/* eslint-disable @next/next/no-img-element */
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

interface GalleryProps {
    arena: ArenaData;
}


export default function Gallery({ arena }: GalleryProps) {
    const images = [...arena.contents]
        .filter((block) => block.image)
        .reverse();

    return (
        <div>
            <main>
                <div className="d-flex flex-wrap">
                    {images.map((block) => (
                        <a
                            key={block.id}
                            href={block.image!.original.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={block.image!.thumb.url}
                                alt={block.title || block.generated_title || ""}
                                className="px-1 py-1"
                                style={{ height: "15rem" }}
                            />
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}