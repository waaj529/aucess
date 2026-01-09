export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    challengeRef: {
        title: string;
        description: string;
        images: string[];
    };
    solutionRef: {
        description: string;
        images: string[];
    };
    resultsRef: {
        title: string;
        items: string[];
    }[];
    clientFeedbackRef: {
        imageUrl: string;
        quote: string;
        author: string;
        role: string;
    };
}

export const projects: Project[] = [
    {
        id: "e-commerce",
        title: "E-Commerce",
        description: "Boost your online sales with sleek, user-friendly shopping experiences designed to convert.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "XYZ E-Commerce was facing significant challenges with their website, including a high bounce rate and low conversion rates. Their website had an outdated design, lacked mobile responsiveness, and did not provide an intuitive user experience. Customers found it difficult to navigate, particularly on mobile, which led to cart abandonment and lost sales. The checkout process was complex and cumbersome, frustrating users and causing them to leave the site before completing their purchases. XYZ E-Commerce needed a modern, user-friendly, and mobile-optimized solution to reduce bounce rates, improve conversion rates, and create a smoother shopping experience for their customers.",
            images: [
                "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "To address XYZ E-Commerce’s challenges, we implemented a comprehensive solution that focused on improving user experience, boosting conversion rates, and modernizing the website. Our approach began with a mobile-first redesign, ensuring the site was optimized for both desktop and mobile devices. We simplified the checkout flow to reduce friction and integrated secure payment systems to enhance user trust.\n\nAdditionally, we optimized product pages with clear calls to action, high-quality images, and streamlined content to improve engagement. The new design also reflected the brand’s unique identity, giving the website a fresh, modern look that resonated with the target audience. Throughout the project, we utilized the latest web technologies to ensure scalability, security, and future-proofing, making the site more adaptable to future business needs.",
            images: [
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [
            {
                title: "After Launching The New Website, XYZ E-Commerce Saw The Following Improvements:",
                items: [
                    "40% increase in conversion rates.",
                    "20% decrease in bounce rates.",
                    "50% increase in mobile traffic within the first three months."
                ]
            },
            {
                title: "The Optimized Checkout Process Also Brought About Significant Improvements:",
                items: [
                    "15% reduction in cart abandonment.",
                    "User satisfaction improved significantly, with positive feedback from customers."
                ]
            },
            {
                title: "Sales Results:",
                items: [
                    "10% rise in sales within the first quarter.",
                    "15% increase in average order value."
                ]
            }
        ],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Working with Aucess was an amazing experience. From the start, they took the time to understand our challenges and goals. They didn’t just redesign our website; they improved our entire e-commerce experience. The new design is mobile-first, intuitive, and engaging, and our conversion rates have skyrocketed. We've seen a 40% increase in sales and received numerous compliments from customers about the smooth checkout process. The Aucess team was responsive, professional, and truly cared about our success. They transformed our digital presence, and the results speak for themselves.",
            author: "John Doe",
            role: "CEO XYZ E-Commerce"
        }
    },
    {
        id: "landing-page",
        title: "Landing Page",
        description: "Capture attention and drive action with stunning, high-converting landing pages.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "Creating a landing page that captures attention immediately is difficult. The client needed a way to showcase their product effectively without overwhelming visitors.",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We designed a high-impact landing page with clear messaging and strong calls to action. By using A/B testing, we optimized the layout for maximum conversion.",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Excellent work.",
            author: "Jane Smith",
            role: "Director"
        }
    },
    {
        id: "food-delivery",
        title: "Food Delivery",
        description: "Delicious meals at your fingertips with seamless ordering and delivery tracking.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client needed a robust food delivery platform that could handle high traffic and provide real-time tracking updates.",
            images: [
                "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We built a scalable backend and a user-friendly mobile app. The solution included real-time GPS tracking and an intuitive ordering interface.",
            images: [
                "https://images.unsplash.com/photo-1526367790999-3850b9575eda?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Great app.",
            author: "Mike Johnson",
            role: "CTO"
        }
    },
    {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        description: "Transform complex data into clear insights with intuitive visualization tools.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "Users were struggling to make sense of large datasets. The client needed a dashboard that could simplify complex data.",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We implemented interactive charts and graphs that allow users to drill down into the data. The design focuses on clarity and usability.",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Very insightful.",
            author: "Sarah Lee",
            role: "VP of Data"
        }
    },
    {
        id: "finance-app",
        title: "Finance App",
        description: "Empower users to manage their finances with smart, secure mobile solutions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "Security and trust were paramount. The client needed a finance app that users could rely on.",
            images: [
                "https://images.unsplash.com/photo-1565514020176-dbf2277e990b?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We used the latest encryption standards and biometric authentication. The UI helps users track spending and set goals easily.",
            images: [
                "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Secure and fast.",
            author: "David Kim",
            role: "CFO"
        }
    },
    {
        id: "tech-platform",
        title: "Tech Platform",
        description: "Build the future with scalable, innovative technology solutions.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client needed a platform that could scale rapidly with their growing user base.",
            images: [
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We architected a microservices-based solution. This allows for independent scaling of different platform components.",
            images: [
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Highly scalable.",
            author: "Alex Chen",
            role: "Head of Engineering"
        }
    }
];
