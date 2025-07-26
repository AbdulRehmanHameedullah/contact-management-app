import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ContactWithEmails } from '../../models/contact.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-contact-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
    contact = signal<ContactWithEmails | null>(null);
    loading = signal<boolean>(true);
    error = signal<string | null>(null);
    private routeSubscription?: Subscription;

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        public router: Router // Made public for template access
    ) { }

    ngOnInit(): void {
        // Listen to route parameter changes
        this.routeSubscription = this.route.params.subscribe(params => {
            const contactId = params['id'];
            if (contactId) {
                this.loadContactDetails(+contactId);
            } else {
                this.contact.set(null);
                this.loading.set(false);
                this.error.set(null);
            }
        });
    }

    ngOnDestroy(): void {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
        }
    }

    /**
     * Load contact details based on the contact ID
     */
    private loadContactDetails(contactId: number): void {
        this.loading.set(true);
        this.error.set(null);

        this.contactService.getContactWithEmails(contactId).subscribe({
            next: (contact) => {
                this.contact.set(contact);
                this.loading.set(false);
            },
            error: (error) => {
                console.error('Error loading contact details:', error);
                this.error.set('Failed to load contact details. Please try again later.');
                this.loading.set(false);
            }
        });
    }

    /**
     * Get the full name of the contact
     */
    getFullName(): string {
        const contact = this.contact();
        if (!contact) return '';
        return `${contact.firstName} ${contact.lastName}`.trim();
    }

    /**
     * Get the primary email address
     */
    getPrimaryEmail(): string {
        const contact = this.contact();
        if (!contact) return '';
        const primaryEmail = contact.emailAddresses.find(email => email.isPrimary);
        return primaryEmail?.email || contact.email || 'No email available';
    }

    getFirstEmail(): string {
        const contact = this.contact();
        if (!contact?.emailAddresses || contact.emailAddresses.length === 0) return '';
        return contact.emailAddresses[0]?.email || '';
    }

    isFirstEmailPrimary(): boolean {
        const contact = this.contact();
        if (!contact?.emailAddresses || contact.emailAddresses.length === 0) return false;
        return contact.emailAddresses[0]?.isPrimary || false;
    }

    hasEmails(): boolean {
        const contact = this.contact();
        return !!(contact?.emailAddresses && contact.emailAddresses.length > 0);
    }

    getAdditionalEmails(): any[] {
        const contact = this.contact();
        if (!contact?.emailAddresses || contact.emailAddresses.length <= 1) return [];
        return contact.emailAddresses.slice(1);
    }

    /**
     * Get dial email for the contact
     */
    getDialEmail(): string {
        const contact = this.contact();
        if (!contact) return '';
        return contact.dial || 'No dial email available';
    }

    /**
     * Get meeting link for the contact
     */
    getMeetingLink(): string {
        const contact = this.contact();
        if (!contact) return '';
        return contact.meeting || 'No meeting link available';
    }

    /**
     * Get email addresses grouped by type
     */
    getEmailGroups(): { type: string; emails: any[] }[] {
        const contact = this.contact();
        if (!contact) return [];

        const groups: { [key: string]: any[] } = {};

        contact.emailAddresses.forEach(email => {
            const type = email.type.charAt(0).toUpperCase() + email.type.slice(1);
            if (!groups[type]) {
                groups[type] = [];
            }
            groups[type].push(email);
        });

        return Object.keys(groups).map(type => ({
            type,
            emails: groups[type]
        }));
    }

    /**
     * Navigate back to the contact list
     */
    goBack(): void {
        this.router.navigate(['/']);
    }

    /**
     * Refresh the contact details
     */
    refreshContact(): void {
        const contactId = this.route.snapshot.paramMap.get('id');
        if (contactId) {
            this.loadContactDetails(+contactId);
        }
    }

    /**
     * Get the contact avatar initials
     */
    getAvatarInitials(): string {
        const contact = this.contact();
        if (!contact) return '';
        return this.getFullName().charAt(0).toUpperCase();
    }

    /**
     * Format the date for display
     */
    formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    /**
     * Check if we're on a contact route
     */
    isOnContactRoute(): boolean {
        return this.router.url.includes('/contact/');
    }
} 