# Contact Management App

A modern, responsive contact management application built with Angular 20. Features a clean two-column layout with a contact list sidebar and detailed contact information panel.

## 🚀 Features

- **Contact List**: Display all contacts with avatars, names, and roles
- **Contact Details**: View detailed information including bio, email, phone, and social links
- **Search Functionality**: Real-time search across all contact properties
- **Responsive Design**: Fully responsive layout for all screen sizes (320px to 4K)
- **Status Indicators**: Visual status dots (online, away, busy) on contact avatars
- **Action Buttons**: Chat, call, and more options for each contact
- **Social Media Integration**: Social media buttons with hover effects
- **Mock Data**: 9 sample contacts with realistic information

## 🛠️ Technology Stack

- **Angular**: 20.1.0
- **Node.js**: 22.15.0 (required)
- **TypeScript**: Latest
- **SCSS**: Advanced styling with responsive design
- **RxJS**: Reactive programming for data handling

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Large Desktop** (1200px+): 35% sidebar, 65% main content
- **Desktop** (1024px-1199px): 40% sidebar, 60% main content
- **Tablet Landscape** (768px-1023px): 45% sidebar, 55% main content
- **Tablet Portrait** (600px-767px): Stacked layout
- **Mobile Large** (480px-599px): Stacked layout
- **Mobile Medium** (375px-479px): Stacked layout
- **Mobile Small** (320px-374px): Stacked layout
- **Extra Small** (below 320px): Stacked layout

## 🎨 Design Features

- **Two-Column Layout**: Contact list on left, details on right
- **Modern UI**: Clean, professional design with subtle shadows and animations
- **Color Scheme**: Purple primary theme with grey accents
- **Typography**: Clear hierarchy with proper font weights and sizes
- **Interactive Elements**: Hover effects and smooth transitions

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js**: Version 22.15.0 or higher
- **npm**: Latest version
- **Angular CLI**: Latest version

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbdulRehmanHameedullah/contact-management-app.git
   cd contact-management-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   ng serve / npm start
   ```

4. **Open your browser** and navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── contact-list/          # Contact list component
│   │   └── contact-details/       # Contact details component
│   ├── models/
│   │   └── contact.interface.ts   # Contact data interfaces
│   ├── services/
│   │   ├── contact.service.ts     # Contact API service
│   │   └── mock-data.service.ts   # Mock data service
│   ├── app.component.*            # Main app component
│   ├── app.routes.ts             # Application routes
│   └── app.config.ts             # App configuration
├── styles.scss                   # Global styles
└── main.ts                      # Application entry point
```

## 🎯 Key Components

### Contact List Component
- Displays all contacts in a scrollable list
- Search functionality with autocomplete
- Contact avatars with status indicators
- Action buttons (chat, call, more options)
- Responsive design for all screen sizes

### Contact Details Component
- Shows detailed contact information
- Profile picture, name, and role
- Action buttons (message, call, share, more)
- Contact fields: Bio, Email, Dial, Meeting, Phone, Social
- Social media buttons with brand colors

## 🔧 Development

### Running Tests
```bash
ng test
```

### Building for Production
```bash
ng build
```

### Code Formatting
```bash
ng lint
```

## 📊 Sample Data

The application includes 9 sample contacts with realistic information:
- Nicholas Gordon (Developer)
- Bradley Malone (Sales Manager)
- Johanna Stevens (UI/UX Designer)
- Marvin Lambert (Designer)
- Teresa Lloyd (PR agent)
- Fred Haynes (Support Team)
- Rose Peters (Project Manager)
- Brian Watson (Developer)
- Hettie Richardson (Developer)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdul Rehman Hameedullah**

- GitHub: [@AbdulRehmanHameedullah](https://github.com/AbdulRehmanHameedullah)

## 🙏 Acknowledgments

- Built with Angular 20
- Responsive design principles
- Modern web development best practices
