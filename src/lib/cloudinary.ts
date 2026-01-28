/**
 * Cloudinary Configuration
 * Centralized config for all Cloudinary URLs
 * Change CLOUD_NAME to switch accounts
 */

export const CLOUDINARY_CLOUD_NAME = "du1abbode";

// Base URLs
const IMAGE_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
const VIDEO_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload`;

// Default optimizations
const IMAGE_OPTIMIZATIONS = "f_auto,q_auto";
const VIDEO_OPTIMIZATIONS = "q_auto";

/**
 * Generate optimized Cloudinary image URL
 */
export function cloudinaryImage(
  filename: string,
  options?: { width?: number; height?: number; crop?: string }
): string {
  let transforms = IMAGE_OPTIMIZATIONS;

  if (options?.width) transforms += `,w_${options.width}`;
  if (options?.height) transforms += `,h_${options.height}`;
  if (options?.crop) transforms += `,c_${options.crop}`;

  return `${IMAGE_BASE}/${transforms}/${filename}`;
}

/**
 * Generate optimized Cloudinary video URL
 */
export function cloudinaryVideo(filename: string): string {
  return `${VIDEO_BASE}/${VIDEO_OPTIMIZATIONS}/${filename}`;
}

// =============================================================================
// MEDIA ASSETS - All Cloudinary file references in one place
// =============================================================================

export const MEDIA = {
  // Hero
  heroVideo: "v1769497887/paradise-intro_1_d9khw3.mp4",

  // Instructors
  instructors: {
    rico: "v1769497984/Rico-1_iieiwy_ifxnhb.jpg",
    mike: "v1769498039/Mike-1_npyna3_rciyhq.jpg",
  },

  // Dance Studio Images
  danceStudio: {
    lds1: "v1769498041/lds-1_licbfa_iypbcx.jpg",      // Salsa
    lds2: "v1769498043/lds-2_rgxwi8_dpiloj.jpg",      // Bachata
    lds3: "v1769498042/lds-3_jlnuvb_cssfrm.jpg",
    lds4: "v1769498037/lds-4_lmrs4d_pwefgq.jpg",
    lds5: "v1769498047/lds-5_bavqe8_c4rsif.jpg",
    lds6: "v1769498039/lds-6_vb557d_qucxm4.jpg",
    lds8: "v1769498039/lds-8_v4wyiw_ycje0g.jpg",
    paradiseDance: "v1769497965/ParadaiseLatinDance_46of55_yz6tx4_qgoajq.jpg",
    dancePhoto1: "v1769498043/2421C9C6-F076-4462-A5A2-F911CBA790FF_kjns2y_iqy67o.jpg",
    dancePhoto2: "v1769498043/481ED18E-99CB-445B-8ADF-CB8291395D88_morepr_c5p8wq.jpg",
  },

  // Testimonials
  testimonials: {
    thumb1: "v1769498037/testmonial-thumb-1_lionkd_e3yw9k.png",
    thumb2: "v1769498040/testimonial-thumb-2_fqsjvb_kypzwt.png",
    thumb3: "v1769498031/testimonial-thumb-3_ug0kgj_vltgfp.png",
    video1: "v1769497983/12._Student_Tesitmonial_kv4sbn_o58yts.mov",
    video2: "v1769498035/13._Student_Testimonial_p0abao_ulsdcs.mov",
    video3: "v1769498036/15._Student_Testimonial_Nalani_mflwcw_gj8oto.mov",
  },

  // Featured Videos
  videos: {
    master1: "v1769498053/master_qfajr3_ckkb66.mp4",
    master2: "v1769498059/master_8_zpxqbi_mpvmik.mp4",
    halloween: "v1769497999/Halloween_Dance_Social_cc_mntm7d_tg1lad.mov",
  },
} as const;

// =============================================================================
// Pre-built optimized URLs for common use
// =============================================================================

export const OPTIMIZED_URLS = {
  // Hero
  heroVideo: cloudinaryVideo(MEDIA.heroVideo),
  heroPoster: cloudinaryImage(MEDIA.danceStudio.lds1),

  // Instructors
  rico: cloudinaryImage(MEDIA.instructors.rico),
  mike: cloudinaryImage(MEDIA.instructors.mike),

  // Dance Images
  salsa: cloudinaryImage(MEDIA.danceStudio.lds1),
  bachata: cloudinaryImage(MEDIA.danceStudio.lds2),
  lds3: cloudinaryImage(MEDIA.danceStudio.lds3),
  lds4: cloudinaryImage(MEDIA.danceStudio.lds4),
  lds5: cloudinaryImage(MEDIA.danceStudio.lds5),
  lds6: cloudinaryImage(MEDIA.danceStudio.lds6),
  lds8: cloudinaryImage(MEDIA.danceStudio.lds8),
  paradiseDance: cloudinaryImage(MEDIA.danceStudio.paradiseDance),
  dancePhoto1: cloudinaryImage(MEDIA.danceStudio.dancePhoto1),
  dancePhoto2: cloudinaryImage(MEDIA.danceStudio.dancePhoto2),

  // Testimonials
  testimonialThumb1: cloudinaryImage(MEDIA.testimonials.thumb1),
  testimonialThumb2: cloudinaryImage(MEDIA.testimonials.thumb2),
  testimonialThumb3: cloudinaryImage(MEDIA.testimonials.thumb3),
  testimonialVideo1: cloudinaryVideo(MEDIA.testimonials.video1),
  testimonialVideo2: cloudinaryVideo(MEDIA.testimonials.video2),
  testimonialVideo3: cloudinaryVideo(MEDIA.testimonials.video3),

  // Featured Videos
  featuredVideo1: cloudinaryVideo(MEDIA.videos.master1),
  featuredVideo2: cloudinaryVideo(MEDIA.videos.master2),
  halloweenVideo: cloudinaryVideo(MEDIA.videos.halloween),
} as const;
