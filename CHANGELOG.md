# Changelog

This file documents all notable changes to the Nexus Marketing Website project. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), with additional status tracking using checkboxes.

> **Note:** For detailed instructions on how to use and update this changelog, please refer to [DEVELOPMENT.md](./DEVELOPMENT.md).

## Status Legend
- [✓] Completed
- [ ] Open/Pending
- [❌] Failed/Blocked
- [➖] In-Progress

## [Unreleased]

### Added
- [✓] Created detailed service pages - Added five new service pages (Brand Strategy, Digital Marketing, Content Creation, Web Development, and Social Media) with comprehensive content, fancy design elements, and consistent styling.
- [✓] Implemented contact form with Vercel Edge Config - Added a reusable contact form component with validation and integrated it with Vercel Edge Config for storing submissions.

### Changed

### Fixed
- [ ] Setup issues with package manager and dependencies
- [ ] Main project dependency installation times out (MCP server timeout)
- [ ] Need to modify MCP server config to increase timeout
- [✓] Fixed Tailwind CSS configuration - Added missing 'border-border' class definition in tailwind.config.js to resolve the CSS processing error. This fixes the styling issues where elements were stacked vertically instead of using the proper layout.
- [✓] Fixed Next.js configuration warning - Removed deprecated 'swcMinify' option from next.config.ts that was causing warnings during startup.

### Security

### Performance

### Documentation
- [ ] Document setup process and requirements for local development

## [0.1.1] - 2025-04-04 15:30

### Added
- [✓] Created test project to verify pnpm functionality

### Changed
- [✓] Identified full path to pnpm executable: `C:\Users\EddyE\AppData\Roaming\npm\pnpm.cmd`
- [✓] Installed pnpm 10.0.0-rc.2 globally
- [✓] Verified pnpm works with test project

### Documentation
- [✓] Updated CHANGELOG.md according to DEVELOPMENT.md guidelines
- [✓] Learned to always append to CHANGELOG.md rather than modifying existing entries


## [0.1.2] - 2025-04-05 00:34

### Fixed
- [✓] Fixed module resolution for @/lib/constants by adding path aliases to tsconfig.json - Added baseUrl and paths configuration to resolve the "Module not found: Can't resolve '@/lib/constants'" error in src/app/layout.tsx. This enables the @/ import alias pattern for the src directory, which is a Next.js convention. The fix ensures proper loading of site configuration data needed for metadata and layout rendering.


## [0.1.3] - 2025-04-05 01:34

### Added
- [✓] Added Tailwind CSS configuration files - Created tailwind.config.js with custom animations and theme extensions to properly configure the styling system. This enables responsive layouts and custom animations defined in globals.css.
- [✓] Added PostCSS configuration - Created postcss.config.js to process CSS with Tailwind and Autoprefixer, ensuring proper CSS transformation during build.
- [✓] Added custom Document component - Created src/pages/_document.tsx to add CSP meta tags at the HTML level, providing an additional layer of CSP configuration to work with Kaspersky restrictions.

### Changed
- [✓] Modified Next.js configuration to work around CSP restrictions - Updated next.config.ts to disable eval() usage in development mode and added appropriate Content-Security-Policy headers to allow JavaScript execution with Kaspersky antivirus.

### Fixed
- [✓] Addressing CSS styling issues - Working on fixing the plain/vertical stacking layout by properly configuring Tailwind CSS to process the utility classes in the components.

### Documentation
- [✓] Created implementation plan for fixing CSP issues - Documented comprehensive approach to address Content Security Policy restrictions from Kaspersky antivirus that affect JavaScript execution.


## [0.1.4] - 2025-04-05 02:21

