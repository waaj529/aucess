import { Newspaper } from "lucide-react";

interface BlogPostProps {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

const BlogPost = ({ image, category, date, readTime, title, description }: BlogPostProps) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 py-8 border-b border-border last:border-b-0">
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {category}
          </span>
          <span className="text-sm text-muted-foreground">Date: {date}</span>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm text-muted-foreground">{readTime} Read</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* Read More */}
        <a
          href="#"
          className="text-foreground font-medium hover:text-primary transition-colors duration-200 w-fit"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

const BlogSection = () => {
  const blogPosts: BlogPostProps[] = [
    {
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop",
      category: "UX/UI Design",
      date: "June 25, 2025",
      readTime: "4 min",
      title: "Top 5 UX Mistakes To Avoid In 2025",
      description: "Avoid the most common UX pitfalls and learn how to design user-friendly interfaces that improve engagement and conversions.",
    },
    {
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop",
      category: "Case Studies",
      date: "June 25, 2025",
      readTime: "5 min",
      title: "How We Helped X Brand Launch In 3 Weeks",
      description: "A case study on how our team delivered a fully branded digital experience—from concept to launch—under tight deadlines.",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
      category: "Development",
      date: "June 20, 2025",
      readTime: "6 min",
      title: "The Future Of Web Development: Trends To Watch",
      description: "Explore the latest web development trends that are shaping the future of digital experiences and business success.",
    },
  ];

  return (
    <section className="relative pt-24 md:pt-32 pb-0 bg-muted">

      <div className="relative z-20 mx-6 md:mx-12">
        {/* Two Column Layout aligned to 30%/70% grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] border-t border-b border-border">
          {/* Left side - Label (30%) */}
          <div className="flex items-start gap-2 pr-4 lg:pr-6 pl-4 lg:pl-8 pt-12">
            <Newspaper className="w-5 h-5 text-[#ff5757]" />
            <span className="text-[#ff5757] font-bold tracking-wide uppercase text-sm">
              Blog
            </span>
          </div>

          {/* Right side - Content (70%) */}
          <div className="pl-4 lg:pl-6 pr-4 lg:pr-6 pt-12">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-6">
                Thoughts, Trends, And Creative Perspectives
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Discover how we craft meaningful digital experiences. Dive into articles on design thinking, development hacks, client stories, and more.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="border-t border-border">
              {blogPosts.map((post) => (
                <BlogPost key={post.title} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
