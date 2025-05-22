# YarnElegance

## About

YarnElegance is a premium e-commerce platform dedicated to the art and craft of crochet. We connect crochet enthusiasts with unique, handcrafted creations and high-quality materials, fostering a vibrant community around this timeless skill. Our platform offers:

- Exquisite, handcrafted crochet products from talented artisans.
- A curated selection of premium yarns and essential crochet supplies.
- Exclusive and inspiring crochet patterns for all skill levels.
- An intuitive and enjoyable user-friendly shopping experience.
- Real-time customer support for any inquiries or assistance.
- Secure user accounts for managing profiles and orders.
- Seamless order tracking and management from purchase to delivery.

## Development Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd <project-directory-name> # Or the name you chose when cloning
    ```

3.  **Install dependencies:**
    We recommend using Node.js version 18.x or later.
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project by copying the `.env.example` file:
    ```sh
    cp .env.example .env
    ```
    Update the `.env` file with your specific credentials for the following services:
    - EmailJS (Public Key, Service ID, Template IDs)
    - Google Analytics (Tracking ID)
    - PostHog (Key, Host)

    *Note on Supabase:* The Supabase URL and public anonymous key appear to be managed within `src/integrations/supabase/client.ts`. If you are setting up your own Supabase backend, you may need to modify this file or adapt the project to use environment variables for Supabase credentials.

5.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or the next available port).

## Technology Stack

This project is built with modern web technologies:

- Vite - Build tool and development server
- TypeScript - Type-safe JavaScript
- React - UI framework
- React Router - Navigation and routing
- shadcn-ui - UI component library
- Tailwind CSS - Utility-first CSS framework
- Supabase - Backend and authentication
- TanStack Query - Data fetching and state management

## Project Structure

The `src` directory is organized as follows, aiming for a clear separation of concerns:

- **`components/`**: Contains reusable UI components used throughout the application.
    - **`ui/`**: Specifically for `shadcn/ui` components.
    - **`chat/`**: Components related to the live chat functionality.
- **`contexts/`**: Holds React Context providers for managing global state (e.g., Auth, Cart, Analytics).
- **`hooks/`**: Custom React hooks to encapsulate reusable logic and stateful behavior.
- **`integrations/`**: Modules for connecting to third-party services.
    - **`supabase/`**: Supabase client setup and type definitions.
- **`lib/`**: Utility functions and shared libraries (e.g., API helpers, Supabase wrappers).
- **`pages/`**: Top-level components representing different routes/views of the application (e.g., Home, Products, Cart, Admin).
    - **`policies/`**: Components for policy pages like Privacy Policy, Terms of Service.
- **`services/`**: Business logic for specific functionalities, often interacting with integrations (e.g., `emailService.ts`, `chatService.ts`).
- **`App.tsx`**: The main application component, setting up routing and global providers.
- **`main.tsx`**: The entry point of the React application.
- **`index.css` / `App.css`**: Global styles and Tailwind CSS setup.

## Styling

The project uses **Tailwind CSS** for its utility-first styling approach. Global styles and Tailwind directives are primarily set up in `src/index.css`.

**Shadcn/ui** is used for the base component library. These components are typically found in `src/components/ui` and are styled according to the Tailwind CSS configuration defined in `tailwind.config.ts`. Customizations to these components or additional global styles can be found in `src/App.css` and other component-specific CSS if applicable.

## Features

- **Product Catalog**: Browse a diverse range of handcrafted crochet items, yarns, and patterns. View detailed product descriptions, images, and pricing. Filter and sort products by category, price, and other attributes.

- **Shopping Cart**: Add products to your cart, adjust quantities, and proceed to a streamlined checkout process. Real-time updates ensure cart accuracy.

- **User Accounts**: Securely register, log in, and manage your user profile. Access order history, saved addresses, and personalized settings. Supports password recovery.

- **Order Management**: Track the status of your current orders and review your complete purchase history. Receive notifications about order updates.

- **Custom Orders**: Request custom crochet items tailored to your specifications through a dedicated form/interface.

- **Live Chat Support**: Engage in real-time conversations with customer support for immediate assistance with queries, product information, or order issues. (Leverages `ChatWidget` and `ChatRoomComponent`)

- **Admin Dashboard**: A restricted area for administrators to manage platform content. This includes adding/editing products, viewing all orders, managing user accounts, and potentially overseeing chat interactions. (Accessible via `/admin` route, protected by `use-admin` hook)

- **Responsive Design**: Enjoy a seamless browsing and shopping experience across all devices, including desktops, tablets, and smartphones.

- **Informative Pages**: Access pages like 'About Us', 'Contact Us', 'FAQ', 'Our Process', and various policy documents (Privacy, Shipping/Returns, Terms of Service).

## Deployment

This Vite-React application can be deployed to any hosting platform that supports Node.js and static site serving (after build). Popular choices include Vercel, Netlify, AWS Amplify, or DigitalOcean.

**Build Command:**
To create a production build, run:
```sh
npm run build
```
This will generate a `dist` folder containing the static assets to be deployed.

**Environment Variables:**
Ensure that all necessary environment variables (as defined in your `.env` file for development, e.g., for EmailJS, Analytics, and potentially Supabase if you've externalized its configuration) are correctly set up in your hosting platform's production environment.

**Platform Specifics:**
- **Vercel/Netlify**: These platforms often automatically detect Vite projects and configure the build settings. You'll typically need to set your environment variables through their dashboards.
- **Other Platforms**: You might need to configure the build command (`npm run build`) and the publish directory (`dist`).

Refer to the documentation of your chosen hosting provider for specific deployment instructions.
