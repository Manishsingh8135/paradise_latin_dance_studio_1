import { danceStyles } from '@/components/dance-studio/sections/dance-styles';
import { instructors } from '@/components/sections/instructors/data/instructors-data';

export async function GET() {
  try {
    // Start building the XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <url>
        <loc>https://paradiselatindance.com/</loc>
        <image:image>
          <image:loc>https://paradiselatindance.com/og-image.jpg</image:loc>
          <image:title>Paradise Latin Dance Studio</image:title>
          <image:caption>Premier Latin dance instruction in Hawaii</image:caption>
        </image:image>
      </url>`;

    // Add dance styles images
    try {
      for (const style of danceStyles) {
        xml += `
        <url>
          <loc>https://paradiselatindance.com/dance-styles/${style.id}</loc>
          <image:image>
            <image:loc>${style.image}</image:loc>
            <image:title>${style.name} - Paradise Latin Dance Studio</image:title>
            <image:caption>${style.description}</image:caption>
          </image:image>
        </url>`;
      }
    } catch (error) {
      console.error("Error processing dance styles for image sitemap:", error);
    }

    // Add instructor images
    try {
      for (const instructor of instructors) {
        xml += `
        <url>
          <loc>https://paradiselatindance.com/instructors/${instructor.id}</loc>
          <image:image>
            <image:loc>${instructor.image}</image:loc>
            <image:title>${instructor.name} - Dance Instructor</image:title>
            <image:caption>${instructor.role} at Paradise Latin Dance Studio</image:caption>
          </image:image>
        </url>`;
      }
    } catch (error) {
      console.error("Error processing instructors for image sitemap:", error);
    }

    // Close the XML
    xml += `
    </urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400'
      }
    });
  } catch (error) {
    console.error("Error generating image sitemap:", error);
    return new Response("Error generating image sitemap", { status: 500 });
  }
} 