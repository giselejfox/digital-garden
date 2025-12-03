export async function fetchArenaChannel(slug) {
  // console.log('🌐 Fetching Arena channel:', slug);
  const url = `https://api.are.na/v2/channels/${slug}?per=100`;
  // console.log('📍 URL:', url);
  
  const res = await fetch(url, {
    cache: "force-cache",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  
  if (!res.ok) {
    console.error('❌ Arena API error:', res.status, res.statusText, 'for slug:', slug);
    return { contents: [] };
  }
  
  const data = await res.json();
  // console.log('✅ Arena API success for', slug, '- items:', data.contents?.length);
  
  return data; // Return the full data object, not just { contents: data.contents }
}

export function getImageBlocks(channelData) {
  return channelData.contents
    .filter((block) => block.class === "Image" && block.image)
    .map((block) => ({
      id: block.id,
      alt: block.title || block.generated_title,
      url: block.image.thumb.url,
    }));
}