### Fixed
- [✓] Fixed Tailwind CSS border-border class error - Added missing borderColor definition in tailwind.config.js to properly define the border-border utility class that's used in globals.css. This resolves the CSS processing error that was preventing the site from rendering correctly.
- [✓] Fixed Tailwind CSS custom class errors - Added comprehensive definitions for all custom utility classes in tailwind.config.js including background colors, text colors, ring colors, border colors, and border radius. This ensures proper styling of all UI elements and resolves the CSS processing errors that were preventing the site from rendering correctly.
- [✓] Removed deprecated Next.js configuration option - Removed the deprecated 'swcMinify' option from next.config.ts that was causing warnings during startup. This option is now enabled by default in Next.js 15.1.4.

### Documentation
- [✓] Updated CHANGELOG.md with detailed information about the Tailwind CSS and Next.js configuration fixes.


## [0.1.5] - 2025-04-05 02:52

### Added
- [✓] Created Brand Strategy service page - Developed a comprehensive page with service overview, process steps, features/benefits, case studies, and testimonials.
- [✓] Created Digital Marketing service page - Built a detailed page showcasing digital marketing channels, process, case studies, and performance statistics.
- [✓] Created Content Creation service page - Designed a rich page highlighting content types, creation process, benefits, and success stories.
- [✓] Created Web Development service page - Implemented a feature-rich page presenting web development services, technologies, process steps, and case studies.
- [✓] Created Social Media service page - Developed an engaging page showcasing social platforms, services, process methodology, and success metrics.

### Changed
- [✓] Enhanced service pages with fancy design elements - Added decorative gradients, animated elements, and consistent styling across all service pages for a premium look and feel.

### Documentation
- [✓] Updated CHANGELOG.md with detailed information about the new service pages.


## [0.1.6] - 2025-04-05 04:27

### Added
- [✓] Implemented contact form with form validation - Created a reusable contact form component with client-side validation using React Hook Form and Zod.
- [✓] Added form submission API - Created a server-side API route to process form submissions with proper error handling.
- [✓] Integrated Vercel Edge Config - Implemented Edge Config integration for storing form submissions with a fallback for development environments.

### Changed
- [✓] Updated service pages to include contact forms - Added the contact form component to service pages for better lead generation.

### Documentation
- [✓] Updated CHANGELOG.md with information about the contact form implementation.


## [0.1.7] - 2025-04-05 05:18

### Added
- [✓] Completed Vercel Edge Config setup - Connected Edge Config to the project and configured it to store form submissions.
- [✓] Added client-side form components - Created form-components.tsx with React Hook Form integration for better form handling.
- [✓] Implemented fallback mechanism for Edge Config - Added a mock implementation for development environments without Edge Config.

### Fixed
- [✓] Fixed client component issues - Added "use client" directive to components using React hooks.
- [✓] Resolved form submission errors - Fixed API route to properly handle form submissions and store them in Edge Config.
- [✓] Fixed Edge Config integration - Updated Edge Config structure to include contactSubmissions array.

### Technical
- [✓] Set up Vercel CLI - Installed and configured Vercel CLI for environment variable management.
- [✓] Created Edge Config connection - Established connection between the application and Vercel Edge Config.
- [✓] Added environment variables - Set up .env.local with Edge Config connection string.

### Documentation
- [✓] Updated CHANGELOG.md with detailed information about Edge Config setup and form handling implementation.


## [0.1.8] - 2025-04-05 06:10

### Added
- [✓] Integrated Supabase database - Set up Supabase for storing form submissions.
- [✓] Created contact_submissions table - Designed database schema for storing form data.
- [✓] Implemented Row Level Security - Added security policies to protect form submission data.

### Changed
- [✓] Switched from Edge Config to Supabase - Updated form submission storage to use Supabase instead of Edge Config.
- [✓] Enhanced API route - Modified the contact form API route to store submissions in Supabase.

### Technical
- [✓] Added Supabase client - Installed and configured @supabase/supabase-js package.
- [✓] Created database utility functions - Implemented functions for adding and retrieving form submissions.
- [✓] Updated environment variables - Added Supabase URL and API key to .env.local.

### Documentation
- [✓] Updated CHANGELOG.md with information about Supabase integration.
- [✓] Created SQL setup script - Added supabase-setup.sql with table creation and security policies.

