'use client';
import Image from 'next/image';

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

export default function FilmGallery({ arena }: GalleryProps) {
  const images =
    arena?.contents?.filter(
      (b) => b.image?.thumb?.url && b.image.original?.url
    ) || [];

  if (images.length === 0) {
    return <div>No images found</div>;
  }

  // Categorize images by year
  const categorized: Record<string, ArenaBlock[]> = {};

  images.forEach((block) => {
    const title = block.title || block.generated_title || '';
    const yearMatch = title.match(/\b(19|20)\d{2}\b/);
    const year = yearMatch ? yearMatch[0] : 'Unknown';

    if (!categorized[year]) {
      categorized[year] = [];
    }
    categorized[year].push(block);
  });

  // Sort years descending
  const sortedYears = Object.keys(categorized).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return Number(b) - Number(a);
  });

  return (
    <div>
      {sortedYears.map((year) => (
        <div key={year}>
          <h2 className="about-h2">{year}</h2>
          <div className="horizontal-line mb-3"></div>

          <div className="d-flex flex-wrap justify-content-center">
            {categorized[year].map((block) => (
              <a
                key={block.id}
                href={block.image!.original.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item mb-2"
              >
                <Image
                  src={block.image!.thumb.url}
                  alt={block.title || block.generated_title || ''}
                  width={600}
                  height={400}
                  className="gallery-image"
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}