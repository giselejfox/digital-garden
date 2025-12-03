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

export default function OJGallery({ arena }: GalleryProps) {
  const images = arena.contents
    .filter((b) => b.image?.thumb?.url && b.image.original?.url)
    .reverse();

  return (
    <div className="d-flex flex-wrap">
      {images.map((block) => (
        <a
          key={block.id}
          href={block.image!.original.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'relative',
            height: '13rem',
            width: '10rem',      // Set a fixed width instead of auto
            // flex: '0 0 auto',
            // margin: '0.25rem',
          }}
        >
          <Image
            src={block.image!.thumb.url}
            alt={block.title || block.generated_title || ''}
            fill
            style={{ objectFit: 'cover' }}
          />
        </a>
      ))}
    </div>
  );
}