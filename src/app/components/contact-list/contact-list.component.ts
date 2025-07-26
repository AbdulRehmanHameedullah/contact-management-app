import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ContactWithEmails } from '../../models/contact.interface';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-contact-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    contacts = signal<ContactWithEmails[]>([]);
    loading = signal<boolean>(true);
    error = signal<string | null>(null);
    activeContactId = signal<number | null>(null);
    searchTerm = signal<string>('');

    // Computed signal for filtered contacts
    filteredContacts = computed(() => {
        const term = this.searchTerm().toLowerCase().trim();
        const allContacts = this.contacts();

        if (!term) {
            return allContacts;
        }

        return allContacts.filter(contact => {
            const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
            const email = contact.email.toLowerCase();
            const phone = contact.phone.toLowerCase();
            const position = contact.position.toLowerCase();

            return fullName.includes(term) ||
                email.includes(term) ||
                phone.includes(term) ||
                position.includes(term);
        });
    });

    constructor(
        private contactService: ContactService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadContacts();
        this.setupRouteListener();
    }

    /**
     * Setup route listener to track active contact
     */
    private setupRouteListener(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            const url = this.router.url;
            const match = url.match(/\/contact\/(\d+)/);
            if (match) {
                this.activeContactId.set(+match[1]);
            } else {
                this.activeContactId.set(null);
            }
        });
    }

    /**
     * Load all contacts with their email addresses
     * In a real application, this would include error handling and retry logic
     */
    private loadContacts(): void {
        this.loading.set(true);
        this.error.set(null);

        this.contactService.getAllContactsWithEmails().subscribe({
            next: (contacts) => {
                this.contacts.set(contacts);
                this.loading.set(false);
            },
            error: (error) => {
                console.error('Error loading contacts:', error);
                this.error.set('Failed to load contacts. Please try again later.');
                this.loading.set(false);
            }
        });
    }

    /**
     * Update search term for filtering
     */
    onSearchChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.searchTerm.set(target.value);
    }

    /**
     * Clear search
     */
    clearSearch(): void {
        this.searchTerm.set('');
    }

    /**
     * Get the primary email address for a contact
     */
    getPrimaryEmail(contact: ContactWithEmails): string {
        const primaryEmail = contact.emailAddresses.find(email => email.isPrimary);
        return primaryEmail?.email || contact.email || 'No email available';
    }

    /**
     * Get the full name of a contact
     */
    getFullName(contact: ContactWithEmails): string {
        return `${contact.firstName} ${contact.lastName}`.trim();
    }

    /**
     * Get the formatted address
     */
    getFormattedAddress(contact: ContactWithEmails): string {
        const parts = [contact.address, contact.city, contact.state, contact.zipCode];
        return parts.filter(part => part).join(', ');
    }

    /**
     * Get status for contact based on ID (matching the image)
     */
    getContactStatus(contact: ContactWithEmails): 'online' | 'away' | 'busy' {
        // Based on the image: Nicholas, Bradley, Johanna, Marvin, Teresa, Fred, Rose, Brian, Hettie
        const onlineContacts = [1, 2, 3, 4, 7, 8, 9]; // Nicholas, Bradley, Johanna, Marvin, Rose, Brian, Hettie
        const awayContacts = [5]; // Teresa
        const busyContacts = [6]; // Fred

        if (onlineContacts.includes(contact.id)) {
            return 'online';
        } else if (awayContacts.includes(contact.id)) {
            return 'away';
        } else if (busyContacts.includes(contact.id)) {
            return 'busy';
        } else {
            return 'online'; // Default to online
        }
    }

    /**
     * Get status class for contact status indicator
     */
    getStatusClass(contact: ContactWithEmails): string {
        const status = this.getContactStatus(contact);
        return `status-${status}`;
    }

    /**
     * Check if contact is active
     */
    isActiveContact(contact: ContactWithEmails): boolean {
        return this.activeContactId() === contact.id;
    }

    /**
     * Refresh the contact list
     */
    refreshContacts(): void {
        this.loadContacts();
    }
} 