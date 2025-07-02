export async function GET() {
  try {
    // In a real implementation, this data could come from your CMS or database
    const videos = [
      {
        title: "Salsa Dance Performance",
        description: "Watch our instructors perform authentic Salsa at Paradise Latin Dance Studio",
        thumbnail: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826472/Ripfitness/Dance-studio/lds-1_licbfa.jpg",
        contentUrl: "https://res.cloudinary.com/dyop38nwj/video/upload/v1234567890/Ripfitness/Dance-studio/salsa-performance.mp4",
        embedUrl: "https://res.cloudinary.com/dyop38nwj/video/upload/v1234567890/Ripfitness/Dance-studio/salsa-performance.mp4",
        duration: "PT2M15S", // ISO 8601 format: 2 minutes 15 seconds
        uploadDate: "2023-06-15",
        pageUrl: "https://paradiselatindance.com/performances/salsa"
      },
      {
        title: "Bachata Dance Class Preview",
        description: "Get a sneak peek at our beginner Bachata classes with instructor Rico",
        thumbnail: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826481/Ripfitness/Dance-studio/lds-2_rgxwi8.jpg",
        contentUrl: "https://res.cloudinary.com/dyop38nwj/video/upload/v1234567890/Ripfitness/Dance-studio/bachata-class.mp4",
        embedUrl: "https://res.cloudinary.com/dyop38nwj/video/upload/v1234567890/Ripfitness/Dance-studio/bachata-class.mp4",
        duration: "PT1M45S", // 1 minute 45 seconds
        uploadDate: "2023-07-20",
        pageUrl: "https://paradiselatindance.com/classes/bachata"
      },
      {
        title: "Meet Our Instructors",
        description: "Paradise Latin Dance Studio's talented team of professional dance instructors",
        thumbnail: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738822187/Ripfitness/Dance-studio/Rico-1_iieiwy.jpg",
        contentUrl: "https://res.cloudinary.com/dyop38nwj/video/upload/v1234567890/Ripfitness/Dance-studio/meet-instructors.mp4",
        embedUrl: "https://res.cloudinary.com/dyop38nwj/video/upload/v1234567890/Ripfitness/Dance-studio/meet-instructors.mp4",
        duration: "PT3M20S", // 3 minutes 20 seconds
        uploadDate: "2023-08-10",
        pageUrl: "https://paradiselatindance.com/instructors"
      }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${videos.map(video => `
        <url>
          <loc>${video.pageUrl}</loc>
          <video:video>
            <video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>
            <video:title>${video.title}</video:title>
            <video:description>${video.description}</video:description>
            <video:content_loc>${video.contentUrl}</video:content_loc>
            <video:player_loc>${video.embedUrl}</video:player_loc>
            <video:duration>${video.duration.replace('PT', '').replace('M', ':').replace('S', '')}</video:duration>
            <video:publication_date>${video.uploadDate}</video:publication_date>
            <video:family_friendly>yes</video:family_friendly>
            <video:requires_subscription>no</video:requires_subscription>
          </video:video>
        </url>
      `).join('')}
    </urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400'
      }
    });
  } catch (error) {
    console.error("Error generating video sitemap:", error);
    return new Response("Error generating video sitemap", { status: 500 });
  }
} 