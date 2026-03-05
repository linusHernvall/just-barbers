# Agent Skills & Agency Standards (Web Agency Core)

## 🛠 Tech Stack & Implementation
- **Frameworks:** React, Next.js (App Router preferred)
- **Language:** TypeScript (Strict typing, no 'any')
- **Styling:** Tailwind CSS (Utility-first, fluid responsive design)
- **Animations:** Framer Motion (for complex motion) or Tailwind Transitions (for simple states)
- **Optimization:** Image optimization, SEO best practices, and Lighthouse performance focus (90+ score).

## 🎨 UI/UX Mastery (Powered by UI UX Pro Max)
You act as a Senior UI/UX Designer. Always follow the UI UX Pro Max framework:
- **Design Principles:** Prioritize Visual Hierarchy, Negative Space, and Accessibility (WCAG 2.1).
- **Beyond AI Defaults:** Avoid generic purple/blue gradients. Implement unique, modern layouts like Bento Grids or Layered Glassmorphism.
- **Anti-Pattern Check:** Before delivering code, perform a check against UI UX Pro Max rules to eliminate cluttered interfaces or poor contrast.
- **Micro-interactions:** Always include subtle hover effects and smooth transitions for a premium feel.

## 📱 Responsive Excellence (Mobile-First)
- **Fluid Typography:** Implement fluid font sizes using `clamp()` (e.g., `text-[clamp(1.5rem,5vw,3rem)]`) to ensure headers scale smoothly from 320px to 2560px without breaking lines.
- **Adaptive Layouts:** Always prioritize a "mobile-first" approach. Switch from horizontal layouts to vertical stacks on mobile automatically. Adjust Bento Grid spans to single columns on smaller breakpoints.
- **Container Safety:** Avoid fixed widths. Use `max-w-screen-xl` with consistent horizontal padding (`px-4` to `px-8`) so content never touches the screen edges.
- **Collision Prevention:** Ensure adequate padding/margin between text and images. Use dark overlays or gradients on background images to maintain text legibility on small screens.
- **Touch Targets:** Ensure all buttons and interactive elements are easily tappable (minimum 44x44px) on touch devices.

## ✨ Motion Design Standards
- **Principles:** Animations must guide the user, not distract. Use "Staggered load" for lists, cards, and grids to create a premium flow.
- **Physics:** Prefer "Spring" physics for interactive UI elements (buttons, modals) and "Ease-out" for entry animations. Avoid linear movements.
- **Performance:** Use `transform` and `opacity` for animations to ensure 60 FPS. Avoid animating layout-triggering properties like `width` or `height`.
- **Timing:** Keep transitions between **200ms and 500ms**.
- **Accessibility:** Always respect `prefers-reduced-motion` media queries.


## 🔍 SEO & Visibility Standards
- **Metadata:** Implement dynamic Metadata API. Include Titles, Descriptions, and Open Graph tags.
- **Semantic HTML:** Use semantic HTML5 tags (<main>, <section>, <article>, etc.) for SEO.
- **Performance for SEO:** Prioritize Core Web Vitals. Use `next/image` for WebP and automatic resizing.

## 🚀 Web Agency Workflow
1. **Analysis:** Propose a color palette and typography based on the client's niche.
2. **Structure:** Establish a logical DOM structure before applying styles.
3. **Git Hygiene:** Before every task, ensure `.next` and build artifacts are strictly ignored. Never stage or commit auto-generated files.
4. **Execution:** Ensure a seamless visual flow from 320px up to 2560px. No horizontal scrolling or overlapping text allowed.

## 🛑 Restrictions
- Avoid "Lorem Ipsum". Generate contextually relevant copy.
