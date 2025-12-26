import { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiFetch } from "@/lib/api";
import { normalizeImageUrl } from "@/lib/images";

// Types
type HeroSlide = {
    id: number;
    heading: string;
    subHeading: string;
    tags: string[];
    backgroundImageUrl: string;
    isActive: boolean;
    displayOrder: number;
};

type About = {
    mission: string;
    vision: string;
    teamIntro: string;
    expertise: string[];
    coreValues: string[];
};

type TeamMember = {
    id: number;
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    avatarUrl: string;
    isActive: boolean;
    displayOrder: number;
};

type ProductRequest = {
    id: number;
    name: string;
    email: string;
    idea: string;
    status: "Pending" | "Reviewed" | "Completed";
    createdAt: string;
};

type BlogPost = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    isPublished: boolean;
    publishedAt: string | null;
};

type JobPosting = {
    id: number;
    title: string;
    department: string;
    type: string;
    location: string;
    description: string;
    requirements: string[];
    isActive: boolean;
    displayOrder: number;
};

type SlideInput = Omit<HeroSlide, "id">;

type Webinar = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    speaker: string;
    level: string;
    category: string;
    type: string;
    imageUrl: string;
    registeredCount: number;
    maxCapacity: number;
    isLandingPage: boolean;
    notificationActive: boolean;
    notificationText: string;
    heroTitle: string;
    heroSubtitle: string;
    heroContext: string;
    heroImage: string;
    platform: string;
    mentorName: string;
    mentorRole: string;
    mentorImage: string;
    mentorBio: string;
    roadmapItems: RoadmapItem[];
};

type RoadmapItem = {
    day: number;
    title: string;
    subtitle: string;
    highlight: string;
    description: string[]; // Manage as array of strings
    imageUrl: string;
};

type NavItem = {
    id: string;
    label: string;
    icon: React.ReactNode;
};

const parseJsonArray = (value: unknown): string[] => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string") {
        try {
            const parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }
    return [];
};

type Registration = {
    id: number;
    user: {
        id: number;
        name: string;
        email: string;
        headline?: string;
    };
    webinar: {
        id: number;
        title: string;
        date: string;
        time: string;
    };
    registeredAt: string;
    status: string;
    confirmed: boolean;
};

type AiTool = {
    id: number;
    name: string;
    description: string;
    category: string;
    pricing: string;
    websiteUrl: string;
    imageUrl: string;
    isActive: boolean;
    displayOrder: number;
};

const navItems: NavItem[] = [
    {
        id: "hero",
        label: "Hero Slides",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: "about",
        label: "About",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: "team",
        label: "Team Members",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
        ),
    },
    {
        id: "blog",
        label: "Blog Posts",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
    },
    {
        id: "careers",
        label: "Careers",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: "webinars",
        label: "Webinars",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: "registrations",
        label: "Registrations",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        id: "ai-tools",
        label: "AI Tools",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        id: "product-requests",
        label: "Product Requests",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    }
];

