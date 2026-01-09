// Service images from Cloudinary CDN
const aiSoftwareImg = "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/ai-software-v2_umtmkg.jpg";
const aiAppsImg = "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/ai-apps-v2_cbakoq.jpg";
const machineLearningImg = "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991364/machine-learning-v2_lb953j.jpg";
const computerVisionImg = "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991364/computer-vision-v2_nja8m2.jpg";
const automationImg = "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/automation-v2_ginml7.jpg";
const agenticAiImg = "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/ai-software-v2_umtmkg.jpg"; // Note: No specific URL provided for agentic AI, using ai-software
const devopsImg = "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767991363/devops-v2_uwk24n.jpg";

export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    overview?: string;
    features?: { title: string; description: string; icon?: any }[];
    process?: { step: string; title: string; description: string }[];
}

export const services: Service[] = [
    {
        id: "ai-websites-software",
        title: "AI Websites & Software",
        description:
            "We build intelligent, adaptive websites and robust software solutions infused with AI capabilities to deliver dynamic user experiences and streamline business operations.",
        image: aiSoftwareImg,
        tags: ["AI Integration", "Next.js", "Cloud Architecture", "SaaS Development"],
        overview: "At Aucess, we specialize in creating responsive, user-friendly, and visually stunning websites that reflect your brand and goals. Our Web Design & Development service combines creativity with cutting-edge technology to deliver a seamless user experience and powerful digital presence. Whether you need a simple landing page or a robust e-commerce platform, our team is here to bring your vision to life.",
        features: [
            { title: "Custom Web Design", description: "We create custom websites tailored to your brand, ensuring unique design, usability, and seamless user experience." },
            { title: "Responsive Layout", description: "We design responsive websites for seamless browsing across devices, ensuring great functionality and user experience." },
            { title: "SEO Optimization", description: "We optimize SEO with technical strategies and content to boost rankings, drive traffic, and support growth." },
            { title: "User Centered Design", description: "We design user-centered, intuitive digital experiences that enhance satisfaction, trust, and customer retention seamlessly." },
            { title: "Fast Loading Time", description: "We optimize speed through efficient code, images, and server response, improving engagement, SEO, and user experience." },
            { title: "Future Proof", description: "Our scalable websites grow with your business, ensuring easy updates, future-proof design, and long-term compatibility." }
        ],
        process: [
            { step: "Discovery & Strategy", title: "Discovery & Strategy", description: "We start by understanding your goals, audience, and industry challenges, creating a strategy aligned with business objectives." },
            { step: "Design Phase", title: "Design Phase", description: "In the design phase, we create wireframes, prototypes, and concepts that reflect your brand and prioritize usability." },
            { step: "Development", title: "Development", description: "During development, we transform designs into functional websites, ensuring clean code, performance, scalability, and security." },
            { step: "Testing & Optimization", title: "Testing & Optimization", description: "We rigorously test for bugs, speed, and responsiveness, optimizing every element to ensure a seamless, high-performance launch." }
        ]
    },
    {
        id: "ai-mobile-apps",
        title: "AI Mobile Apps",
        description:
            "Create next-generation mobile applications with embedded AI features, providing smart, personalized interactions and seamless performance on iOS and Android.",
        image: aiAppsImg,
        tags: ["React Native", "Flutter", "Smart Features", "Cross-Platform"],
        overview: "We develop high-performance, feature-rich mobile applications that leverage the power of Artificial Intelligence to provide personalized and intuitive user experiences. From intelligent recommendations to predictive behaviors, our mobile solutions are designed to engage users and drive retention across both iOS and Android platforms.",
        features: [
            { title: "Cross-Platform", description: "Build once, run everywhere with best-in-class frameworks like Flutter and React Native for consistent performance." },
            { title: "Smart Features", description: "Integrate AI-driven features such as voice recognition, image analysis, and personalized feeds." },
            { title: "Seamless UX", description: "We prioritize fluid animations and intuitive navigation to create a delightful user journey." },
            { title: "Offline Capabilities", description: "Ensure your app remains functional even with limited or no internet connectivity." },
            { title: "Real-time Sync", description: "Keep data synchronized across all devices in real-time for improved collaboration and user experience." },
            { title: "Secure Architecture", description: "We implement industry-standard security protocols to protect user data and ensure privacy." }
        ],
        process: [
            { step: "Concept & Research", title: "Concept & Research", description: "We analyze your target market and user needs to define the core features and functionality of the app." },
            { step: "UI/UX Design", title: "UI/UX Design", description: "Our designers craft beautiful, intuitive interfaces that ensure a frictionless user experience." },
            { step: "App Development", title: "App Development", description: "We build robust, scalable mobile applications using modern frameworks and best coding practices." },
            { step: "Launch & Support", title: "Launch & Support", description: "We handle the app store submission process and provide ongoing maintenance and updates." }
        ]
    },
    {
        id: "machine-learning",
        title: "Machine Learning",
        description:
            "Harness the power of data with custom machine learning models designed to predict trends, optimize decision-making, and uncover hidden opportunities.",
        image: machineLearningImg,
        tags: ["Predictive Analytics", "Deep Learning", "Data Mining", "Neural Networks"],
        overview: "Our machine learning services empower businesses to unlock the true value of their data. We build custom algorithms and predictive models that help you anticipate market trends, optimize operations, and make data-driven decisions with confidence. From data preprocessing to model deployment, we handle the entire ML lifecycle.",
        features: [
            { title: "Predictive Analytics", description: "Forecast future trends and behaviors to make proactive business decisions." },
            { title: "Data Mining", description: "Extract valuable insights and patterns from large, complex datasets." },
            { title: "Custom Algorithms", description: "We develop tailored algorithms to solve your specific business challenges." },
            { title: "Scalable Models", description: "Our models are designed to scale with your data and infrastructure." },
            { title: "Deep Learning", description: "Utilize advanced neural networks for complex pattern recognition tasks." },
            { title: "Continuous Training", description: "We implement pipelines to continuously retrain and improve models over time." }
        ],
        process: [
            { step: "Data Assessment", title: "Data Assessment", description: "We evaluate your existing data infrastructure and identify quality data sources." },
            { step: "Model Development", title: "Model Development", description: "We design, train, and test custom machine learning models tailored to your goals." },
            { step: "Validation", title: "Validation", description: "We rigorously validate model accuracy and performance against real-world scenarios." },
            { step: "Deployment", title: "Deployment", description: "We deploy the models into your production environment and monitor performance." }
        ]
    },
    {
        id: "computer-vision",
        title: "Computer Vision",
        description:
            "Implement advanced computer vision systems that enable machines to interpret and understand visual information for automation, security, and analysis.",
        image: computerVisionImg,
        tags: ["Image Recognition", "Object Detection", "Video Analytics", "Visual AI"],
        overview: "Visual data is one of the richest sources of information. Our Computer Vision services enable your software to 'see' and interpret the world. Whether it's for quality control in manufacturing, facial recognition for security, or medical image analysis, we create robust systems that automate visual tasks with high accuracy.",
        features: [
            { title: "Object Detection", description: "Identify and locate objects within images or video streams in real-time." },
            { title: "Facial Recognition", description: "Secure and accurate facial analysis for authentication and demographics." },
            { title: "Quality Control", description: "Automated visual inspection to detect defects and ensure product quality." },
            { title: "OCR Technology", description: "Extract text from images and documents with high precision." },
            { title: "Video Analytics", description: "Analyze video feeds for security monitoring and behavioral insights." },
            { title: "3D Vision", description: "Advanced depth perception and spatial awareness for robotics and AR." }
        ],
        process: [
            { step: "Image Acquisition", title: "Image Acquisition", description: "We assist in setting up the optimal hardware and software for capturing high-quality visual data." },
            { step: "Preprocessing", title: "Preprocessing", description: "We clean and enhance images to ensure the best possible input for our algorithms." },
            { step: "Algorithm Training", title: "Algorithm Training", description: "We train specialized computer vision models on your specific dataset." },
            { step: "Integration", title: "Integration", description: "We integrate the vision system seamlessly into your existing workflow or application." }
        ]
    },
    {
        id: "automation",
        title: "Automation",
        description:
            "Drive efficiency by automating complex workflows and repetitive tasks with intelligent logic, reducing operational costs and minimizing human error.",
        image: automationImg,
        tags: ["Workflow Automation", "RPA", "Business Logic", "Optimized Processes"],
        overview: "Streamline your operations and unleash productivity with our intelligent automation solutions. We analyze your workflows to identify bottlenecks and repetitive tasks that can be automated. By implementing RPA and custom scripts, we help you reduce human error, cut costs, and free up your team to focus on high-value strategic work.",
        features: [
            { title: "Workflow Analysis", description: "Deep dive into your processes to identify high-impact automation opportunities." },
            { title: "Robotic Process Automation", description: "Deploy software bots to handle repetitive, rule-based tasks around the clock." },
            { title: "Data Integration", description: "Seamlessly connect disparate systems to ensure smooth data flow." },
            { title: "Custom Scripts", description: "Tailored scripting solutions for unique and complex automation needs." },
            { title: "Error Handling", description: "Robust mechanisms to detect and resolve exceptions automatically." },
            { title: "Reporting & Analytics", description: "Gain visibility into process performance and ROI through detailed dashboards." }
        ],
        process: [
            { step: "Process Mapping", title: "Process Mapping", description: "We map out your current workflows to visualize inefficiencies and manual touchpoints." },
            { step: "Strategy Design", title: "Strategy Design", description: "We design an automation roadmap prioritizing high-value, low-risk opportunities." },
            { step: "Implementation", title: "Implementation", description: "We build and configure the automation bots and workflows." },
            { step: "Monitoring", title: "Monitoring", description: "We provide ongoing monitoring and maintenance to ensure optimal performance." }
        ]
    },
    {
        id: "agentic-ai-chatbot",
        title: "Agentic AI & Chatbots",
        description:
            "Deploy autonomous agents and sophisticated chatbots capable of reasoning, acting, and engaging with users to provide support and execute tasks autonomously.",
        image: agenticAiImg,
        tags: ["Conversational AI", "NLP", "Autonomous Agents", "Support Bots"],
        overview: "Transform your customer engagement with next-generation AI agents and chatbots. Beyond simple QA, our solutions understand context, reason through problems, and execute tasks. Whether providing 24/7 support or acting as intelligent personal assistants, our agents deliver natural, human-like interactions that drive satisfaction.",
        features: [
            { title: "Natural Language Processing", description: "Understand complex queries and intent with advanced NLP models." },
            { title: "Context Awareness", description: "Maintain interaction history for coherent and personalized conversations." },
            { title: "Task Execution", description: "Agents can perform actions like booking appointments or retrieving order status." },
            { title: "Multi-Channel Support", description: "Deploy consistently across web, mobile, SMS, and social media platforms." },
            { title: "Sentiment Analysis", description: "Detect user emotion to adjust responses and escalate when necessary." },
            { title: "Continuous Learning", description: "The system learns from past interactions to improve accuracy over time." }
        ],
        process: [
            { step: "Use Case Definition", title: "Use Case Definition", description: "We identify the primary goals and scenarios for your AI agent." },
            { step: "Conversation Design", title: "Conversation Design", description: "We script and structure the dialogue flows for natural interaction." },
            { step: "Training & Integration", title: "Training & Integration", description: "We train the model on your knowledge base and integrate with your backend systems." },
            { step: "Refinement", title: "Refinement", description: "We analyze live interactions to fine-tune the agent's responses and capabilities." }
        ]
    },
    {
        id: "devops-deployment",
        title: "DevOps & Deployment",
        description:
            "Ensure rapid, reliable, and secure software delivery with modern DevOps practices, automated CI/CD pipelines, and scalable cloud infrastructure management.",
        image: devopsImg,
        tags: ["CI/CD Pipelines", "Docker & Kubernetes", "Cloud Infrastructure", "Site Reliability"],
        overview: "Accelerate your software delivery life cycle with our DevOps and deployment services. We bridge the gap between development and operations, implementing CI/CD pipelines, automated testing, and cloud infrastructure management. Our goal is to enable you to ship code faster, more reliably, and securely.",
        features: [
            { title: "CI/CD Pipelines", description: "Automate building, testing, and deploying to reduce manual effort and errors." },
            { title: "Infrastructure as Code", description: "Manage infrastructure using code for consistency and version control." },
            { title: "Cloud Management", description: "Expertise in AWS, Azure, and Google Cloud optimization and scaling." },
            { title: "Containerization", description: "Use Docker and Kubernetes for consistent environments and scalability." },
            { title: "Security Integration", description: "Embed security practices (DevSecOps) throughout the development pipeline." },
            { title: "Monitoring & Logging", description: "Real-time visibility into system health and performance metrics." }
        ],
        process: [
            { step: "Assessment", title: "Assessment", description: "We evaluate your current development and deployment practices." },
            { step: "Architecture Design", title: "Architecture Design", description: "We design a scalable and secure infrastructure tailored to your needs." },
            { step: "Pipeline Implementation", title: "Implement Pipelines", description: "We set up automated CI/CD workflows and infrastructure provisioning." },
            { step: "Optimization", title: "Optimization", description: "We continuously monitor and optimize for cost, performance, and security." }
        ]
    },
];
