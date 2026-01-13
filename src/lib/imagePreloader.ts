// Critical images that need to be preloaded for above-the-fold content
export const criticalImages = [
  // Logo
  "/Aucess.svg",
  "/favicon.png",
  
  // Hero video poster (if any)
  "https://ik.imagekit.io/83szmoods/business-meeting-2025-12-17-22-40-20-utc%20(1).webm",
  
  // Service images - visible immediately on services page
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/ai-software-v2_umtmkg.jpg",
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/ai-apps-v2_cbakoq.jpg",
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991364/machine-learning-v2_lb953j.jpg",
];

// All other images that can be preloaded with lower priority
export const allImages = [
  // Service images
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/ai-software-v2_umtmkg.jpg",
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/ai-apps-v2_cbakoq.jpg",
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991364/machine-learning-v2_lb953j.jpg",
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991364/computer-vision-v2_nja8m2.jpg",
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/automation-v2_ginml7.jpg",
  "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/devops-v2_uwk24n.jpg",
  
  // Team images
  "https://ik.imagekit.io/luod4wmv7/WhatsApp%20Image%202026-01-11%20at%2021.11.06%20(1).jpeg?updatedAt=1768232381593",
  "https://ik.imagekit.io/luod4wmv7/image-gen%20(8).jpg",
  
  // Testimonial images
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  
  // Work/Portfolio images
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
  
  // Blog images
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
  
  // Work detail images
  "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526367790999-3850b9575eda?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565514020176-dbf2277e990b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
  
  // About hero image
  "/lovable-uploads/about-hero-small.png",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

// Preload images utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

// Preload all critical images
export const preloadCriticalImages = async (): Promise<void> => {
  try {
    await Promise.all(criticalImages.map(src => preloadImage(src)));
  } catch (error) {
    console.warn("Some critical images failed to preload:", error);
  }
};

// Preload all images with priority
export const preloadAllImages = async (): Promise<void> => {
  try {
    // Preload critical images first
    await preloadCriticalImages();
    
    // Then preload remaining images in the background
    const remainingImages = allImages.filter(img => !criticalImages.includes(img));
    Promise.all(remainingImages.map(src => preloadImage(src).catch(() => {})));
  } catch (error) {
    console.warn("Image preloading encountered errors:", error);
  }
};