export default function AdminPage() {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState("hero");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    // Data States
    const [slides, setSlides] = useState<HeroSlide[]>([]);
    const [aboutData, setAboutData] = useState<About | null>(null);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [jobs, setJobs] = useState<JobPosting[]>([]);
    const [webinars, setWebinars] = useState<Webinar[]>([]);
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [aiTools, setAiTools] = useState<AiTool[]>([]);
    const [productRequests, setProductRequests] = useState<ProductRequest[]>([]);
    const [selectedWebinarFilter, setSelectedWebinarFilter] = useState<number | "all">("all");

    // Auth State
    const [isAuthed, setIsAuthed] = useState(false);

    // UI States
    const [heroError, setHeroError] = useState<string | null>(null);
    const [heroUploading, setHeroUploading] = useState(false);
    const [aboutError, setAboutError] = useState<string | null>(null);
    const [aboutSuccess, setAboutSuccess] = useState<string | null>(null);
    const [teamError, setTeamError] = useState<string | null>(null);
    const [memberUploading, setMemberUploading] = useState(false);
    const [blogError, setBlogError] = useState<string | null>(null);
    const [blogUploading, setBlogUploading] = useState(false);
    const [careersError, setCareersError] = useState<string | null>(null);
    const [webinarError, setWebinarError] = useState<string | null>(null);
    const [webinarUploading, setWebinarUploading] = useState(false);

    // Forms
    const [slideForm, setSlideForm] = useState<SlideInput>({
        heading: "",
        subHeading: "",
        tags: [],
        backgroundImageUrl: "",
        isActive: true,
        displayOrder: 0,
    });
    const [editingSlideId, setEditingSlideId] = useState<number | null>(null);

    const [aboutForm, setAboutForm] = useState({
        mission: "",
        vision: "",
        teamIntro: "",
        expertise: [] as string[],
        coreValues: [] as string[],
    });

    const [memberForm, setMemberForm] = useState({
        name: "",
        role: "",
        bio: "",
        expertise: [] as string[],
        avatarUrl: "",
        isActive: true,
        displayOrder: 0,
    });
    const [editingMemberId, setEditingMemberId] = useState<number | null>(null);

    const [postForm, setPostForm] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        imageUrl: "",
        isPublished: false,
        publishedAt: "",
    });
    const [editingPostId, setEditingPostId] = useState<number | null>(null);

    const [jobForm, setJobForm] = useState({
        title: "",
        department: "",
        type: "Full-time",
        location: "Remote",
        description: "",
        requirements: [] as string[],
        isActive: true,
        displayOrder: 0,
    });
    const [editingJobId, setEditingJobId] = useState<number | null>(null);

    const [webinarForm, setWebinarForm] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        duration: "",
        speaker: "",
        level: "Beginner",
        category: "AI Automation",
        type: "Upcoming",
        imageUrl: "",
        maxCapacity: 100,
        isLandingPage: true, // Default to true now
        notificationActive: false,
        notificationText: "",
        heroTitle: "",
        heroSubtitle: "",
        heroContext: "",
        heroImage: "",
        platform: "Zoom",
        mentorName: "",
        mentorRole: "",
        mentorImage: "",
        mentorBio: "",
        roadmapItems: [] as RoadmapItem[],
    });
    const [editingWebinarId, setEditingWebinarId] = useState<number | null>(null);

    const [aiToolForm, setAiToolForm] = useState({
        name: "",
        description: "",
        category: "AI Tools",
        pricing: "Free",
        websiteUrl: "",
        imageUrl: "",
        isActive: true,
        displayOrder: 0,
    });
    const [editingAiToolId, setEditingAiToolId] = useState<number | null>(null);
    const [aiToolError, setAiToolError] = useState<string | null>(null);
    const [aiToolUploading, setAiToolUploading] = useState(false);

    // Data Fetching Functions
    const fetchSlides = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/hero-slides", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setSlides(data.slides || []);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchAbout = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/about", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setAboutData(data.about || null);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchTeam = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/team-members", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setTeamMembers(data.members || []);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchBlog = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/blog-posts", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setPosts(data.posts || []);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchCareers = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/careers", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setJobs(data.jobs || []);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchWebinars = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/webinars", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setWebinars(data.webinars || []);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchRegistrations = useCallback(async (webinarId?: number) => {
        try {
            const query = webinarId ? `?webinarId=${webinarId}` : "";
            const res = await apiFetch(`/api/admin/registrations${query}`, { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setRegistrations(data.registrations || []);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchAiTools = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/ai-tools", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setAiTools(data.tools || []);
            }
        } catch (err) { console.error(err); }
    }, []);

    const fetchProductRequests = useCallback(async () => {
        try {
            const res = await apiFetch("/api/admin/product-requests", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setProductRequests(data.requests);
            }
        } catch (error) {
            console.error("Failed to fetch product requests", error);
        }
    }, []);

    // Initial Auth Check and Data Load
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("nano_admin_token");
            if (!token) {
                navigate("/login");
                return;
            }
            setIsAuthed(true);

            // Fetch Data
            Promise.all([
                fetchSlides(),
                fetchAbout(),
                fetchTeam(),
                fetchBlog(),
                fetchCareers(),
                fetchWebinars(),
                fetchRegistrations(),
                fetchAiTools(),
                fetchProductRequests(),
            ]).finally(() => setIsLoading(false));
        };
        checkAuth();
    }, [navigate, fetchSlides, fetchAbout, fetchTeam, fetchBlog, fetchCareers, fetchWebinars, fetchRegistrations, fetchAiTools, fetchProductRequests]);

    // Sync Forms with Data when Editing
    useEffect(() => {
        if (editingSlideId && slides.length > 0) {
            const slide = slides.find((s) => s.id === editingSlideId);
            if (slide) {
                setSlideForm({
                    heading: slide.heading,
                    subHeading: slide.subHeading,
                    tags: slide.tags,
                    backgroundImageUrl: slide.backgroundImageUrl,
                    isActive: slide.isActive,
                    displayOrder: slide.displayOrder,
                });
            }
        }
    }, [editingSlideId, slides]);

    useEffect(() => {
        if (aboutData) {
            setAboutForm({
                mission: aboutData.mission,
                vision: aboutData.vision,
                teamIntro: aboutData.teamIntro ?? "",
                expertise: parseJsonArray(aboutData.expertise),
                coreValues: parseJsonArray(aboutData.coreValues),
            });
        }
    }, [aboutData]);

    useEffect(() => {
        if (editingMemberId && teamMembers.length > 0) {
            const m = teamMembers.find((x) => x.id === editingMemberId);
            if (m) {
                setMemberForm({
                    name: m.name,
                    role: m.role,
                    bio: m.bio,
                    expertise: parseJsonArray(m.expertise),
                    avatarUrl: m.avatarUrl,
                    isActive: m.isActive,
                    displayOrder: m.displayOrder,
                });
            }
        }
    }, [editingMemberId, teamMembers]);

    useEffect(() => {
        if (editingPostId && posts.length > 0) {
            const p = posts.find((x) => x.id === editingPostId);
            if (p) {
                setPostForm({
                    title: p.title,
                    slug: p.slug,
                    excerpt: p.excerpt,
                    content: p.content,
                    imageUrl: p.imageUrl,
                    isPublished: p.isPublished,
                    publishedAt: p.publishedAt ? new Date(p.publishedAt).toISOString().slice(0, 16) : "",
                });
            }
        }
    }, [editingPostId, posts]);

    useEffect(() => {
        if (editingJobId && jobs.length > 0) {
            const j = jobs.find((x) => x.id === editingJobId);
            if (j) {
                setJobForm({
                    title: j.title,
                    department: j.department,
                    type: j.type,
                    location: j.location,
                    description: j.description,
                    requirements: parseJsonArray(j.requirements),
                    isActive: j.isActive,
                    displayOrder: j.displayOrder,
                });
            }
        }
    }, [editingJobId, jobs]);

    useEffect(() => {
        if (editingWebinarId && webinars.length > 0) {
            const w = webinars.find((x) => x.id === editingWebinarId);
            if (w) {
                setWebinarForm({
                    title: w.title,
                    description: w.description,
                    date: w.date,
                    time: w.time,
                    duration: w.duration,
                    speaker: w.speaker,
                    level: w.level,
                    category: w.category,
                    type: w.type,
                    imageUrl: w.imageUrl,
                    maxCapacity: w.maxCapacity,
                    isLandingPage: w.isLandingPage,
                    notificationActive: w.notificationActive || false,
                    notificationText: w.notificationText || "",
                    heroTitle: w.heroTitle || "",
                    heroSubtitle: w.heroSubtitle || "",
                    heroContext: w.heroContext || "",
                    heroImage: w.heroImage || "",
                    platform: w.platform || "Zoom",
                    mentorName: w.mentorName || "",
                    mentorRole: w.mentorRole || "",
                    mentorImage: w.mentorImage || "",
                    mentorBio: w.mentorBio || "",
                    roadmapItems: w.roadmapItems ? w.roadmapItems.map((r: any) => ({
                        day: r.day,
                        title: r.title,
                        subtitle: r.subtitle,
                        highlight: r.highlight,
                        description: parseJsonArray(r.description),
                        imageUrl: r.imageUrl
                    })) : [],
                });
            }
        }
    }, [editingWebinarId, webinars]);

    useEffect(() => {
        if (editingAiToolId && aiTools.length > 0) {
            const t = aiTools.find((x) => x.id === editingAiToolId);
            if (t) {
                setAiToolForm({
                    name: t.name,
                    description: t.description,
                    category: t.category,
                    pricing: t.pricing,
                    websiteUrl: t.websiteUrl,
                    imageUrl: t.imageUrl,
                    isActive: t.isActive,
                    displayOrder: t.displayOrder,
                });
            }
        }
    }, [editingAiToolId, aiTools]);


    // Handlers - Slides
    const handleSlideSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHeroError(null);
        const payload = {
            ...slideForm,
            tags: slideForm.tags.length ? slideForm.tags : ["AI", "Automation"],
            displayOrder: Number(slideForm.displayOrder),
        };
        const endpoint = editingSlideId ? `/api/admin/hero-slides/${editingSlideId}` : "/api/admin/hero-slides";
        const method = editingSlideId ? "PUT" : "POST";

        try {
            const res = await apiFetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                credentials: "include",
            });

            if (res.ok) {
                setSlideForm({ heading: "", subHeading: "", tags: [], backgroundImageUrl: "", isActive: true, displayOrder: 0 });
                setEditingSlideId(null);
                await fetchSlides();
            } else {
                const data = await res.json().catch(() => null);
                setHeroError(data?.error || "Could not save slide");
            }
        } catch (err) { setHeroError("Failed to save slide"); }
    };

    const handleHeroFile = async (file: File) => {
        setHeroUploading(true);
        setHeroError(null);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await apiFetch("/api/uploads", { method: "POST", body: formData });
            if (res.ok) {
                const json = await res.json();
                if (json.url) setSlideForm((f) => ({ ...f, backgroundImageUrl: json.url }));
            } else {
                setHeroError("Upload failed");
            }
        } catch { setHeroError("Upload error"); }
        setHeroUploading(false);
    };

    const handleDeleteSlide = async (id: number) => {
        if (!confirm("Are you sure?")) return;
        await apiFetch(`/api/admin/hero-slides/${id}`, { method: "DELETE", credentials: "include" });
        fetchSlides();
    };

    // Handlers - About
    const handleAboutSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAboutError(null);
        setAboutSuccess(null);
        try {
            const res = await apiFetch("/api/admin/about", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(aboutForm),
            });
            if (res.ok) {
                fetchAbout();
                setAboutSuccess("About content saved.");
            } else {
                const data = await res.json();
                setAboutError(data?.error || "Error saving about");
            }
        } catch { setAboutError("Failed to save"); }
    };

    // Handlers - Team
    const handleMemberSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTeamError(null);
        const payload = { ...memberForm, displayOrder: Number(memberForm.displayOrder) };
        const endpoint = editingMemberId ? `/api/admin/team-members/${editingMemberId}` : "/api/admin/team-members";
        const method = editingMemberId ? "PUT" : "POST";

        try {
            const res = await apiFetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });
            if (res.ok) {
                setMemberForm({ name: "", role: "", bio: "", expertise: [], avatarUrl: "", isActive: true, displayOrder: 0 });
                setEditingMemberId(null);
                fetchTeam();
            } else {
                const data = await res.json();
                setTeamError(data?.error || "Save failed");
            }
        } catch { setTeamError("Save error"); }
    };

    const handleMemberImageUpload = async (file: File) => {
        setMemberUploading(true);
        setTeamError(null);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await apiFetch("/api/uploads", { method: "POST", body: formData });
            if (res.ok) {
                const json = await res.json();
                if (json.url) setMemberForm(f => ({ ...f, avatarUrl: json.url }));
            } else {
                setTeamError("Upload failed");
            }
        } catch { setTeamError("Upload error"); }
        setMemberUploading(false);
    };

    const handleMemberDelete = async (id: number) => {
        if (!confirm("Delete member?")) return;
        await apiFetch(`/api/admin/team-members/${id}`, { method: "DELETE", credentials: "include" });
        fetchTeam();
    };

    // Handlers - Blog
    const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBlogError(null);
        const endpoint = editingPostId ? `/api/admin/blog-posts/${editingPostId}` : "/api/admin/blog-posts";
        const method = editingPostId ? "PUT" : "POST";
        try {
            const res = await apiFetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(postForm),
            });
            if (res.ok) {
                setPostForm({ title: "", slug: "", excerpt: "", content: "", imageUrl: "", isPublished: false, publishedAt: "" });
                setEditingPostId(null);
                fetchBlog();
            } else {
                const data = await res.json();
                setBlogError(data?.error || "Save failed");
            }
        } catch { setBlogError("Save error"); }
    };

    const handleBlogImageUpload = async (file: File) => {
        setBlogUploading(true);
        setBlogError(null);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await apiFetch("/api/uploads", { method: "POST", body: formData });
            if (res.ok) {
                const json = await res.json();
                if (json.url) setPostForm(f => ({ ...f, imageUrl: json.url }));
            } else {
                setBlogError("Upload failed");
            }
        } catch { setBlogError("Upload error"); }
        setBlogUploading(false);
    };

    const handlePostDelete = async (id: number) => {
        if (!confirm("Delete post?")) return;
        await apiFetch(`/api/admin/blog-posts/${id}`, { method: "DELETE", credentials: "include" });
        fetchBlog();
    };

    // Handlers - Careers
    const handleJobSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCareersError(null);
        const endpoint = editingJobId ? `/api/admin/careers/${editingJobId}` : "/api/admin/careers";
        const method = editingJobId ? "PUT" : "POST";
        try {
            const res = await apiFetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(jobForm),
            });
            if (res.ok) {
                setJobForm({ title: "", department: "", type: "Full-time", location: "Remote", description: "", requirements: [], isActive: true, displayOrder: 0 });
                setEditingJobId(null);
                fetchCareers();
            } else {
                const data = await res.json();
                setCareersError(data?.error || "Save failed");
            }
        } catch { setCareersError("Save error"); }
    };

    const handleJobDelete = async (id: number) => {
        if (!confirm("Delete job?")) return;
        await apiFetch(`/api/admin/careers/${id}`, { method: "DELETE", credentials: "include" });
        fetchCareers();
    };

    // Handlers - Webinars
    const handleWebinarSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setWebinarError(null);
        const endpoint = editingWebinarId ? `/api/admin/webinars/${editingWebinarId}` : "/api/admin/webinars";
        const method = editingWebinarId ? "PUT" : "POST";
        try {
            const res = await apiFetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(webinarForm),
            });
            if (res.ok) {
                setWebinarForm({
                    title: "", description: "", date: "", time: "", duration: "", speaker: "",
                    level: "Beginner", category: "AI Automation", type: "Upcoming", imageUrl: "",

                    maxCapacity: 100, isLandingPage: true,
                    notificationActive: false, notificationText: "",
                    heroTitle: "", heroSubtitle: "", heroContext: "", heroImage: "",
                    platform: "Zoom", mentorName: "", mentorRole: "", mentorImage: "", mentorBio: "",
                    roadmapItems: []
                });
                setEditingWebinarId(null);
                fetchWebinars();
            } else {
                const data = await res.json();
                setWebinarError(data?.error || "Save failed");
            }
        } catch { setWebinarError("Save error"); }
    };

    const handleWebinarImageUpload = async (file: File) => {
        setWebinarUploading(true);
        setWebinarError(null);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await apiFetch("/api/uploads", { method: "POST", body: formData });
            if (res.ok) {
                const json = await res.json();
                if (json.url) setWebinarForm(f => ({ ...f, imageUrl: json.url }));
            } else {
                setWebinarError("Upload failed");
            }
        } catch { setWebinarError("Upload error"); }
        setWebinarUploading(false);
    };

    const handleWebinarDelete = async (id: number) => {
        if (!confirm("Delete webinar?")) return;
        await apiFetch(`/api/admin/webinars/${id}`, { method: "DELETE", credentials: "include" });
        fetchWebinars();
    };

    // Handlers - AI Tools
    const handleAiToolSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAiToolError(null);
        const endpoint = editingAiToolId ? `/api/admin/ai-tools/${editingAiToolId}` : "/api/admin/ai-tools";
        const method = editingAiToolId ? "PUT" : "POST";
        try {
            const res = await apiFetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(aiToolForm),
            });
            if (res.ok) {
                setAiToolForm({
                    name: "", description: "", category: "AI Tools", pricing: "Free",
                    websiteUrl: "", imageUrl: "", isActive: true, displayOrder: 0
                });
                setEditingAiToolId(null);
                fetchAiTools();
            } else {
                const data = await res.json();
                setAiToolError(data?.error || "Save failed");
            }
        } catch { setAiToolError("Save error"); }
    };

    const handleAiToolImageUpload = async (file: File) => {
        setAiToolUploading(true);
        setAiToolError(null);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await apiFetch("/api/uploads", { method: "POST", body: formData });
            if (res.ok) {
                const json = await res.json();
                if (json.url) setAiToolForm(f => ({ ...f, imageUrl: json.url }));
            } else {
                setAiToolError("Upload failed");
            }
        } catch { setAiToolError("Upload error"); }
        setAiToolUploading(false);
    };

    const handleAiToolDelete = async (id: number) => {
        if (!confirm("Delete this AI tool?")) return;
        try {
            const res = await apiFetch(`/api/admin/ai-tools/${id}`, { method: "DELETE", credentials: "include" });
            if (res.ok) {
                setAiTools(prev => prev.filter(t => t.id !== id));
            }
        } catch (error) {
            console.error("Delete failed", error);
            setAiToolError("Failed to delete tool");
        }
    };

    // --- Product Request Handlers ---
    const handleRequestStatusUpdate = async (id: number, status: ProductRequest["status"]) => {
        try {
            const res = await apiFetch(`/api/admin/product-requests/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ status }),
            });
            if (res.ok) {
                fetchProductRequests();
            }
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    const handleRequestDelete = async (id: number) => {
        if (!confirm("Delete this request?")) return;
        try {
            const res = await apiFetch(`/api/admin/product-requests/${id}`, { method: "DELETE", credentials: "include" });
            if (res.ok) {
                setProductRequests(prev => prev.filter(r => r.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete request", error);
        }
    };


    const sortedSlides = useMemo(
        () => [...slides].sort((a, b) => a.displayOrder - b.displayOrder),
        [slides]
    );

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (!isAuthed) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-slate-900 transition-all duration-300 flex flex-col fixed h-full z-20`}>
                <div className="p-6 border-b border-slate-700">
                    <Link to="/" className="flex items-center gap-3">
                        {sidebarOpen ? (
                            <img src="/nanoflows-logo.png" alt="NanoFlows" className="h-8 w-auto brightness-0 invert" />
                        ) : (
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold">N</div>
                        )}
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeSection === item.id
                                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                }`}
                        >
                            {item.icon}
                            {sidebarOpen && <span className="font-medium">{item.label}</span>}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-700">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition"
                    >
                        <svg className={`w-5 h-5 transition-transform ${sidebarOpen ? "" : "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                        {sidebarOpen && <span className="text-sm">Collapse</span>}
                    </button>
                </div>
            </aside>

            <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
                <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {navItems.find((n) => n.id === activeSection)?.label}
                            </h1>
                            <p className="text-sm text-gray-500">Manage your website content</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/" className="text-sm text-gray-600 hover:text-orange-600 transition">View Site</Link>
                            <button
                                onClick={async () => {
                                    try {
                                        await apiFetch("/api/admin/logout", { method: "POST", credentials: "include" });
                                    } catch { }
                                    localStorage.removeItem("nano_admin_token");
                                    navigate("/login");
                                }}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600 transition"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto">
                    {activeSection === "hero" && (
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">{editingSlideId ? "Edit Slide" : "Create New Slide"}</h3>
                                <form onSubmit={handleSlideSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                                            <input value={slideForm.heading} onChange={(e) => setSlideForm((f) => ({ ...f, heading: e.target.value }))} placeholder="Enter heading" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                                            <input value={slideForm.tags.join(", ")} onChange={(e) => setSlideForm((f) => ({ ...f, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) }))} placeholder="AI, Automation" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Sub Heading</label>
                                        <textarea value={slideForm.subHeading} onChange={(e) => setSlideForm((f) => ({ ...f, subHeading: e.target.value }))} placeholder="Enter sub heading" rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
                                        <input value={slideForm.backgroundImageUrl} onChange={(e) => setSlideForm((f) => ({ ...f, backgroundImageUrl: e.target.value }))} placeholder="https://..." className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-medium text-gray-700">Or upload image:</label>
                                        <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleHeroFile(f); }} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                        {heroUploading && <span className="text-sm text-orange-600">Uploading...</span>}
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked={slideForm.isActive} onChange={(e) => setSlideForm((f) => ({ ...f, isActive: e.target.checked }))} className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                            <span className="text-sm text-gray-700">Active</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <label className="text-sm text-gray-700">Order:</label>
                                            <input type="number" value={slideForm.displayOrder} onChange={(e) => setSlideForm((f) => ({ ...f, displayOrder: Number(e.target.value) }))} className="w-20 rounded-lg border border-gray-200 px-3 py-2 text-center" />
                                        </div>
                                    </div>
                                    {heroError && <p className="text-sm text-red-600">{heroError}</p>}
                                    <div className="flex gap-3 pt-2">
                                        <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-orange-500/25">{editingSlideId ? "Save Changes" : "Create Slide"}</button>
                                        {editingSlideId && <button type="button" onClick={() => { setEditingSlideId(null); setSlideForm({ heading: "", subHeading: "", tags: [], backgroundImageUrl: "", isActive: true, displayOrder: 0 }); }} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition">Cancel</button>}
                                    </div>
                                </form>
                            </div>
                            <div className="grid gap-4">
                                {sortedSlides.map((slide) => (
                                    <div key={slide.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row md:items-center gap-6">
                                        <div
                                            className="w-32 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border border-gray-200"
                                            style={{ backgroundImage: `url(${normalizeImageUrl(slide.backgroundImageUrl)})` }}
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${slide.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{slide.isActive ? "Active" : "Inactive"}</span>
                                                <span className="text-xs text-gray-500">Order: {slide.displayOrder}</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900">{slide.heading}</h4>
                                            <p className="text-sm text-gray-600 line-clamp-1 mt-1">{slide.subHeading}</p>
                                            <div className="flex flex-wrap gap-1 mt-2">{(Array.isArray(slide.tags) ? slide.tags : []).map((t) => (<span key={t} className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs">{t}</span>))}</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => setEditingSlideId(slide.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600 transition text-sm">Edit</button>
                                            <button onClick={() => handleDeleteSlide(slide.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600 transition text-sm">Delete</button>
                                        </div>
                                    </div>
                                ))}
                                {!sortedSlides.length && <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">No slides yet. Create one above.</div>}
                            </div>
                        </div>
                    )}

                    {activeSection === "about" && (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <form onSubmit={handleAboutSave} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mission</label>
                                    <textarea value={aboutForm.mission} onChange={(e) => setAboutForm((f) => ({ ...f, mission: e.target.value }))} rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Vision</label>
                                    <textarea value={aboutForm.vision} onChange={(e) => setAboutForm((f) => ({ ...f, vision: e.target.value }))} rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Core Values (comma separated)</label>
                                    <input value={(Array.isArray(aboutForm.coreValues) ? aboutForm.coreValues : []).join(", ")} onChange={(e) => setAboutForm((f) => ({ ...f, coreValues: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" placeholder="Innovation, Excellence, Integrity" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Expertise (comma separated)</label>
                                    <input value={(Array.isArray(aboutForm.expertise) ? aboutForm.expertise : []).join(", ")} onChange={(e) => setAboutForm((f) => ({ ...f, expertise: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                </div>
                                {aboutError && <p className="text-sm text-red-600">{aboutError}</p>}
                                {aboutSuccess && <p className="text-sm text-green-600">{aboutSuccess}</p>}
                                <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-orange-500/25">Save About</button>
                            </form>
                        </div>
                    )}

                    {activeSection === "team" && (
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">{editingMemberId ? "Edit Member" : "Add Team Member"}</h3>
                                <form onSubmit={handleMemberSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                            <input value={memberForm.name} onChange={(e) => setMemberForm((f) => ({ ...f, name: e.target.value }))} placeholder="John Doe" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                            <input value={memberForm.role} onChange={(e) => setMemberForm((f) => ({ ...f, role: e.target.value }))} placeholder="CEO & Founder" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                                        <textarea value={memberForm.bio} onChange={(e) => setMemberForm((f) => ({ ...f, bio: e.target.value }))} rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Expertise (comma separated)</label>
                                        <input value={(Array.isArray(memberForm.expertise) ? memberForm.expertise : []).join(", ")} onChange={(e) => setMemberForm((f) => ({ ...f, expertise: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Avatar URL (optional)</label>
                                        <input value={memberForm.avatarUrl} onChange={(e) => setMemberForm((f) => ({ ...f, avatarUrl: e.target.value }))} placeholder="https://..." className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-medium text-gray-700">Or upload:</label>
                                        <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleMemberImageUpload(f); }} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                        {memberUploading && <span className="text-sm text-orange-600">Uploading...</span>}
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked={memberForm.isActive} onChange={(e) => setMemberForm((f) => ({ ...f, isActive: e.target.checked }))} className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                            <span className="text-sm text-gray-700">Active</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <label className="text-sm text-gray-700">Order:</label>
                                            <input type="number" value={memberForm.displayOrder} onChange={(e) => setMemberForm((f) => ({ ...f, displayOrder: Number(e.target.value) }))} className="w-20 rounded-lg border border-gray-200 px-3 py-2 text-center" />
                                        </div>
                                    </div>
                                    {teamError && <p className="text-sm text-red-600">{teamError}</p>}
                                    <div className="flex gap-3 pt-2">
                                        <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-orange-500/25">{editingMemberId ? "Save Changes" : "Add Member"}</button>
                                        {editingMemberId && <button type="button" onClick={() => { setEditingMemberId(null); setMemberForm({ name: "", role: "", bio: "", expertise: [], avatarUrl: "", isActive: true, displayOrder: 0 }); }} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition">Cancel</button>}
                                    </div>
                                </form>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                {teamMembers.map((m) => (
                                    <div key={m.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-orange-200"
                                                style={{ backgroundImage: `url(${normalizeImageUrl(m.avatarUrl)})` }}
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{m.name}</h4>
                                                <p className="text-sm text-orange-600">{m.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{m.bio}</p>
                                        <div className="flex flex-wrap gap-1 mb-4">{parseJsonArray(m.expertise).map((e) => (<span key={e} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">{e}</span>))}</div>
                                        <div className="flex gap-2">
                                            <button onClick={() => setEditingMemberId(m.id)} className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600 transition text-sm">Edit</button>
                                            <button onClick={() => handleMemberDelete(m.id)} className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600 transition text-sm">Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === "blog" && (
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">{editingPostId ? "Edit Post" : "Create New Post"}</h3>
                                <form onSubmit={handlePostSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                            <input value={postForm.title} onChange={(e) => setPostForm((f) => ({ ...f, title: e.target.value }))} placeholder="Post title" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                                            <input value={postForm.slug} onChange={(e) => setPostForm((f) => ({ ...f, slug: e.target.value }))} placeholder="post-slug" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                                        <textarea value={postForm.excerpt} onChange={(e) => setPostForm((f) => ({ ...f, excerpt: e.target.value }))} rows={2} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                                        <textarea value={postForm.content} onChange={(e) => setPostForm((f) => ({ ...f, content: e.target.value }))} rows={8} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                                        <input value={postForm.imageUrl} onChange={(e) => setPostForm((f) => ({ ...f, imageUrl: e.target.value }))} placeholder="https://..." className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-medium text-gray-700">Or upload:</label>
                                        <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleBlogImageUpload(f); }} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                        {blogUploading && <span className="text-sm text-orange-600">Uploading...</span>}
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked={postForm.isPublished} onChange={(e) => setPostForm((f) => ({ ...f, isPublished: e.target.checked }))} className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                            <span className="text-sm text-gray-700">Published</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <label className="text-sm text-gray-700">Publish Date:</label>
                                            <input type="datetime-local" value={postForm.publishedAt} onChange={(e) => setPostForm((f) => ({ ...f, publishedAt: e.target.value }))} className="rounded-lg border border-gray-200 px-3 py-2 text-sm" />
                                        </div>
                                    </div>
                                    {blogError && <p className="text-sm text-red-600">{blogError}</p>}
                                    <div className="flex gap-3 pt-2">
                                        <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-orange-500/25">{editingPostId ? "Save Changes" : "Create Post"}</button>
                                        {editingPostId && <button type="button" onClick={() => { setEditingPostId(null); setPostForm({ title: "", slug: "", excerpt: "", content: "", imageUrl: "", isPublished: false, publishedAt: "" }); }} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition">Cancel</button>}
                                    </div>
                                </form>
                            </div>
                            <div className="grid gap-4">
                                {posts.map((p) => (
                                    <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row md:items-center gap-6">
                                        <div
                                            className="w-32 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border border-gray-200"
                                            style={{ backgroundImage: `url(${normalizeImageUrl(p.imageUrl)})` }}
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${p.isPublished ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{p.isPublished ? "Published" : "Draft"}</span>
                                                {p.publishedAt && <span className="text-xs text-gray-500">{new Date(p.publishedAt).toLocaleDateString()}</span>}
                                            </div>
                                            <h4 className="font-semibold text-gray-900">{p.title}</h4>
                                            <p className="text-sm text-gray-600 line-clamp-1 mt-1">{p.excerpt}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => setEditingPostId(p.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600 transition text-sm">Edit</button>
                                            <button onClick={() => handlePostDelete(p.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600 transition text-sm">Delete</button>
                                        </div>
                                    </div>
                                ))}
                                {!posts.length && <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">No posts yet. Create one above.</div>}
                            </div>
                        </div>
                    )}

                    {activeSection === "careers" && (
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">{editingJobId ? "Edit Job Posting" : "Add New Job Posting"}</h3>
                                <form onSubmit={handleJobSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                                            <input value={jobForm.title} onChange={(e) => setJobForm((f) => ({ ...f, title: e.target.value }))} placeholder="AI/ML Engineer" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                                            <input value={jobForm.department} onChange={(e) => setJobForm((f) => ({ ...f, department: e.target.value }))} placeholder="Engineering" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                                            <select value={jobForm.type} onChange={(e) => setJobForm((f) => ({ ...f, type: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition">
                                                <option value="Full-time">Full-time</option>
                                                <option value="Part-time">Part-time</option>
                                                <option value="Contract">Contract</option>
                                                <option value="Internship">Internship</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                            <input value={jobForm.location} onChange={(e) => setJobForm((f) => ({ ...f, location: e.target.value }))} placeholder="Remote" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea value={jobForm.description} onChange={(e) => setJobForm((f) => ({ ...f, description: e.target.value }))} rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Requirements (comma separated)</label>
                                        <input value={(Array.isArray(jobForm.requirements) ? jobForm.requirements : []).join(", ")} onChange={(e) => setJobForm((f) => ({ ...f, requirements: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" placeholder="3+ years experience, Python, Machine Learning" />
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked={jobForm.isActive} onChange={(e) => setJobForm((f) => ({ ...f, isActive: e.target.checked }))} className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                            <span className="text-sm text-gray-700">Active</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <label className="text-sm text-gray-700">Display Order:</label>
                                            <input type="number" value={jobForm.displayOrder} onChange={(e) => setJobForm((f) => ({ ...f, displayOrder: Number(e.target.value) }))} className="w-20 rounded-lg border border-gray-200 px-3 py-2 text-center" />
                                        </div>
                                    </div>
                                    {careersError && <p className="text-sm text-red-600">{careersError}</p>}
                                    <div className="flex gap-3 pt-2">
                                        <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-orange-500/25">{editingJobId ? "Save Changes" : "Add Job"}</button>
                                        {editingJobId && <button type="button" onClick={() => { setEditingJobId(null); setJobForm({ title: "", department: "", type: "Full-time", location: "Remote", description: "", requirements: [], isActive: true, displayOrder: 0 }); }} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition">Cancel</button>}
                                    </div>
                                </form>
                            </div>
                            <div className="grid gap-4">
                                {jobs.map((j) => (
                                    <div key={j.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${j.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{j.isActive ? "Active" : "Inactive"}</span>
                                                <span className="text-xs text-gray-500">Order: {j.displayOrder}</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900">{j.title}</h4>
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                                                <span>{j.department}</span>
                                                <span>•</span>
                                                <span>{j.type}</span>
                                                <span>•</span>
                                                <span>{j.location}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 line-clamp-2 mt-2">{j.description}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => setEditingJobId(j.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600 transition text-sm">Edit</button>
                                            <button onClick={() => handleJobDelete(j.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600 transition text-sm">Delete</button>
                                        </div>
                                    </div>
                                ))}
                                {!jobs.length && <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">No job postings yet. Create one above.</div>}
                            </div>
                        </div>
                    )}

                    {activeSection === "webinars" && (
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">{editingWebinarId ? "Edit Webinar" : "Create Webinar"}</h3>
                                <form onSubmit={handleWebinarSubmit} className="space-y-4">
                                    <div className="space-y-8">
                                        {/* Basic Details */}
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                            <h4 className="font-semibold text-gray-900 mb-4">Basic Details</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                                    <input value={webinarForm.title} onChange={(e) => setWebinarForm((f) => ({ ...f, title: e.target.value }))} placeholder="Webinar Title" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Speaker</label>
                                                    <input value={webinarForm.speaker} onChange={(e) => setWebinarForm((f) => ({ ...f, speaker: e.target.value }))} placeholder="Speaker Name" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                                    <input value={webinarForm.date} onChange={(e) => setWebinarForm((f) => ({ ...f, date: e.target.value }))} placeholder="Dec 25, 2025" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                                                    <input value={webinarForm.time} onChange={(e) => setWebinarForm((f) => ({ ...f, time: e.target.value }))} placeholder="3:30 PM IST" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                                                    <input value={webinarForm.duration} onChange={(e) => setWebinarForm((f) => ({ ...f, duration: e.target.value }))} placeholder="60 Minutes" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                                                    <select value={webinarForm.level} onChange={(e) => setWebinarForm((f) => ({ ...f, level: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition bg-white">
                                                        <option>Beginner</option>
                                                        <option>Intermediate</option>
                                                        <option>Advanced</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                                    <select value={webinarForm.category} onChange={(e) => setWebinarForm((f) => ({ ...f, category: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition bg-white">
                                                        <option>AI Automation</option>
                                                        <option>AI Agents</option>
                                                        <option>Marketing AI</option>
                                                        <option>Business AI</option>
                                                        <option>Workshops</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                                                    <select value={webinarForm.type} onChange={(e) => setWebinarForm((f) => ({ ...f, type: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition bg-white">
                                                        <option>Upcoming</option>
                                                        <option>Live</option>
                                                        <option>Recorded</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Capacity</label>
                                                    <input type="number" value={webinarForm.maxCapacity} onChange={(e) => setWebinarForm((f) => ({ ...f, maxCapacity: Number(e.target.value) }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                                                    <input value={webinarForm.platform} onChange={(e) => setWebinarForm((f) => ({ ...f, platform: e.target.value }))} placeholder="Zoom / YouTube" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Notification Bar */}
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                            <h4 className="font-semibold text-gray-900 mb-4">Notification Bar</h4>
                                            <div className="grid grid-cols-1 gap-4">
                                                <div className="flex items-center gap-2">
                                                    <input type="checkbox" checked={webinarForm.notificationActive} onChange={(e) => setWebinarForm((f) => ({ ...f, notificationActive: e.target.checked }))} className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                                    <span className="text-sm text-gray-700">Show Notification Bar</span>
                                                </div>
                                                {webinarForm.notificationActive && (
                                                    <input value={webinarForm.notificationText} onChange={(e) => setWebinarForm((f) => ({ ...f, notificationText: e.target.value }))} placeholder="⚡ 3 Days One Man Business Automation Event!" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Hero Section */}
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                            <h4 className="font-semibold text-gray-900 mb-4">Hero Section</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="md:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hero Main Title</label>
                                                    <input value={webinarForm.heroTitle} onChange={(e) => setWebinarForm((f) => ({ ...f, heroTitle: e.target.value }))} placeholder="Automate Business Save Lakhs" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
                                                    <input value={webinarForm.heroSubtitle} onChange={(e) => setWebinarForm((f) => ({ ...f, heroSubtitle: e.target.value }))} placeholder="Get 12+ AI AGENTS Work For You" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Context (Top text)</label>
                                                    <input value={webinarForm.heroContext} onChange={(e) => setWebinarForm((f) => ({ ...f, heroContext: e.target.value }))} placeholder="(Telugu States Biggest Business AI Agents Event)" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image URL</label>
                                                    <input value={webinarForm.heroImage} onChange={(e) => setWebinarForm((f) => ({ ...f, heroImage: e.target.value }))} placeholder="https://..." className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div className="flex items-center gap-4 pt-6">
                                                    <label className="text-sm font-medium text-gray-700">Or upload:</label>
                                                    <input type="file" accept="image/*" onChange={async (e) => {
                                                        const f = e.target.files?.[0];
                                                        if (f) {
                                                            const fd = new FormData(); fd.append("file", f);
                                                            try {
                                                                const res = await apiFetch("/api/uploads", { method: "POST", body: fd });
                                                                if (res.ok) {
                                                                    const j = await res.json();
                                                                    setWebinarForm(prev => ({ ...prev, heroImage: j.url }));
                                                                }
                                                            } catch { }
                                                        }
                                                    }} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Roadmap */}
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                            <h4 className="font-semibold text-gray-900 mb-4">Event Roadmap (3 Days)</h4>
                                            <div className="space-y-4">
                                                {[1, 2, 3].map(day => {
                                                    const existing = webinarForm.roadmapItems.find(r => r.day === day) || { day, title: "", subtitle: "", highlight: "", description: [], imageUrl: "" };
                                                    const updateItem = (updates: any) => {
                                                        setWebinarForm(prev => ({
                                                            ...prev,
                                                            roadmapItems: [
                                                                ...prev.roadmapItems.filter(r => r.day !== day),
                                                                { ...existing, ...updates }
                                                            ]
                                                        }));
                                                    };

                                                    return (
                                                        <div key={day} className="p-4 border border-gray-200 rounded-lg bg-white">
                                                            <h5 className="font-bold text-gray-700 mb-2">Day {day}</h5>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                <input value={existing.title} onChange={e => updateItem({ title: e.target.value })} placeholder="Title (e.g., Business Growth)" className="w-full p-2 border rounded" />
                                                                <input value={existing.subtitle} onChange={e => updateItem({ subtitle: e.target.value })} placeholder="Subtitle (e.g., Setup & Management)" className="w-full p-2 border rounded" />
                                                                <input value={existing.highlight} onChange={e => updateItem({ highlight: e.target.value })} placeholder="Highlight (e.g., Install Top 1% Business Model)" className="w-full p-2 border rounded" />
                                                                <div className="md:col-span-2 space-y-2">
                                                                    <div className="flex gap-2">
                                                                        <input value={existing.imageUrl} onChange={e => updateItem({ imageUrl: e.target.value })} placeholder="Image URL" className="flex-1 p-2 border rounded" />
                                                                        <input type="file" accept="image/*" onChange={async (e) => {
                                                                            const f = e.target.files?.[0];
                                                                            if (f) {
                                                                                const fd = new FormData(); fd.append("file", f);
                                                                                try {
                                                                                    const res = await apiFetch("/api/uploads", { method: "POST", body: fd });
                                                                                    if (res.ok) {
                                                                                        const j = await res.json();
                                                                                        updateItem({ imageUrl: j.url });
                                                                                    }
                                                                                } catch { }
                                                                            }
                                                                        }} className="block w-auto text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                                                    </div>
                                                                </div>
                                                                <div className="md:col-span-2">
                                                                    <input value={existing.description.join(", ")} onChange={e => updateItem({ description: e.target.value.split(",").map(s => s.trim()) })} placeholder="Checklist items (comma separated)" className="w-full p-2 border rounded" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Mentor */}
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                            <h4 className="font-semibold text-gray-900 mb-4">Mentor Details</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                                    <input value={webinarForm.mentorName} onChange={(e) => setWebinarForm((f) => ({ ...f, mentorName: e.target.value }))} placeholder="Digital Chandu" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                                    <input value={webinarForm.mentorRole} onChange={(e) => setWebinarForm((f) => ({ ...f, mentorRole: e.target.value }))} placeholder="Founder & Host" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                                                    <textarea value={webinarForm.mentorBio} onChange={(e) => setWebinarForm((f) => ({ ...f, mentorBio: e.target.value }))} rows={3} placeholder="Bio..." className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mentor Image URL</label>
                                                    <input value={webinarForm.mentorImage} onChange={(e) => setWebinarForm((f) => ({ ...f, mentorImage: e.target.value }))} placeholder="https://..." className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" />
                                                </div>
                                                <div className="flex items-center gap-4 pt-6">
                                                    <label className="text-sm font-medium text-gray-700">Or upload:</label>
                                                    <input type="file" accept="image/*" onChange={async (e) => {
                                                        const f = e.target.files?.[0];
                                                        if (f) {
                                                            const fd = new FormData(); fd.append("file", f);
                                                            try {
                                                                const res = await apiFetch("/api/uploads", { method: "POST", body: fd });
                                                                if (res.ok) {
                                                                    const j = await res.json();
                                                                    setWebinarForm(prev => ({ ...prev, mentorImage: j.url }));
                                                                }
                                                            } catch { }
                                                        }
                                                    }} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description (Common) */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">General Description</label>
                                            <textarea value={webinarForm.description} onChange={(e) => setWebinarForm((f) => ({ ...f, description: e.target.value }))} rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">List Card Image URL</label>
                                            <input value={webinarForm.imageUrl} onChange={(e) => setWebinarForm((f) => ({ ...f, imageUrl: e.target.value }))} placeholder="https://..." className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" required />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <label className="text-sm font-medium text-gray-700">Or upload:</label>
                                            <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleWebinarImageUpload(f); }} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                            {webinarUploading && <span className="text-sm text-orange-600">Uploading...</span>}
                                        </div>

                                        {webinarError && <p className="text-sm text-red-600">{webinarError}</p>}

                                        <div className="flex gap-3 pt-2">
                                            <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-orange-500/25">{editingWebinarId ? "Save Changes" : "Create Webinar"}</button>
                                            {editingWebinarId && <button type="button" onClick={() => { setEditingWebinarId(null); setWebinarForm({ title: "", description: "", date: "", time: "", duration: "", speaker: "", level: "Beginner", category: "AI Automation", type: "Upcoming", imageUrl: "", maxCapacity: 100, isLandingPage: false, notificationActive: false, notificationText: "", heroTitle: "", heroSubtitle: "", heroContext: "", heroImage: "", platform: "Zoom", mentorName: "", mentorRole: "", mentorImage: "", mentorBio: "", roadmapItems: [] }); }} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition">Cancel</button>}
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="grid gap-4">
                                {webinars.map((webinar) => (
                                    <div key={webinar.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row md:items-center gap-6">
                                        <div
                                            className="w-32 h-20 rounded-xl bg-cover bg-center flex-shrink-0 border border-gray-200"
                                            style={{ backgroundImage: `url(${normalizeImageUrl(webinar.imageUrl)})` }}
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${webinar.type === "Live" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{webinar.type}</span>
                                                <span className="text-xs text-gray-500">{webinar.date} at {webinar.time}</span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900">{webinar.title}</h4>
                                            <p className="text-sm text-gray-600 line-clamp-1 mt-1">{webinar.description}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => setEditingWebinarId(webinar.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600 transition text-sm">Edit</button>
                                            <button onClick={() => handleWebinarDelete(webinar.id)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600 transition text-sm">Delete</button>
                                        </div>
                                    </div>
                                ))}
                                {!webinars.length && <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">No webinars yet. Create one above.</div>}
                            </div>
                        </div>
                    )}

                    {/* AI TOOLS SECTION */}
                    {activeSection === "ai-tools" && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Manage AI Tools</h2>
                                <p className="text-gray-500">Add, edit, or remove tools from the database</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Form */}
                                <form onSubmit={handleAiToolSubmit} className="lg:col-span-1">
                                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                                        <h3 className="font-bold text-gray-900 mb-4">{editingAiToolId ? "Edit Tool" : "Add New Tool"}</h3>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Tool Name</label>
                                            <input value={aiToolForm.name} onChange={(e) => setAiToolForm(f => ({ ...f, name: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" placeholder="e.g. ChatGPT" required />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                            <select value={aiToolForm.category} onChange={(e) => setAiToolForm(f => ({ ...f, category: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition">
                                                <option value="AI Tools">AI Tools</option>
                                                <option value="Automation & Workflows">Automation & Workflows</option>
                                                <option value="Webinars & Learning">Webinars & Learning</option>
                                                <option value="Business AI Solutions">Business AI Solutions</option>
                                                <option value="Custom AI Development">Custom AI Development</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Pricing</label>
                                            <select value={aiToolForm.pricing} onChange={(e) => setAiToolForm(f => ({ ...f, pricing: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition">
                                                <option value="Free">Free</option>
                                                <option value="Freemium">Freemium</option>
                                                <option value="Paid">Paid</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                            <input value={aiToolForm.websiteUrl} onChange={(e) => setAiToolForm(f => ({ ...f, websiteUrl: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition" placeholder="https://..." required />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                            <textarea value={aiToolForm.description} onChange={(e) => setAiToolForm(f => ({ ...f, description: e.target.value }))} rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none" required placeholder="Short description..." />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Tool Image</label>
                                            <input value={aiToolForm.imageUrl} onChange={(e) => setAiToolForm(f => ({ ...f, imageUrl: e.target.value }))} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition mb-2" placeholder="Image URL" required />
                                            <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleAiToolImageUpload(f); }} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition" />
                                            {aiToolUploading && <span className="text-sm text-orange-600">Uploading...</span>}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" checked={aiToolForm.isActive} onChange={(e) => setAiToolForm(f => ({ ...f, isActive: e.target.checked }))} className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                                            <label className="text-sm font-medium text-gray-700">Active</label>
                                        </div>

                                        {aiToolError && <p className="text-sm text-red-600">{aiToolError}</p>}

                                        <div className="flex gap-2 pt-2">
                                            <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition">
                                                {editingAiToolId ? "Update Tool" : "Add Tool"}
                                            </button>
                                            {editingAiToolId && (
                                                <button type="button" onClick={() => { setEditingAiToolId(null); setAiToolForm({ name: "", category: "AI Tools", pricing: "Free", websiteUrl: "", description: "", imageUrl: "", isActive: true, displayOrder: 0 }); }} className="px-4 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition">
                                                    Cancel
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>

                                {/* List */}
                                <div className="lg:col-span-2 space-y-4">
                                    {aiTools.map((tool) => (
                                        <div key={tool.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                            <div className="w-20 h-20 rounded-xl bg-white flex-shrink-0 bg-contain bg-center bg-no-repeat border border-gray-200" style={{ backgroundImage: `url(${normalizeImageUrl(tool.imageUrl)})` }} />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-gray-900 truncate">{tool.name}</h4>
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${tool.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{tool.isActive ? "Active" : "Inactive"}</span>
                                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700 uppercase">{tool.pricing}</span>
                                                </div>
                                                <p className="text-xs text-orange-500 font-semibold mb-1">{tool.category}</p>
                                                <p className="text-xs text-gray-600 line-clamp-1">{tool.description}</p>
                                                <a href={tool.websiteUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline mt-1 block truncate">{tool.websiteUrl}</a>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => setEditingAiToolId(tool.id)} className="p-2 text-gray-400 hover:text-orange-500 transition">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                                </button>
                                                <button onClick={() => handleAiToolDelete(tool.id)} className="p-2 text-gray-400 hover:text-red-500 transition">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    {aiTools.length === 0 && <div className="text-center py-10 text-gray-500">No tools found.</div>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* REGISTRATIONS SECTION */}
                    {activeSection === "registrations" && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Event Registrations</h2>
                                <p className="text-gray-500">View and manage webinar signups</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="w-full md:w-1/3">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Webinar</label>
                                        <select
                                            value={selectedWebinarFilter}
                                            onChange={(e) => {
                                                const val = e.target.value === "all" ? "all" : Number(e.target.value);
                                                setSelectedWebinarFilter(val);
                                                fetchRegistrations(val === "all" ? undefined : val);
                                            }}
                                            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:border-orange-500 transition cursor-pointer"
                                        >
                                            <option value="all">All Webinars</option>
                                            {webinars.map(w => (
                                                <option key={w.id} value={w.id}>{w.title} ({w.date})</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                            Total: {registrations.length}
                                        </div>
                                        <button
                                            onClick={() => fetchRegistrations(selectedWebinarFilter === "all" ? undefined : selectedWebinarFilter)}
                                            className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
                                        >
                                            🔄
                                        </button>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-600">
                                        <thead className="bg-gray-50 border-b border-gray-200 font-medium text-gray-900">
                                            <tr>
                                                <th className="px-4 py-3">User</th>
                                                <th className="px-4 py-3">Email</th>
                                                <th className="px-4 py-3">Webinar</th>
                                                <th className="px-4 py-3">Date</th>
                                                <th className="px-4 py-3">Registered At</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {registrations.length === 0 ? (
                                                <tr>
                                                    <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                                                        No registrations found.
                                                    </td>
                                                </tr>
                                            ) : (
                                                registrations.map((reg) => (
                                                    <tr key={reg.id} className="hover:bg-gray-50 transition">
                                                        <td className="px-4 py-3 font-medium text-gray-900">{reg.user.name}</td>
                                                        <td className="px-4 py-3">{reg.user.email}</td>
                                                        <td className="px-4 py-3">
                                                            <div className="font-medium text-gray-900">{reg.webinar.title}</div>
                                                            <div className="text-xs text-gray-400">{reg.webinar.date} • {reg.webinar.time}</div>
                                                        </td>
                                                        <td className="px-4 py-3">{reg.webinar.date}</td>
                                                        <td className="px-4 py-3 text-xs text-gray-400">
                                                            {new Date(reg.registeredAt).toLocaleDateString()} {new Date(reg.registeredAt).toLocaleTimeString()}
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* PRODUCT REQUESTS SECTION */}
                    {activeSection === "product-requests" && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Product Requests</h2>
                                <p className="text-gray-500">Manage user product ideas and requests</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                            Total: {productRequests.length}
                                        </div>
                                        <button
                                            onClick={fetchProductRequests}
                                            className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
                                            title="Refresh"
                                        >
                                            🔄
                                        </button>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-600">
                                        <thead className="bg-gray-50 border-b border-gray-200 font-medium text-gray-900">
                                            <tr>
                                                <th className="px-6 py-4">User</th>
                                                <th className="px-6 py-4">Product Idea</th>
                                                <th className="px-6 py-4">Status</th>
                                                <th className="px-6 py-4">Date</th>
                                                <th className="px-6 py-4 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {productRequests.length === 0 ? (
                                                <tr>
                                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                                        No requests found.
                                                    </td>
                                                </tr>
                                            ) : (
                                                productRequests.map((request) => (
                                                    <tr key={request.id} className="hover:bg-gray-50 transition">
                                                        <td className="px-6 py-4">
                                                            <div className="font-bold text-gray-900">{request.name}</div>
                                                            <div className="text-xs text-gray-500">{request.email}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="line-clamp-2 max-w-xs" title={request.idea}>{request.idea}</p>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <select
                                                                value={request.status}
                                                                onChange={(e) => handleRequestStatusUpdate(request.id, e.target.value as any)}
                                                                className={`px-3 py-1 rounded-full text-xs font-bold border-none focus:ring-2 cursor-pointer ${request.status === "Pending" ? "bg-yellow-100 text-yellow-700 ring-yellow-500/20" :
                                                                        request.status === "Reviewed" ? "bg-blue-100 text-blue-700 ring-blue-500/20" :
                                                                            "bg-green-100 text-green-700 ring-green-500/20"
                                                                    }`}
                                                            >
                                                                <option value="Pending">Pending</option>
                                                                <option value="Reviewed">Reviewed</option>
                                                                <option value="Completed">Completed</option>
                                                            </select>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {new Date(request.createdAt).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <button
                                                                onClick={() => handleRequestDelete(request.id)}
                                                                className="text-gray-400 hover:text-red-500 transition p-2 hover:bg-red-50 rounded-lg"
                                                                title="Delete Request"
                                                            >
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
