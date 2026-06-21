# Planning Guide

A professional showcase platform for graphic designers, app designers, and web developers to present their portfolio and services through a striking, modern landing page.

**Experience Qualities**:
1. **Bold** - The design should command attention through striking typography, vivid colors, and confident spatial choices that reflect creative excellence.
2. **Sophisticated** - Every element should feel carefully crafted and refined, demonstrating the level of quality visitors can expect from the designer's work.
3. **Dynamic** - Subtle animations and interactions should create a sense of energy and modernity without overwhelming the content.

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page designed to present information about design services, showcase portfolio work, and drive visitor engagement through clear calls-to-action.

## Essential Features

**Hero Section**
- Functionality: Introduces the designer/agency with a bold headline, subheadline, and primary CTA
- Purpose: Immediately communicate value proposition and capture visitor attention
- Trigger: Page load
- Progression: Visitor lands → Reads compelling headline → Sees visual appeal → Clicks CTA to learn more
- Success criteria: Clear messaging, visually striking, CTA stands out prominently

**Services Overview**
- Functionality: Display three core service offerings (Graphic Design, App Design, Web Development) with icons and descriptions
- Purpose: Quickly communicate what services are offered
- Trigger: Scroll into view
- Progression: Visitor scrolls → Sees service cards → Reads descriptions → Understands offerings
- Success criteria: Services are scannable, icons are meaningful, descriptions are concise

**Portfolio Showcase**
- Functionality: Display featured project examples with images and brief descriptions
- Purpose: Provide social proof and demonstrate quality of work
- Trigger: Scroll into view
- Progression: Visitor scrolls → Views project images → Clicks to see details → Appreciates work quality
- Success criteria: High-quality visuals, clear project titles, engaging presentation

**About Section**
- Functionality: Tell the story of the designer/agency with personality and credibility
- Purpose: Build trust and connection with potential clients
- Trigger: Scroll into view
- Progression: Visitor scrolls → Reads bio → Connects with story → Builds trust
- Success criteria: Authentic voice, compelling narrative, includes experience/credentials

**Contact/CTA Section**
- Functionality: Provide clear next steps for visitors to get in touch or start a project
- Purpose: Convert visitors into leads/clients
- Trigger: Scroll into view or CTA button click
- Progression: Visitor decides to engage → Clicks contact button → Sees contact options → Takes action
- Success criteria: Multiple contact methods, low friction, clear value proposition

## Edge Case Handling

- **No JavaScript**: Core content and information remain accessible with graceful degradation of animations
- **Slow Images**: Skeleton placeholders show while portfolio images load to maintain layout stability
- **Small Screens**: Fully responsive design that maintains visual hierarchy on mobile devices
- **Long Content**: Text areas have appropriate line clamping to prevent layout breaking

## Design Direction

The design should evoke feelings of creative confidence, modern sophistication, and professional excellence. It should feel like a premium design studio that balances artistic vision with technical precision. The aesthetic should be contemporary without being trendy, bold without being overwhelming, and polished without feeling sterile.

## Color Selection

A vibrant, creative palette that balances artistic expression with professional credibility, using rich jewel tones and high contrast.

- **Primary Color**: Deep Violet (oklch(0.45 0.18 290)) - Represents creativity, innovation, and premium quality; used for primary CTAs and key brand moments
- **Secondary Colors**: Charcoal (oklch(0.25 0.01 270)) for grounding and sophistication; Soft Lavender (oklch(0.88 0.08 295)) for backgrounds and subtle accents
- **Accent Color**: Electric Cyan (oklch(0.75 0.15 195)) - Eye-catching highlight for interactive elements, hover states, and drawing attention to important actions
- **Foreground/Background Pairings**: 
  - Primary Violet (oklch(0.45 0.18 290)): White text (oklch(0.98 0 0)) - Ratio 7.2:1 ✓
  - Charcoal (oklch(0.25 0.01 270)): White text (oklch(0.98 0 0)) - Ratio 11.5:1 ✓
  - Electric Cyan (oklch(0.75 0.15 195)): Charcoal text (oklch(0.25 0.01 270)) - Ratio 6.8:1 ✓
  - Background (oklch(0.98 0.01 290)): Charcoal text (oklch(0.25 0.01 270)) - Ratio 14.2:1 ✓

## Font Selection

Typography should convey modern sophistication with a hint of creative personality—professional enough for corporate clients but distinctive enough to stand out in the creative industry.

- **Typographic Hierarchy**: 
  - H1 (Hero Headline): Space Grotesk Bold / 64px / -0.02em letter spacing / 1.1 line height
  - H2 (Section Headers): Space Grotesk Bold / 40px / -0.01em letter spacing / 1.2 line height
  - H3 (Card Titles): Space Grotesk Semibold / 24px / normal letter spacing / 1.3 line height
  - Body (Descriptions): Inter Regular / 18px / normal letter spacing / 1.6 line height
  - Small (Labels): Inter Medium / 14px / 0.01em letter spacing / 1.4 line height
  - Button: Inter Semibold / 16px / normal letter spacing

## Animations

Animations should feel purposeful and refined—smooth entrances as sections scroll into view using subtle fade-up effects, hover states on cards that lift with gentle shadows, and button interactions that provide satisfying tactile feedback through scale and color transitions.

## Component Selection

- **Components**: 
  - Button (primary CTAs with hover lift effect)
  - Card (portfolio items and service cards with subtle border and shadow)
  - Badge (technology tags and labels)
  - Separator (section dividers)
  - Avatar (testimonials or team section if included)
  - Hover Card (additional project details on hover)

- **Customizations**: 
  - Custom gradient backgrounds using mesh gradients and noise textures
  - Custom portfolio grid with asymmetric layout
  - Custom animated section reveals using framer-motion
  - Custom service cards with icon integration from Phosphor

- **States**: 
  - Buttons: Default (solid primary), Hover (lift 2px with deeper shadow), Active (scale 0.98), Focus (cyan ring)
  - Cards: Default (subtle border), Hover (elevated shadow + border glow), Active (slight scale)
  - Links: Default (primary color), Hover (cyan with underline slide-in)

- **Icon Selection**: 
  - PaintBrush (Graphic Design service)
  - DeviceMobile (App Design service)
  - Code (Web Development service)
  - ArrowRight (CTA arrows and navigation)
  - Envelope (Contact)
  - Star (Featured work indicator)

- **Spacing**: 
  - Section padding: py-24 (large screens), py-16 (mobile)
  - Card padding: p-8 (large), p-6 (mobile)
  - Grid gaps: gap-8 (large), gap-6 (mobile)
  - Text spacing: mb-6 for headers, mb-4 for paragraphs
  - Container max-width: max-w-7xl with px-6

- **Mobile**: 
  - Hero text: 64px → 40px
  - Single column layouts for service cards and portfolio grid
  - Sticky mobile navigation if header is added
  - Touch-friendly button sizes (min 44px height)
  - Reduced animation complexity for performance
  - Stack layout instead of side-by-side for content sections
