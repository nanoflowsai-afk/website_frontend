export type AiTool = {
    id: string;
    name: string;
    description: string;
    category: "Content Creation" | "Productivity" | "Development" | "Design" | "Marketing" | "Other";
    pricing: "Free" | "Freemium" | "Paid";
    websiteUrl: string;
    imageUrl: string;
    isFeatured?: boolean;
};

export const aiTools: AiTool[] = [
    {
        id: "chatgpt",
        name: "ChatGPT",
        description: "Advanced language model for conversation, writing, and coding assistance.",
        category: "Productivity",
        pricing: "Freemium",
        websiteUrl: "https://chat.openai.com",
        imageUrl: "https://images.unsplash.com/photo-1675557009868-601047565c69?q=80&w=1000&auto=format&fit=crop",
        isFeatured: true,
    },
    {
        id: "midjourney",
        name: "Midjourney",
        description: "Generates high-quality images from textual descriptions using AI.",
        category: "Design",
        pricing: "Paid",
        websiteUrl: "https://www.midjourney.com",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        isFeatured: true,
    },
    {
        id: "jasper",
        name: "Jasper",
        description: "AI copywriting assistant for marketing content and blog posts.",
        category: "Marketing",
        pricing: "Paid",
        websiteUrl: "https://www.jasper.ai",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "github-copilot",
        name: "GitHub Copilot",
        description: "AI pair programmer that suggests code and functions in real-time.",
        category: "Development",
        pricing: "Paid",
        websiteUrl: "https://github.com/features/copilot",
        imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "canva-magic",
        name: "Canva Magic Studio",
        description: "Suite of AI design tools integrated into the Canva platform.",
        category: "Design",
        pricing: "Freemium",
        websiteUrl: "https://www.canva.com",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "notion-ai",
        name: "Notion AI",
        description: "Integrated AI assistant for summarizing, writing, and brainstorming in Notion.",
        category: "Productivity",
        pricing: "Paid",
        websiteUrl: "https://www.notion.so/product/ai",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "runway",
        name: "Runway",
        description: "AI tools for video editing, generation, and creative storytelling.",
        category: "Content Creation",
        pricing: "Freemium",
        websiteUrl: "https://runwayml.com",
        imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "synthesia",
        name: "Synthesia",
        description: "Create professional AI videos from text in multiple languages.",
        category: "Content Creation",
        pricing: "Paid",
        websiteUrl: "https://www.synthesia.io",
        imageUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1000&auto=format&fit=crop",
    },
];
