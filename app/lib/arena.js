export async function fetchArenaChannel(slug) {
  const res = await fetch(`https://api.are.na/v2/channels/${slug}?per=100`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    return { contents: [] }; // <-- fallback empty array
  }

  const data = await res.json();
  return { contents: data.contents ?? [] };
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