import { HeroContent, HeroMedia } from "../types/hero-types";

export const heroContent: HeroContent = {
  title: "Paradise Latin Dance Studio",
  subtitle: "Discover Your Rhythm",
  description: "Experience the joy of Latin dance in Hawaii's premier dance studio. From salsa to bachata, our expert instructors will guide you through every step of your dance journey.",
  buttons: [
    {
      text: "Start Dancing",
      url: "#classes",
      isPrimary: true
    },
    {
      text: "Explore Classes",
      url: "#schedule"
    }
  ]
};

export const heroMedia: HeroMedia = {
  type: "video",
  src: "/assets/videos/paradise-intro.mp4",
  poster: "/assets/images/dance-hero-poster.jpg"
};

export const heroSection = {
  content: heroContent,
  media: heroMedia,
  showParticles: true
}; 