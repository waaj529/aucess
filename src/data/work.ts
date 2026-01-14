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
        id: "ai-chatbot",
        title: "AI Chatbot",
        description: "Intelligent conversational AI that understands and responds to customer needs 24/7.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client needed an intelligent chatbot solution to handle customer inquiries around the clock while maintaining natural conversation flow.",
            images: [
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We developed an advanced AI chatbot using natural language processing and machine learning to understand context and provide accurate responses.",
            images: [
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Revolutionary customer service.",
            author: "Emma Wilson",
            role: "Customer Success Manager"
        }
    },
    {
        id: "object-detection",
        title: "Object Detection & Recognition",
        description: "Advanced computer vision systems that identify and classify objects in real-time.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client required a real-time object detection system for quality control in manufacturing processes.",
            images: [
                "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We implemented state-of-the-art deep learning models for accurate object detection and classification with minimal latency.",
            images: [
                "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Incredible accuracy.",
            author: "Robert Martinez",
            role: "Operations Director"
        }
    },
    {
        id: "data-analysis",
        title: "Data Analysis",
        description: "Extract meaningful insights from complex datasets to drive informed business decisions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client had vast amounts of data but lacked the tools to extract actionable insights efficiently.",
            images: [
                "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We built comprehensive data analysis pipelines with advanced statistical methods and visualization tools for clear insights.",
            images: [
                "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Data-driven decisions made easy.",
            author: "Lisa Anderson",
            role: "Chief Data Officer"
        }
    },
    {
        id: "data-science",
        title: "Data Science",
        description: "Leverage advanced analytics and predictive modeling to unlock business value.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client needed predictive models to forecast trends and optimize business operations.",
            images: [
                "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We developed custom data science solutions using machine learning algorithms and statistical modeling for accurate predictions.",
            images: [
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Predictive power at its best.",
            author: "Thomas Brown",
            role: "VP of Analytics"
        }
    },
    {
        id: "machine-learning-cv",
        title: "Machine Learning & Computer Vision",
        description: "Cutting-edge ML models and computer vision systems for intelligent automation.",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client required sophisticated ML models combined with computer vision for automated visual inspection.",
            images: [
                "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We created integrated ML and computer vision solutions that learn and adapt to improve accuracy over time.",
            images: [
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Next-level automation.",
            author: "Jennifer Taylor",
            role: "Head of Innovation"
        }
    },
    {
        id: "genai",
        title: "Generative AI",
        description: "Harness the power of generative AI to create content, code, and creative solutions.",
        image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client wanted to leverage generative AI for content creation and process automation at scale.",
            images: [
                "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1676277791608-ac54525aa94d?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We implemented cutting-edge generative AI models tailored to the client's specific use cases and requirements.",
            images: [
                "https://images.unsplash.com/photo-1676277791608-ac54525aa94d?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Game-changing technology.",
            author: "Michael Foster",
            role: "Chief Innovation Officer"
        }
    },
    {
        id: "agentic-ai",
        title: "Agentic AI",
        description: "Autonomous AI agents that take action and make decisions to achieve complex goals.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client needed autonomous AI systems capable of making decisions and taking actions without constant human oversight.",
            images: [
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We developed intelligent AI agents with reasoning capabilities that can plan, execute, and adapt to achieve defined objectives.",
            images: [
                "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Truly autonomous intelligence.",
            author: "Patricia Green",
            role: "Director of AI Strategy"
        }
    },
    {
        id: "automation",
        title: "Automation",
        description: "Streamline operations and boost efficiency with intelligent automation solutions.",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&auto=format&fit=crop",
        challengeRef: {
            title: "The Challenge",
            description: "The client had repetitive manual processes that were time-consuming and prone to human error.",
            images: [
                "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop"
            ]
        },
        solutionRef: {
            description: "We designed and implemented end-to-end automation workflows that reduced manual effort and improved accuracy.",
            images: [
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop"
            ]
        },
        resultsRef: [],
        clientFeedbackRef: {
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
            quote: "Efficiency transformed.",
            author: "Daniel White",
            role: "COO"
        }
    }
];
