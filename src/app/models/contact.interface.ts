export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dial?: string; // Dial email address
    meeting?: string; // Meeting link
    address: string;
    city: string;
    state: string;
    zipCode: string;
    company: string;
    position: string;
    department: string;
    avatar?: string; // Optional avatar URL
    createdAt: string;
    updatedAt: string;
}

export interface EmailAddress {
    id: number;
    contactId: number;
    email: string;
    type: 'primary' | 'secondary' | 'work' | 'personal';
    isPrimary: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ContactWithEmails extends Contact {
    emailAddresses: EmailAddress[];
} 