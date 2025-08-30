import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export type Company = {
    id: number;
    name: string;
    image_path: string;
    location: string;
    open_jobs: number;
    description: string;
    founded?: string;
    company_size: string;
    organization_type: string;
    total_offices: number;
    slug: string;
    industry: Industry;
    jobs_count: number;
};

type Job = {
    title: string;
    type: string;
    location: string;
    postedDate: string;
    companyName: string;
    companyID?: string;
    companyImageURL: string;
    salary_from?: string | number;
    salary_to?: string | number;
    featured?: boolean;
    JobID?: string;
};

type FilteredJobs = {
    id: string;
    title: string;
    salary_from: number;
    salary_to: number;
    type: string;
    shift: string;
    career_level: string;
    gender: string;
    degree: string;
    company: string;
    category_id: string;
    category: string;
    country: string;
    created_at: string;
    featured: boolean;
    is_featured: boolean;
    companies: Company;
    salary_to?: number;
    city: City;
    location: string;
    positions: number;
    experience: number;
    apply_before: string;
    slug: string;
    description: string;
};

type Category = {
    id: string;
    name: string;
    image_path: string;
    jobs_count: number;
};

type City = {
    id: number;
    name: string;
    image_path: string;
    jobs_count: number;
};

type Country = {
    id: string;
    name: string;
    image_path: string;
    jobs_count: number;
};

type Industry = {
    id: string;
    name: string;
    jobs_count: number;
};

type Candidate = {
    id: string;
    name: string;
    image_path: string;
    profession: string;
    city: string;
    career_level: string;
    is_featured: number;
};

type BlogPost = {
    id: string;
    title: string;
    slug: string;
    featured_image_path: string;
    description: string;
    category: string;
    posted_at: string;
};
