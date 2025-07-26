import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Contact, EmailAddress, ContactWithEmails } from '../models/contact.interface';
import { MockDataService } from './mock-data.service';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private readonly baseUrl = 'https://mockapi.io/projects/your-project-id'; // Replace with your mockapi.io project URL

    constructor(
        private http: HttpClient,
        private mockDataService: MockDataService
    ) { }

    /**
     * Get all contacts from the API
     * In a real application, this would include pagination, filtering, and error handling
     */
    getContacts(): Observable<Contact[]> {
        // For now, using mock data. In production, this would be:
        // return this.http.get<Contact[]>(`${this.baseUrl}/contacts`);
        return this.mockDataService.getContacts();
    }

    /**
     * Get a single contact by ID
     */
    getContactById(id: number): Observable<Contact> {
        // For now, using mock data. In production, this would be:
        // return this.http.get<Contact>(`${this.baseUrl}/contacts/${id}`);
        return this.mockDataService.getContactById(id);
    }

    /**
     * Get email addresses for a specific contact
     */
    getContactEmailAddresses(contactId: number): Observable<EmailAddress[]> {
        // For now, using mock data. In production, this would be:
        // return this.http.get<EmailAddress[]>(`${this.baseUrl}/contacts/${contactId}/email_addresses`);
        return this.mockDataService.getContactEmailAddresses(contactId);
    }

    /**
     * Get contact with all email addresses
     * This combines the contact data with its email addresses
     */
    getContactWithEmails(contactId: number): Observable<ContactWithEmails> {
        // For now, using mock data. In production, this would be:
        // return this.getContactById(contactId).pipe(
        //   switchMap(contact => 
        //     this.getContactEmailAddresses(contactId).pipe(
        //       map(emailAddresses => ({
        //         ...contact,
        //         emailAddresses
        //       }))
        //     )
        //   )
        // );
        return this.mockDataService.getContactWithEmails(contactId);
    }

    /**
     * Get all contacts with their email addresses
     * This is used for the contact list page
     */
    getAllContactsWithEmails(): Observable<ContactWithEmails[]> {
        // For now, using mock data. In production, this would be:
        // return this.getContacts().pipe(
        //   switchMap(contacts => {
        //     const contactRequests = contacts.map(contact => 
        //       this.getContactEmailAddresses(contact.id).pipe(
        //         map(emailAddresses => ({
        //           ...contact,
        //           emailAddresses
        //         }))
        //       )
        //     );
        //     return forkJoin(contactRequests);
        //   })
        // );
        return this.mockDataService.getAllContactsWithEmails();
    }

    /**
     * Create a new contact
     * In a real application, this would include validation and error handling
     */
    createContact(contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>): Observable<Contact> {
        return this.http.post<Contact>(`${this.baseUrl}/contacts`, contact);
    }

    /**
     * Update an existing contact
     */
    updateContact(id: number, contact: Partial<Contact>): Observable<Contact> {
        return this.http.put<Contact>(`${this.baseUrl}/contacts/${id}`, contact);
    }

    /**
     * Delete a contact
     */
    deleteContact(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/contacts/${id}`);
    }
} 