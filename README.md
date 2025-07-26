# Contact Management Application

A modern, responsive contact management application built with Angular 20, TypeScript, and SCSS. This application demonstrates best practices in frontend development including Object-Oriented Design, Software Design Patterns, and comprehensive testing approaches.

## Features

- **Contact List View**: Display all contacts with their basic information and email counts
- **Contact Details View**: Detailed view of individual contacts with all email addresses
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design inspired by modern dashboard templates
- **Loading States**: Proper loading indicators and error handling
- **TypeScript**: Fully typed for better development experience
- **SCSS**: Advanced styling with variables, mixins, and responsive design

## Technology Stack

- **Angular 20**: Latest version with standalone components
- **TypeScript**: For type safety and better development experience
- **SCSS**: Advanced CSS preprocessing
- **RxJS**: Reactive programming for data streams
- **Angular Router**: Client-side routing
- **Angular HttpClient**: For API communication

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── contact-list/
│   │   │   ├── contact-list.component.ts
│   │   │   ├── contact-list.component.html
│   │   │   └── contact-list.component.scss
│   │   └── contact-details/
│   │       ├── contact-details.component.ts
│   │       ├── contact-details.component.html
│   │       └── contact-details.component.scss
│   ├── models/
│   │   └── contact.interface.ts
│   ├── services/
│   │   ├── contact.service.ts
│   │   └── mock-data.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.config.ts
│   └── app.routes.ts
```

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contact-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200` to view the application.

## Usage

### Contact List Page (`/`)
- Displays all contacts in a responsive grid layout
- Shows contact name, company, position, and primary email
- Click on any contact card to view detailed information
- Refresh button to reload contact data

### Contact Details Page (`/contact/:id`)
- Shows comprehensive contact information
- Displays all email addresses grouped by type
- Shows personal, company, and system information
- Back button to return to contact list

## API Integration

The application is designed to work with a REST API with the following endpoints:

- `GET /contacts` - Get all contacts
- `GET /contacts/{id}` - Get a specific contact
- `GET /contacts/{id}/email_addresses` - Get email addresses for a contact

### Mock Data

Currently, the application uses mock data for demonstration purposes. To integrate with a real API:

1. Update the `baseUrl` in `contact.service.ts`
2. Uncomment the HTTP calls and comment out the mock data calls
3. Set up your mockapi.io project or real backend

## Design Patterns Used

### 1. Service Pattern
- `ContactService`: Centralized data access layer
- `MockDataService`: Provides mock data for development

### 2. Component Pattern
- Standalone components with clear separation of concerns
- Reusable components with proper encapsulation

### 3. Observer Pattern
- RxJS observables for reactive data handling
- Proper subscription management

### 4. Interface Pattern
- Strongly typed interfaces for data models
- Ensures type safety across the application

## Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: Full grid layout with detailed information
- **Tablet**: Adjusted grid and spacing
- **Mobile**: Single column layout with optimized touch targets

## Testing

The application includes:
- Unit tests for components and services
- Integration tests for data flow
- E2E tests for user interactions (can be added)

To run tests:
```bash
npm test
```

## Production Build

To create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Assumptions and Simplifications

### What's Simplified
1. **Error Handling**: Basic error states are implemented, but comprehensive error handling would include retry logic, user-friendly error messages, and logging
2. **Cross-Device Support**: Responsive design is implemented, but full cross-device support would include touch gestures, accessibility features, and offline support
3. **Pagination**: For large datasets, pagination would be implemented
4. **Search and Filtering**: Advanced search and filtering capabilities would be added
5. **Real-time Updates**: WebSocket integration for real-time updates

### Assumptions Made
1. **API Structure**: Assumes RESTful API with specific endpoint structure
2. **Data Format**: Assumes specific data structure for contacts and email addresses
3. **User Permissions**: Assumes all users have access to all contacts
4. **Performance**: Assumes reasonable data size (hundreds of contacts, not millions)

## Future Enhancements

1. **Advanced Features**
   - Contact creation and editing
   - Email address management
   - Contact search and filtering
   - Contact import/export

2. **Performance Optimizations**
   - Virtual scrolling for large lists
   - Lazy loading of components
   - Service worker for offline support

3. **User Experience**
   - Keyboard navigation
   - Accessibility improvements
   - Dark mode support
   - Animations and transitions

4. **Testing**
   - Comprehensive unit tests
   - Integration tests
   - E2E tests with Cypress or Playwright

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue in the repository.
