import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User | null;
    candidate: Candidate | null;
    employer: Company | null;
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
    id: string;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export type Terms = {
    title: string;
    id: string;
    description: string;
    slug: string;
    seo_title: string;
};

export type About = {
    title: string;
    id: string;
    description: string;
    slug: string;
    seo_title: string;
};

export type FAQ = {
    id: string;
    question: string;
    answer: string;
};
export type Company = {
    id: number;
    user_id: string;
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
    jobs: FilteredJobs[];
    unread_message_count: string;
};

type Job = {
    id: string;
    apply_before: string;
    benefits: string;
    career_level: string;
    category_id: string;
    country_id: string;
    state_id: string;
    city_id: string;
    company_id: string;
    currency: string;
    degree: DegreeType;
    description: string;
    experience_id: string;
    external_url: string | null;
    gender: string;
    hide_salary: string;
    is_external: string;
    shift: string;
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
    is_featured: boolean;
    created_at: string;
    slug: string;
    skills: Skill[];
    positions: string;
    is_freelance: string;
    period: string;
    is_open: number;

    JobID?: string;
    companies: Company;
    applications: Application[];
};

type FilteredJobs = {
    id: string;
    benefits: string;
    title: string;
    salary_from: number;
    salary_to: number;
    type: string;
    shift: string;
    career_level: string;
    gender: string;
    degree: DegreeType;
    company: string;
    category_id: string;
    category: string;
    country: string;
    created_at: string;
    featured: boolean;
    is_featured: boolean;
    experience: Experience;
    salary_to?: number;
    city: City;
    location: string;
    positions: number;
    experience: number;
    apply_before: string;
    slug: string;
    description: string;
    currency: string;
    companies: Company;
    skills: Skill[];
    career: CareerLevel;
};

type Category = {
    id: string;
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

type State = {
    id: number;
    name: string;
};

type City = {
    id: number;
    name: string;
    image_path: string;
    jobs_count: number;
};

type Industry = {
    id: string;
    name: string;
    companies_count: number;
};

type BlogCategory = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
};

type BlogPost = {
    id: number;
    title: string;
    slug: string;
    featured_image_path: string;
    description: string;
    blogcategory: BlogCategory;
    posted_at: string;
};

type User = {
    id: string;
    name: string;
    email: string;
};

type Gender = {
    id: number;
    name: string;
};

type Candidate = {
    id: string;
    user_id: string;
    first_name: string;
    last_name: string;
    gender_id: number;
    marital_status_id: number;
    nationality_id: number;
    experience_id: number;
    industry_id: number;
    category_id: number;
    career_level_id: number;
    is_subscribed: boolean;
    country_id: number;
    state_id: number;
    city_id: number;
    image_path: string;
    city: City;
    state: State;
    country: Country;
    email: User;
    total_experience: number;
    age: number;
    marital_status: MaritalStatus;
    category: Category;
    industry: Industry;
    career_level: CareerLevel;
    nationality: Nationality;
    skills: Skills[];
    experiences: Experience[];
    educations: Education[];
    languages: CandidateLanguage[];
    resume_path: string;
    projects: Project[];
    applications: Application[];
    resumes_count: string;
    companies_count: string;
    profile_views: string;
    active_package: PaymentHistory | null;
    unread_message_count: string;

    profession: string;
    is_featured: number;
    created_at: string;
    updated_at: string;
    profile_views: number;
    cover_image_path: string;
    date_of_birth: string;
    phone: string;
    mobile: string;
    address: string;
    video_profile: string;
    salary_from: number;
    salary_to: number;
    summary: string;
    open_to_work: boolean;
    user: User;
    gender: Gender;
};

type Skills = {
    skill: Skill;
    experience: Experiences;
};

type Nationality = {
    name: string;
    id: string;
};
type CareerLevel = {
    name: string;
    id: string;
};

type MaritalStatus = {
    name: string;
    id: string;
};

type Resume = {
    id: number;
    candidate_id: number;
    title: string;
    cv_path: string;
    is_default: boolean;
    created_at: string;
    updated_at: string;
};

type Project = {
    id: string;
    candidate_id: string;
    name: string;
    url: string;
    image_path: string;
    ongoing: number;
    start_date: string;
    end_date: string;
    description: string;
    created_at: string;
    updated_at: string;
};

type Experience = {
    id: string;
    name: string;
    candidate_id: string;
    title: string;
    company: string;
    country_id: string;
    state_id: string;
    city_id: string;
    start_date: string;
    end_date: string;
    description: string;
    is_working: string;
    created_at: string;
    updated_at: string;
    country: Country;
    state: State;
    city: City;
};

type DegreeType = {
    id: string;
    name: string;
    degree_level_id: string;
};

type Education = {
    id: string;
    candidate_id: string;
    title: string;
    degree_level_id: string;
    degree_type_id: string;
    country_id: string;
    state_id: string;
    city_id: string;
    institution: string;
    year: string;
    result: string;
    result_type: string;
    country: Country;
    state: State;
    city: City;
    subjects: Subject[] | [];
};

type Subject = {
    name: string;
    id: string;
};

type Skill = {
    id: string;
    name: string;
};

type Experiences = {
    id: string;
    name: string;
};

type CandidateSkill = {
    id: string;
    candidate_id: string;
    experience_id: string;
    skill_id: string;
    skill: Skill;
    experience: Experiences;
    candidate: Candidate;
};

type CandidateLanguage = {
    id: string;
    name: string;
    pivot: {
        candidate_id: string;
        language_id: string;
        language_level: string;
        id: string;
    };
};

type Language = {
    id: string;
    name: string;
};

type Application = {
    id: string;
    candidate_id: string;
    job_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
    resume_path: string;
    cover_letter_path: string;
    created_at: string;
    updated_at: string;
    status: string;
    job: FilteredJobs;
    candidate: Candidate;
};

type Alert = {
    id: string;
    name: string;
    candidate_id: string;
    country_id: string;
    state_id: string;
    city_id: string;
    created_at: string;
    country: Country | null;
    state: State | null;
    city: City | null;
};

type Payment = {
    id: string;
    candidate_id: string;
    name: string;
    price: string;
    length: string;
    method: string;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
};

type Package = {
    id: string;
    name: string;
    price: string;
    num_days: string | null;
    num_listings: string | null;
    for: string;
};

type PaymentHistory = {
    id: string;
    user_id: string;
    candidate_id: string;
    package_id: string;
    method: string;
    quota_used: number;
    expiry_date: string;
    start_date: string;
    end_date: string;
    created_at: string;
    canddiate: Candidate;
    package: Package;
    user: User;
};

type CandidateGroup = {
    id: string;
    name: string;
    candidate_count: string;
};

type Item = {
    id: string;
    name: string;
};

type ChatMessage = {
    id: string;
    sender_id: string;
    receiver_id: string;
    message: string;
    status: string;
    created_at: string;
    updated_at: string;
};
