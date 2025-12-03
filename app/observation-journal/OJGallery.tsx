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
  const images = arena?.contents
    ?.filter((b) => b.image?.thumb?.url && b.image.original?.url)
    .reverse() || [];

  if (images.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <div className="d-flex flex-wrap">
      {images.map((block) => (
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
      ))}
    </div>
  );
}