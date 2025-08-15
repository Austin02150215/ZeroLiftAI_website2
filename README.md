# ZeroLiftAI Landing Page

A modern, high-converting landing page for ZeroLiftAI - AI automations that keep vacation rentals booked even after cancellations.

## Features

- **Modern Design**: Glass morphism UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, compressed images, font preconnection
- **SEO Ready**: Complete meta tags, OpenGraph, Twitter cards, JSON-LD structured data
- **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels
- **Form Integration**: Supabase integration with email fallback

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify ready

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Calendly Integration
VITE_CALENDLY_URL=your_calendly_scheduling_url
```

### Supabase Database Setup

Create a `leads` table in your Supabase database:

```sql
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  property_count text NOT NULL,
  market text,
  message text,
  utm_source text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);
```

## Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Deployment

### Netlify Deployment

1. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Environment variables**:
   Add your environment variables in Netlify's dashboard under Site settings > Environment variables.

3. **Deploy**:
   ```bash
   # Build the project
   npm run build
   
   # Deploy to Netlify (if using Netlify CLI)
   netlify deploy --prod --dir=dist
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Pricing.tsx     # Pricing plans
│   ├── Contact.tsx     # Contact form & Calendly
│   └── ...
├── index.css           # Global styles
├── App.tsx             # Main app component
└── main.tsx            # App entry point

public/
├── favicon.svg         # Favicon
├── robots.txt          # SEO robots file
└── sitemap.xml         # SEO sitemap
```

## Key Features

### Form Integration
- Primary: Supabase database integration
- Fallback: `/api/contact` endpoint for email-only submission
- Privacy consent checkbox required
- Success state with email confirmation message

### Calendar Integration
- Calendly embed placeholder (replace `CALENDLY_URL`)
- Modal and inline display options
- 15-minute demo booking slots

### Performance Optimizations
- Lazy loading for images and components
- Font preconnection for Google Fonts
- Compressed SVG assets
- Optimized animations with `prefers-reduced-motion` support

### SEO & Analytics
- Complete meta tag setup
- OpenGraph and Twitter card support
- JSON-LD structured data for Organization and Product
- Sitemap and robots.txt included
- Analytics placeholder (Plausible/Google Analytics ready)

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```js
colors: {
  background: '#0B1220',    // Deep navy
  surface: 'rgba(255,255,255,0.06)', // Translucent white
  primary: '#00E0FF',       // Electric cyan
  secondary: '#7C5CFF',     // Violet
  // ...
}
```

### Content
All copy is contained within the component files and can be easily updated. Key sections:
- Hero headlines and subtext
- Feature descriptions
- Pricing plans
- FAQ content
- Contact form fields

### Assets
- Logo: `src/components/Logo.tsx`
- Favicon: `public/favicon.svg`
- OG Image: Add `public/og-image.jpg` (1200×630px)

## Legal Pages

Basic Privacy Policy and Terms of Service pages should be added as separate routes or modal content. Currently linked as placeholders in the footer.

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - ZeroLiftAI