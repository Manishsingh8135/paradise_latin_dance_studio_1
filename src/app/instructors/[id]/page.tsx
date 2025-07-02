/**
 * Individual Instructor Page - Paradise Dance Studio
 * World-class UI/UX design with stunning animations and SEO optimization
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { instructors } from '@/components/sections/instructors/data/instructors-data';
import InstructorProfilePage from '@/components/pages/instructors/instructor-profile';

interface InstructorPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate metadata for SEO optimization
export async function generateMetadata({ params }: InstructorPageProps): Promise<Metadata> {
  const { id } = await params;
  const instructor = instructors.find(i => i.id === id);
  
  if (!instructor) {
    return {
      title: 'Instructor Not Found | Paradise Latin Dance Studio',
    };
  }

  const title = `${instructor.name} - Expert ${instructor.specialties.join(' & ')} Instructor | Paradise Latin Dance Studio Hawaii`;
  const description = `Meet ${instructor.name}, our expert ${instructor.specialties.join(' and ')} instructor with ${instructor.experience} of experience. Learn authentic Latin dance in Waipahu, Hawaii. Book your trial class today!`;

  return {
    title,
    description,
    keywords: [
      instructor.name.toLowerCase(),
      ...instructor.specialties.map(s => s.toLowerCase()),
      'latin dance instructor hawaii',
      'salsa teacher oahu',
      'bachata instructor waipahu',
      'dance lessons hawaii',
      'paradise latin dance studio',
      'professional dance instructor',
      'authentic latin dance',
      'hawaii dance classes'
    ].join(', '),
    authors: [{ name: instructor.name }],
    creator: instructor.name,
    publisher: 'Paradise Latin Dance Studio',
    
    // Open Graph for social media
    openGraph: {
      title,
      description,
      url: `https://paradiselatindance.com/instructors/${id}`,
      siteName: 'Paradise Latin Dance Studio',
      images: [
        {
          url: instructor.image,
          width: 1200,
          height: 630,
          alt: `${instructor.name} - ${instructor.role}`,
        },
      ],
      locale: 'en_US',
      type: 'profile',
    },
    
    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [instructor.image],
      creator: '@paradiselatindance',
    },
    
    // Additional SEO
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Schema.org structured data
    other: {
      'schema:name': instructor.name,
      'schema:jobTitle': instructor.role,
      'schema:worksFor': 'Paradise Latin Dance Studio',
      'schema:address': 'Waipahu, Hawaii',
    },
  };
}

// Generate static params for all instructors (performance optimization)
export async function generateStaticParams() {
  return instructors.map((instructor) => ({
    id: instructor.id,
  }));
}

// Add JSON-LD structured data for enhanced SEO
function generateStructuredData(instructor: typeof instructors[0], instructorId: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: instructor.name,
    jobTitle: instructor.role,
    description: instructor.bio,
    image: instructor.image,
    url: `https://paradiselatindance.com/instructors/${instructorId}`,
    worksFor: {
      '@type': 'Organization',
      name: 'Paradise Latin Dance Studio',
      url: 'https://paradiselatindance.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Waipahu',
        addressRegion: 'Hawaii',
        addressCountry: 'US',
      },
    },
    knowsAbout: instructor.specialties,
    alumniOf: instructor.certifications,
    award: instructor.achievements,
    sameAs: [
      instructor.social.instagram,
      instructor.social.paradiseDance,
      instructor.social.ripFitness,
    ].filter(Boolean),
    teaches: {
      '@type': 'Course',
      name: `${instructor.specialties.join(' and ')} Dance Classes`,
      description: `Professional ${instructor.specialties.join(' and ')} instruction in Hawaii`,
      provider: {
        '@type': 'Organization',
        name: 'Paradise Latin Dance Studio',
      },
    },
  };
}

export default async function InstructorPage({ params }: InstructorPageProps) {
  const { id } = await params;
  const instructor = instructors.find(i => i.id === id);
  
  if (!instructor) {
    notFound();
  }

  const structuredData = generateStructuredData(instructor, id);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Main Page Component */}
      <InstructorProfilePage instructor={instructor} />
    </>
  );
} 