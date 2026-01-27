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
  src: "https://res.cloudinary.com/dyop38nwj/video/upload/v1738827537/Ripfitness/Dance-studio/master_qfajr3.mp4",
  poster: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826472/Ripfitness/Dance-studio/lds-1_licbfa.jpg"
};

export const heroSection = {
  content: heroContent,
  media: heroMedia,
  showParticles: true
}; 