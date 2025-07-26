import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Contact, EmailAddress, ContactWithEmails } from '../models/contact.interface';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {
    private mockContacts: Contact[] = [
        {
            id: 1,
            firstName: 'Nicholas',
            lastName: 'Gordon',
            email: 'nicholas.gordon@example.com',
            phone: '+1 (555) 123-4567',
            dial: 'n.gordon@ymsg.com',
            meeting: 'http://go.betacall.com/meet/n.gordon',
            address: '123 Main Street',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            company: 'Tech Solutions Inc.',
            position: 'Developer',
            department: 'Engineering',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-15T10:30:00Z',
            updatedAt: '2024-01-20T14:45:00Z'
        },
        {
            id: 2,
            firstName: 'Bradley',
            lastName: 'Malone',
            email: 'bradley.malone@example.com',
            phone: '+1 (555) 234-5678',
            dial: 'b.malone@ymsg.com',
            meeting: 'http://go.betacall.com/meet/b.malone',
            address: '456 Oak Avenue',
            city: 'Los Angeles',
            state: 'CA',
            zipCode: '90210',
            company: 'Digital Marketing Pro',
            position: 'Sales Manager',
            department: 'Sales',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-10T09:15:00Z',
            updatedAt: '2024-01-18T16:20:00Z'
        },
        {
            id: 3,
            firstName: 'Johanna',
            lastName: 'Stevens',
            email: 'johanna.stevens@gmail.com',
            phone: '439-582-1578',
            dial: 'j.stevens@ymsg.com',
            meeting: 'http://go.betacall.com/meet/j.stevens',
            address: '789 Pine Street',
            city: 'Chicago',
            state: 'IL',
            zipCode: '60601',
            company: 'WhiteUI Store',
            position: 'UI/UX Designer',
            department: 'Design',
            avatar: 'https://i.pravatar.cc/150?img=32',
            createdAt: '2024-01-05T11:00:00Z',
            updatedAt: '2024-01-22T13:30:00Z'
        },
        {
            id: 4,
            firstName: 'Marvin',
            lastName: 'Lambert',
            email: 'marvin.lambert@example.com',
            phone: '+1 (555) 345-6789',
            dial: 'm.lambert@ymsg.com',
            meeting: 'http://go.betacall.com/meet/m.lambert',
            address: '321 Elm Street',
            city: 'Houston',
            state: 'TX',
            zipCode: '77001',
            company: 'Creative Design Studio',
            position: 'Designer',
            department: 'Design',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-19T15:10:00Z'
        },
        {
            id: 5,
            firstName: 'Teresa',
            lastName: 'Lloyd',
            email: 'teresa.lloyd@example.com',
            phone: '+1 (555) 567-8901',
            dial: 't.lloyd@ymsg.com',
            meeting: 'http://go.betacall.com/meet/t.lloyd',
            address: '654 Maple Drive',
            city: 'Phoenix',
            state: 'AZ',
            zipCode: '85001',
            company: 'Education First',
            position: 'PR agent',
            department: 'Marketing',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-08T12:30:00Z',
            updatedAt: '2024-01-21T10:15:00Z'
        },
        {
            id: 6,
            firstName: 'Fred',
            lastName: 'Haynes',
            email: 'fred.haynes@example.com',
            phone: '+1 (555) 678-9012',
            dial: 'f.haynes@ymsg.com',
            meeting: 'http://go.betacall.com/meet/f.haynes',
            address: '987 Cedar Lane',
            city: 'Miami',
            state: 'FL',
            zipCode: '33101',
            company: 'Tech Support Inc.',
            position: 'Support Team',
            department: 'Support',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-14T09:20:00Z',
            updatedAt: '2024-01-23T11:45:00Z'
        },
        {
            id: 7,
            firstName: 'Rose',
            lastName: 'Peters',
            email: 'rose.peters@example.com',
            phone: '+1 (555) 789-0123',
            dial: 'r.peters@ymsg.com',
            meeting: 'http://go.betacall.com/meet/r.peters',
            address: '147 Birch Road',
            city: 'Seattle',
            state: 'WA',
            zipCode: '98101',
            company: 'Project Solutions',
            position: 'Project Manager',
            department: 'Management',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-16T10:30:00Z',
            updatedAt: '2024-01-24T14:45:00Z'
        },
        {
            id: 8,
            firstName: 'Brian',
            lastName: 'Watson',
            email: 'brian.watson@example.com',
            phone: '+1 (555) 456-7890',
            dial: 'b.watson@ymsg.com',
            meeting: 'http://go.betacall.com/meet/b.watson',
            address: '321 Elm Street',
            city: 'Houston',
            state: 'TX',
            zipCode: '77001',
            company: 'Healthcare Partners',
            position: 'Developer',
            department: 'Engineering',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-19T15:10:00Z'
        },
        {
            id: 9,
            firstName: 'Hettie',
            lastName: 'Richardson',
            email: 'hettie.richardson@example.com',
            phone: '+1 (555) 678-9012',
            dial: 'h.richardson@ymsg.com',
            meeting: 'http://go.betacall.com/meet/h.richardson',
            address: '987 Cedar Lane',
            city: 'Miami',
            state: 'FL',
            zipCode: '33101',
            company: 'Creative Agency',
            position: 'Developer',
            department: 'Engineering',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
            createdAt: '2024-01-14T09:20:00Z',
            updatedAt: '2024-01-23T11:45:00Z'
        }
    ];

    private mockEmailAddresses: EmailAddress[] = [
        // Nicholas Gordon's emails
        {
            id: 1,
            contactId: 1,
            email: 'nicholas.gordon@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-15T10:30:00Z',
            updatedAt: '2024-01-15T10:30:00Z'
        },
        {
            id: 2,
            contactId: 1,
            email: 'nicholas.gordon@techsolutions.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-15T10:30:00Z',
            updatedAt: '2024-01-15T10:30:00Z'
        },
        // Bradley Malone's emails
        {
            id: 3,
            contactId: 2,
            email: 'bradley.malone@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-10T09:15:00Z',
            updatedAt: '2024-01-10T09:15:00Z'
        },
        {
            id: 4,
            contactId: 2,
            email: 'bradley.malone@digitalmarketing.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-10T09:15:00Z',
            updatedAt: '2024-01-10T09:15:00Z'
        },
        // Johanna Stevens' emails
        {
            id: 5,
            contactId: 3,
            email: 'johanna.stevens@gmail.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-05T11:00:00Z',
            updatedAt: '2024-01-05T11:00:00Z'
        },
        {
            id: 6,
            contactId: 3,
            email: 'johanna.stevens@whiteui.store',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-05T11:00:00Z',
            updatedAt: '2024-01-05T11:00:00Z'
        },
        {
            id: 7,
            contactId: 3,
            email: 'j.stevens@ymsg.com',
            type: 'personal',
            isPrimary: false,
            createdAt: '2024-01-05T11:00:00Z',
            updatedAt: '2024-01-05T11:00:00Z'
        },
        // Brian Watson's emails
        {
            id: 8,
            contactId: 8,
            email: 'brian.watson@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-12T08:45:00Z'
        },
        {
            id: 9,
            contactId: 8,
            email: 'brian.watson@healthcare.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-12T08:45:00Z'
        },
        // Teresa Lloyd's emails
        {
            id: 10,
            contactId: 5,
            email: 'teresa.lloyd@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-08T12:30:00Z',
            updatedAt: '2024-01-08T12:30:00Z'
        },
        {
            id: 11,
            contactId: 5,
            email: 'teresa.lloyd@educationfirst.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-08T12:30:00Z',
            updatedAt: '2024-01-08T12:30:00Z'
        },
        // Fred Haynes's emails
        {
            id: 12,
            contactId: 6,
            email: 'fred.haynes@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-14T09:20:00Z',
            updatedAt: '2024-01-14T09:20:00Z'
        },
        {
            id: 13,
            contactId: 6,
            email: 'fred.haynes@techsupport.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-14T09:20:00Z',
            updatedAt: '2024-01-14T09:20:00Z'
        },
        // Rose Peters's emails
        {
            id: 14,
            contactId: 7,
            email: 'rose.peters@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-16T10:30:00Z',
            updatedAt: '2024-01-16T10:30:00Z'
        },
        {
            id: 15,
            contactId: 7,
            email: 'rose.peters@projectsolutions.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-16T10:30:00Z',
            updatedAt: '2024-01-16T10:30:00Z'
        },
        // Marvin Lambert's emails
        {
            id: 16,
            contactId: 4,
            email: 'marvin.lambert@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-12T08:45:00Z'
        },
        {
            id: 17,
            contactId: 4,
            email: 'marvin.lambert@creativedesign.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-12T08:45:00Z'
        },
        // Brian Watson's emails
        {
            id: 18,
            contactId: 8,
            email: 'brian.watson@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-12T08:45:00Z'
        },
        {
            id: 19,
            contactId: 8,
            email: 'brian.watson@healthcare.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-12T08:45:00Z',
            updatedAt: '2024-01-12T08:45:00Z'
        },
        // Hettie Richardson's emails
        {
            id: 20,
            contactId: 9,
            email: 'hettie.richardson@example.com',
            type: 'primary',
            isPrimary: true,
            createdAt: '2024-01-14T09:20:00Z',
            updatedAt: '2024-01-14T09:20:00Z'
        },
        {
            id: 21,
            contactId: 9,
            email: 'hettie.richardson@creativeagency.com',
            type: 'work',
            isPrimary: false,
            createdAt: '2024-01-14T09:20:00Z',
            updatedAt: '2024-01-14T09:20:00Z'
        }
    ];

    /**
     * Get all contacts
     */
    getContacts(): Observable<Contact[]> {
        return of(this.mockContacts).pipe(delay(500)); // Simulate network delay
    }

    /**
     * Get a single contact by ID
     */
    getContactById(id: number): Observable<Contact> {
        const contact = this.mockContacts.find(c => c.id === id);
        if (contact) {
            return of(contact).pipe(delay(300));
        }
        throw new Error('Contact not found');
    }

    /**
     * Get email addresses for a specific contact
     */
    getContactEmailAddresses(contactId: number): Observable<EmailAddress[]> {
        const emails = this.mockEmailAddresses.filter(e => e.contactId === contactId);
        return of(emails).pipe(delay(200));
    }

    /**
     * Get contact with all email addresses
     */
    getContactWithEmails(contactId: number): Observable<ContactWithEmails> {
        const contact = this.mockContacts.find(c => c.id === contactId);
        const emails = this.mockEmailAddresses.filter(e => e.contactId === contactId);

        if (contact) {
            return of({
                ...contact,
                emailAddresses: emails
            }).pipe(delay(400));
        }
        throw new Error('Contact not found');
    }

    /**
     * Get all contacts with their email addresses
     */
    getAllContactsWithEmails(): Observable<ContactWithEmails[]> {
        const contactsWithEmails = this.mockContacts.map(contact => ({
            ...contact,
            emailAddresses: this.mockEmailAddresses.filter(e => e.contactId === contact.id)
        }));

        return of(contactsWithEmails).pipe(delay(800));
    }
} 