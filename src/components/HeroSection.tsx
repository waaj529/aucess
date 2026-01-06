import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ratingBadgeRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let rafId: number;
    let currentProgress = 0;
    let targetProgress = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateAnimation = () => {
      const track = trackRef.current;
      const videoContainer = videoContainerRef.current;
      const content = contentRef.current;
      const ratingBadge = ratingBadgeRef.current;

      if (!track || !videoContainer || !content) {
        rafId = requestAnimationFrame(updateAnimation);
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const trackTop = trackRect.top;
      const trackHeight = trackRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate target scroll progress (0 to 1)
      targetProgress = Math.min(
        Math.max(-trackTop / (trackHeight - viewportHeight), 0),
        1
      );

      // Smooth interpolation - faster lerp factor for responsive feel
      const lerpFactor = 0.15;
      currentProgress = lerp(currentProgress, targetProgress, lerpFactor);

      // Snap to target if very close
      if (Math.abs(currentProgress - targetProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      // Video dimensions - starts small, expands to fit within margin lines with inner padding
      const marginSize = 48; // 12 * 4 = 48px (matches left-12 and right-12)
      const innerPadding = 24; // Padding from border lines to content
      const navHeight = 80; // Height of navbar
      const initialWidth = 260;
      const initialHeight = 160;
      const finalWidth = window.innerWidth - (marginSize * 2) - (innerPadding * 2); // Width with padding from borders
      const finalHeight = viewportHeight - navHeight - innerPadding; // Fill height with bottom padding

      // Position - video vertically centered in left column, ends at left margin + padding
      const initialX = marginSize + innerPadding;
      const initialY = viewportHeight / 2;
      const initialMarginTop = -80;
      const finalX = marginSize + innerPadding; // Align with left margin line + padding
      const finalY = navHeight; // Start below navbar
      const finalMarginTop = 0;

      // Interpolate values with smooth progress
      const currentWidth = lerp(initialWidth, finalWidth, currentProgress);
      const currentHeight = lerp(initialHeight, finalHeight, currentProgress);
      const currentX = lerp(initialX, finalX, currentProgress);
      const currentY = lerp(initialY, finalY, currentProgress);
      const currentMarginTop = lerp(initialMarginTop, finalMarginTop, currentProgress);

      // Border radius removed for clean edges

      // Apply styles using transform for better performance
      videoContainer.style.width = `${currentWidth}px`;
      videoContainer.style.height = `${currentHeight}px`;
      videoContainer.style.transform = `translate3d(${currentX}px, ${currentY + currentMarginTop}px, 0)`;
      videoContainer.style.borderRadius = '0';

      // Rating badge positioned above the video
      if (ratingBadge) {
        const badgeY = currentY + currentMarginTop - 50;
        const badgeOpacity = Math.max(1 - currentProgress * 2, 0);
        ratingBadge.style.transform = `translate3d(${currentX}px, ${badgeY}px, 0)`;
        ratingBadge.style.opacity = `${badgeOpacity}`;
      }

      // Content animation
      const contentOffset = currentProgress * -200;
      const contentOpacity = Math.max(1 - currentProgress * 1.5, 0);
      content.style.transform = `translate3d(0, ${contentOffset}px, 0)`;
      content.style.opacity = `${contentOpacity}`;

      rafId = requestAnimationFrame(updateAnimation);
    };

    rafId = requestAnimationFrame(updateAnimation);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  // Mobile Layout
  if (isMobile) {
    return (
      <section className="pt-24 pb-8 px-4 relative z-20">
        {/* Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-foreground mb-5">
            Empowering Tomorrow with{" "}
            <span className="text-[#ff5757]">Intelligent</span>{" "}
            AI
          </h1>
          <p className="text-base text-muted-foreground mb-6 max-w-sm mx-auto">
            Aucess delivers cutting-edge AI solutions that transform businesses and unlock new possibilities.
          </p>

          {/* Reviews */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              1200+ reviews (4.9 of 5)
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-center gap-3 mb-8">
            <Button size="lg" className="rounded-none px-6 h-14 text-sm font-medium">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none px-6 h-14 text-sm font-medium border-foreground hover:bg-foreground hover:text-background"
            >
              Get A Free Quote
            </Button>
          </div>
        </div>

        {/* Video */}
        <div className="mx-2 rounded-xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto aspect-video object-cover"
          >
            <source
              src="https://ik.imagekit.io/83szmoods/business-meeting-2025-12-17-22-40-20-utc%20(1).webm"
              type="video/webm"
            />
          </video>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <section
      ref={trackRef}
      className="relative z-20"
      style={{ height: "200vh" }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Two-column layout */}
        <div className="flex h-full pt-20">
          {/* Left Column */}
          <div className="w-1/2 h-full relative" />

          {/* Right Column */}
          <div className="w-1/2 h-full" />
        </div>

        {/* Video Container - vertically centered in left column */}
        <div
          ref={videoContainerRef}
          className="absolute z-10 overflow-hidden bg-muted left-0 top-0"
          style={{
            width: "260px",
            height: "160px",
            transform: `translate3d(72px, calc(50vh - 80px), 0)`,
            borderRadius: "0",
            willChange: "transform, width, height, border-radius",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source
              src="https://ik.imagekit.io/83szmoods/business-meeting-2025-12-17-22-40-20-utc%20(1).webm"
              type="video/webm"
            />
          </video>
        </div>

        {/* Rating Badge - above video */}
        <div
          ref={ratingBadgeRef}
          className="absolute z-20 left-0 top-0"
          style={{
            transform: `translate3d(72px, calc(50vh - 130px), 0)`,
            willChange: "transform, opacity",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-background bg-muted overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              1200+ reviews (4.9 of 5)
            </span>
          </div>
        </div>

        {/* Content - Right side, aligned with left content */}
        <div
          ref={contentRef}
          className="absolute left-[30%] right-12 top-0"
          style={{
            paddingTop: 'calc(50vh - 130px)',
            willChange: "transform, opacity"
          }}
        >
          <div className="pl-8 pr-8">
            <h1 className="text-5xl lg:text-6xl xl:text-[4rem] font-bold leading-[1.1] tracking-tight text-foreground mb-5">
              Empowering Tomorrow with{" "}
              <span className="text-[#ff5757]">Intelligent</span> AI
            </h1>
            <p className="text-base text-muted-foreground mb-7 max-w-xl">
              Aucess delivers cutting-edge AI solutions that transform businesses and unlock new possibilities.
            </p>
            <div className="flex flex-row gap-3">
              <Button className="rounded-none px-6 h-12 text-sm font-medium">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="rounded-none px-6 h-12 text-sm font-medium border-foreground hover:bg-foreground hover:text-background"
              >
                Get A Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;