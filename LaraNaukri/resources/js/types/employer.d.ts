import { User } from '.';

export type Company = {
    id: string;
    user_id: string;
    name: string;
    location: null | string;
    industry_id: null | string;
    image_path: null | string;
    description: null | string;
    founded: string;
    company_size: null | string;
    organization_type: null | string;
    total_offices: null | string;
    created_at: string;
    updated_at: string;
    slug: null | string;
    url: string;
    phone: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    pinterest: string;
    country_id: string;
    state_id: string;
    city_id: string;
    hr_name: string;
    hr_email: string;
    hr_designation: string;
    reg_number: string;
    user: User;
};

export type JobPackage = {
    id: string;
    name: string;
    price: string;
    quota: string;
    purchased_date: string;
    package_expired: string;
};
export type CVPackage = {
    id: string;
    name: string;
    price: string;
    quota: string;
    purchased_date: string;
    package_expired: string;
};
