# AI.MeD — Complete Website & Logo Generation Prompt Guide v2.0
**Grounded in actual logos, website content doc v0.3, investor pitch deck, and executive proposal**
**For: GoDaddy static hosting | Desktop + Mobile | Contact form with email triggers**

---

> **How to use:** Each numbered prompt is self-contained. Run them sequentially in Claude, Cursor, or your preferred code generator. For logos, use each prompt in Midjourney v6, Ideogram v2, or Adobe Firefly. The website requires zero backend — it runs purely as static HTML/CSS/JS on GoDaddy.

---

## BRAND REFERENCE (Read Before Running Any Prompt)

Before generating anything, internalize these facts pulled directly from the actual files:

**Company name:** AI.MeD  
**Master tagline:** "Transforming Healthcare Through Intelligent Platforms"  
**Sub-tagline:** "AI-Powered Solutions for Life Sciences & Healthcare"  
**Positioning line (from website doc):** "We build AI-native platforms that turn complex data, compliance, and operations into products teams actually use."

**Four platforms:**
1. **HelixOS™** — AI-Native Multi-Omics Operating Platform
2. **Regulon™** — AI-Native Compliance Operating System
3. **SynaptMed™** — Smart Pharmacy Operations Platform
4. **AI Molecule Foundry™** — Enterprise AI Drug Discovery Platform

**Plus:** Infrastructure & Research IT Services (strategic anchor services)

**ACTUAL LOGO (from uploaded images):**
- Icon shape: A **geometric, faceted 3D hexagonal solid** — like a multi-panel jewel or crystalline cube viewed from a slight angle. Made of interlocking angular panels/facets.
- Colors on icon: Silver/gray panels dominant, with **deep navy blue** sections and **teal** vertical accent lines/stripes on the left and right edges
- Wordmark: "AI.MeD" in bold, geometric sans-serif — deep navy color
- Two versions exist: dark background (charcoal) and light background (white)
- The icon reads as both high-tech and solid/trustworthy — NOT organic, NOT biological

**COLOR PALETTE (from actual deck):**
- Deep Navy: #1A2456 (primary text, wordmark, backgrounds)
- Purple/Violet: #6B21A8 → #7C3AED range (section headings in deck, CTA accents)
- Teal: #0891B2 → #06B6D4 (logo accent lines, highlights)
- Silver/Gray: #9CA3AF → #D1D5DB (icon facets, card backgrounds)
- Background in deck: Very light lavender-white (#F5F3FF) with purple gradient wave motifs and circuit/node patterns
- Charcoal: #2D3142 (dark version background)

**VISUAL STYLE (from deck design):**
- Background motif: Subtle circuit board / node-and-edge network pattern (very light, watermark-style)
- Wave element: Diagonal purple gradient ribbon/wave running across slides
- Typography: Bold sans-serif headings in deep navy or purple; body text in dark gray
- Icons: Purple circle backgrounds with white line icons
- Card style: White/light lavender cards with rounded corners, subtle drop shadow
- Overall feel: Premium enterprise B2B — NOT startup-casual, NOT academic

**CTAs (from website doc and deck):**
- Primary: "See a live demo" / "Run a PoC on your data"
- Secondary: "Let's build something real"
- Platform-specific: "See HelixOS on your data" | "See your compliance posture in one dashboard" | "Launch a 30-day pilot"

---

## PART 1 — DESIGN SYSTEM

```
PROMPT 1 — AI.MeD Design System & CSS Tokens

You are building the design system for AI.MeD's professional website.
AI.MeD is an enterprise B2B company selling AI-native platforms to pharma, biotech, 
life sciences, and regulated healthcare organizations.

EXACT BRAND COLORS (use these — do not substitute):
--color-navy: #1A2456;          /* Primary text, backgrounds, wordmark */
--color-navy-dark: #0A0F2C;     /* Deep navy for hero backgrounds */
--color-violet: #7C3AED;        /* Section headings, CTA backgrounds */
--color-violet-light: #8B5CF6;  /* Hover states */
--color-violet-pale: #F5F3FF;   /* Section backgrounds, card fills */
--color-teal: #06B6D4;          /* Logo accent, highlights, tags */
--color-teal-dark: #0891B2;     /* Teal hover states */
--color-silver: #9CA3AF;        /* Icon facets, secondary text */
--color-silver-light: #E5E7EB;  /* Dividers, card borders */
--color-charcoal: #2D3142;      /* Dark mode backgrounds */
--color-white: #FFFFFF;
--color-text-body: #374151;
--color-text-muted: #6B7280;

TYPOGRAPHY:
--font-heading: 'Inter', sans-serif; /* Bold weights: 700, 800 */
--font-body: 'Inter', sans-serif;    /* Regular/Medium: 400, 500 */
--font-mono: 'JetBrains Mono', monospace; /* For code/data/tags */

VISUAL MOTIFS TO IMPLEMENT:
1. Background texture: Ultra-subtle circuit board / node network pattern 
   (SVG or CSS background, opacity 0.04–0.06, navy color on white/lavender bg)
2. Diagonal wave: A flowing purple gradient wave element (used in hero and 
   section transitions) — similar to the pitch deck's purple ribbon motif
3. Card style: White background, 1px #E5E7EB border, 12px border-radius, 
   subtle box-shadow (0 4px 24px rgba(26,36,86,0.08))
4. Purple pill icons: Circle icon containers, background #7C3AED, 
   white SVG icon inside, used for feature and capability icons

GENERATE:
1. Full CSS :root with all above custom properties
2. Component classes:
   - .btn-primary: violet background, white text, 8px radius, hover darkens
   - .btn-outline: navy border + text, transparent bg, hover fills navy
   - .btn-teal: teal background, white text (for secondary CTAs)
   - .card: white card with border and shadow
   - .card-platform: card with violet top border accent (4px)
   - .badge: small pill label — background violet-pale, text violet, 
     font-mono, 4px radius, 6px 12px padding
   - .badge-teal: same but teal colors
   - .section-light: background violet-pale with circuit texture
   - .section-white: clean white background
   - .section-dark: charcoal/navy-dark background for hero
   - .icon-circle: purple circle icon container (48px, flex center)
   - .divider: 1px silver-light horizontal rule with 32px margin
3. Typography scale: h1 (56px/64px), h2 (40px), h3 (28px), h4 (20px), 
   body (16px/24px), small (14px)
4. Responsive breakpoints: 375px (mobile), 768px (tablet), 1024px (laptop), 
   1280px (desktop)
5. Animation keyframes: fadeInUp (0→translateY 24px), fadeIn, slideInRight, 
   pulseGlow (subtle violet glow pulse for CTA buttons)
6. Google Fonts CDN link for Inter + JetBrains Mono
```

---

## PART 2 — NAVIGATION & FOOTER

```
PROMPT 2 — Navigation Header & Footer

Using the AI.MeD design system, build the responsive navigation and footer 
as reusable HTML/CSS/JS components.

HEADER SPEC:
Logo area (left):
- AI.MeD geometric hexagonal icon (use an <img> tag with placeholder src="assets/logo/aimed-logo.svg")
- "AI.MeD" wordmark in --color-navy, font-weight: 800, font-size: 22px
- Logo and wordmark side by side, 8px gap

Navigation links (center/right on desktop):
- Home
- Platforms (dropdown):
    • HelixOS™ — AI-Native Multi-Omics Platform
    • Regulon™ — AI Compliance Operating System
    • AI Molecule Foundry™ — Drug Discovery Platform
    • SynaptMed™ — Smart Pharmacy Operations
- Services (dropdown):
    • Research & Omics Services
    • Compliance & Audit Readiness
    • Infrastructure & Research IT
    • Pharmacy Digital Transformation
- About
- Research (links to research page)
- Contact

CTA button (far right): "See a Live Demo" — .btn-primary style

Dropdown styling:
- White card panel, 12px radius, violet left border (4px) on each item
- Sub-description in smaller muted text under each platform name
- Smooth 200ms ease transition

Sticky behavior: After 80px scroll, add backdrop: blur(12px) with white/90% opacity

Mobile (< 768px):
- Hamburger icon (3 lines → X animation)
- Full-screen overlay menu, dark navy background
- Platform links expand/collapse as accordion
- CTA button full-width at bottom of mobile menu

FOOTER SPEC:
Four-column layout (stacks to 2-col on tablet, 1-col on mobile):

Column 1 — Company:
- AI.MeD logo + tagline: "Transforming Healthcare Through Intelligent Platforms"
- "AI-Native Platforms for Life Sciences & Healthcare"
- LinkedIn / Twitter(X) / GitHub icons (icon-only, teal on hover)

Column 2 — Platforms:
- HelixOS™
- Regulon™
- AI Molecule Foundry™
- SynaptMed™

Column 3 — Services:
- Omics & Research Enablement
- Compliance & Audit Readiness
- Infrastructure & Research IT
- Pharmacy Operations

Column 4 — Connect:
- About Us
- Research & Publications
- Careers
- Contact Us
- Email: [hello@ai.med or your actual email]

Bottom bar (full-width, navy background, white text):
Left: "© 2025 AI.MeD. All rights reserved. | Privacy Policy | Terms of Use"
Right: "Transforming Healthcare × Life Sciences × AI"
```

---

## PART 3 — HOMEPAGE SECTIONS

### 3A — Hero

```
PROMPT 3A — Homepage Hero Section

Build the hero section with this EXACT content from AI.MeD's actual materials:

LAYOUT: Full viewport height (100vh), dark navy/charcoal background (#2D3142 or #0A0F2C)
with a diagonal purple gradient wave element sweeping from bottom-left to top-right 
(similar to the visual deck's purple ribbon motif).
Subtle circuit-node pattern overlay at very low opacity.

CONTENT (left-aligned, max-width 680px):

Pre-headline badge (.badge-teal): "AI-Native Platforms for Life Sciences & Healthcare"

H1 (white, 60px desktop / 36px mobile):
"Transforming Healthcare Through Intelligent Platforms"

Subheadline (light gray, 20px, max-width 540px):
"We build AI-native platforms that turn complex data, compliance, and operations 
into products teams actually use — built to deploy fast, scale cleanly, and prove 
value early."

Two CTAs (horizontal row, stacked on mobile):
Primary (.btn-primary, larger): "See a Live Demo"
Secondary (.btn-outline on dark background — white border/text): "Run a PoC on Your Data"

Trust strip below CTAs (3 items, small text, separated by dots):
• "₹30 Crore+ Active Pipeline"
• "Peer-reviewed research in RSC Advances"
• "300+ Years Combined Leadership"

RIGHT SIDE (desktop only): 
A stylized visualization placeholder — 640×480px div, 
semi-transparent dark card with subtle animated node network (canvas or CSS).
Add comment: <!-- Replace with product screenshot or demo video thumbnail -->

PLATFORM QUICK-LINKS (below fold indicator, horizontal pills):
[HelixOS™] [Regulon™] [AI Molecule Foundry™] [SynaptMed™]
Each is a .badge that scrolls to the platform section on click.

Animation: Hero text fades in upward on load (staggered: badge → h1 → sub → CTAs)
```

### 3B — Platform Overview Cards

```
PROMPT 3B — Four Platform Cards Section

Section header:
Title (H2, navy): "Three AI-Powered Platforms. One Operating Vision."
Sub (body, muted): "From multi-omics intelligence to continuous compliance readiness 
to smart pharmacy operations — our platforms are built to deploy fast and prove value early."

FOUR CARDS in a 2×2 grid (desktop) / 1-col stack (mobile):

CARD 1 — HelixOS™
Icon: Purple circle with a layered data/stack icon (white)
Platform badge: [Multi-Omics] [Research AI]
Headline: "HelixOS™"
Sub: "The AI-Native Multi-Omics Operating Platform"
Body: "Transforms raw omics data into reproducible, production-ready biological 
intelligence — without stitching together dozens of brittle tools. Built for pharma, 
biotech, and life-sciences research teams at scale."
Key modules (3 tags): [Data Core] [Pipelines] [AI Workbench]
CTA: "Explore HelixOS →" (text link, violet)

CARD 2 — Regulon™
Icon: Purple circle with a compliance/shield icon (white)
Platform badge: [Compliance] [GxP] [FDA]
Headline: "Regulon™"
Sub: "The AI-Native Compliance Operating System"
Body: "Replaces fragmented compliance workflows and last-minute audit firefighting 
with continuous, automated regulatory readiness — purpose-built for pharma, 
biotech, and healthcare enterprises."
Key modules (3 tags): [Knowledge Graph] [Control-as-Code] [Readiness Score]
CTA: "Explore Regulon →"

CARD 3 — AI Molecule Foundry™
Icon: Purple circle with a molecule/atom icon (white)
Platform badge: [Drug Discovery] [Generative AI]
Headline: "AI Molecule Foundry™"
Sub: "Enterprise AI Drug Discovery Platform"
Body: "An enterprise generative AI platform for small-molecule and biologics design — 
combining ML-guided screening with closed-loop intelligence workflows validated 
through in silico and in vitro methods."
Key modules (3 tags): [Generative Design] [ADMET Prediction] [Docking Simulation]
CTA: "Explore Molecule Foundry →"

CARD 4 — SynaptMed™
Icon: Purple circle with a pharmacy/store icon (white)
Platform badge: [Pharmacy] [Built for Bharat]
Headline: "SynaptMed™"
Sub: "Smart Pharmacy Operations, Built for the Real World"
Body: "An offline-first platform that helps pharmacies reduce expiry loss, speed up 
billing, and grow repeat business. Designed for single stores and chains. 
Works even when the internet doesn't."
Key modules (3 tags): [Inventory Intelligence] [Fast POS] [Growth Tools]
CTA: "Explore SynaptMed →"

Section background: .section-light (violet-pale with circuit texture)
Cards: .card-platform (white, violet top border, hover lifts with shadow)
```

### 3C — Problem / Market Opportunity

```
PROMPT 3C — Market Problem & Opportunity Section

HEADLINE (H2, violet): "Life Sciences Enterprises Face Structural, Irreversible Pressures"
Section background: white (.section-white)

TWO-COLUMN LAYOUT:

LEFT — Problem list (5 items with icons):
Each item: Purple icon-circle + bold problem statement

1. 🧬 Explosion of genomic and multi-omics data — overwhelming existing infrastructure
2. 🔍 Increasing FDA and EMA inspection scrutiny — reactive compliance is failing
3. 💊 Growth of biologics and complex modalities — requiring AI-native design workflows
4. ⏱️ Need to compress drug discovery timelines — current cycles are too slow and costly
5. 🤖 Rising enterprise AI adoption mandates — without the infrastructure to support them

RIGHT — Enterprise Struggles box (violet-pale card, violet left border):
Header: "Enterprise Struggles Today"
List:
• Fragmented data pipelines
• Non-reproducible research workflows  
• Reactive compliance systems
• Infrastructure not optimized for AI and GPU workloads

BELOW — Convergence positioning statement (centered, large, navy):
"AI.MeD operates at the convergence of Infrastructure × Biology × AI —
building the operating layer that unlocks predictive intelligence across 
Life Sciences enterprises."

Sub-statement (muted, smaller):
"We are not a system-of-record replacement. We are not a drug-owning biotech. 
We are not a generic IT services provider. We are an AI-native intelligence 
and orchestration layer."
```

### 3D — Services Overview

```
PROMPT 3D — Services Section

HEADLINE (H2, navy): "Platforms First. Services That Actually Ship Value."
SUBLINE: "Every engagement is powered by one or more of our platforms — 
to move customers from chaos to control, fast."

FOUR SERVICE TRACKS in a 2×2 grid:

TRACK 1: HelixOS™-Powered
Label badge: [HelixOS™]
Title: "Omics, AI & Research Enablement"
Description: "Multi-omics pipeline engineering, AI-ready data engineering, 
HPC & cloud acceleration, and discovery-to-production enablement for pharma 
and biotech research teams."
Outcome tag: "Pipelines that survive beyond a single project"

TRACK 2: Regulon™-Powered
Label badge: [Regulon™]
Title: "Continuous Compliance & Audit Readiness"
Description: "Compliance platform implementation across GxP, SOC 2, ISO 27001, 
HIPAA, and GDPR — with control-as-code automation and managed readiness monitoring."
Outcome tag: "Audits become predictable — and boring"

TRACK 3: AI Molecule Foundry™-Powered
Label badge: [AI Molecule Foundry™]
Title: "Infrastructure & Research IT Services"
Description: "HPC lifecycle management, GPU cluster optimization, DevOps and MLOps 
in regulated environments, cloud-native research IT modernization, and 
bioinformatics custom development."
Outcome tag: "Infrastructure creates enterprise entry and recurring revenue"

TRACK 4: SynaptMed™-Powered
Label badge: [SynaptMed™]
Title: "Smart Pharmacy Digital Transformation"
Description: "End-to-end pharmacy onboarding, inventory and expiry optimization, 
billing and POS enablement, and customer growth and retention programs for 
single stores and chains."
Outcome tag: "Pharmacies go digital without disruption"

ENGAGEMENT MODEL (horizontal steps, below the tracks):
Title: "Our Engagement Model — Platform-Led. Outcome-Driven."
Steps: [1. Discovery & Fit] → [2. PoC on Real Data] → [3. Production Rollout] → [4. Scale & Optimize]

CTA (centered): "Let's Build Something Real" (.btn-primary)
```

### 3E — Research Credibility

```
PROMPT 3E — Research & Scientific Credibility Section

Section background: .section-light

HEADLINE (H2, navy): "Built on Peer-Reviewed Science"
SUBLINE: "Our AI Molecule Foundry capabilities are grounded in research published 
in leading scientific journals — not just product claims."

FEATURED PUBLICATION CARD (prominent, white, violet left border 6px):
Journal badge: "RSC Advances — Royal Society of Chemistry | Open Access | 2025"
Title: "Integrative machine learning-guided in silico and in vitro approach reveals 
selective small molecule inhibitors targeting mutant IDH1"
Authors: Bajaj M., Kumar R., Pandey V., Parvez S., Tanneru H.K., Aparoy P., Karnati R.
Institution tags: [University of Hyderabad] [IIPE Visakhapatnam]
Key outcome (2 sentences, plain language):
"Using a dataset of 1,631 compounds, a Random Forest model achieved high predictive 
accuracy in identifying inhibitors for a key cancer target found in over 80% of 
grade II/III gliomas. Three candidates were confirmed as selective inhibitors 
through in vitro enzyme assays — demonstrating the closed-loop AI-to-lab validation 
approach at the core of our Molecule Foundry."
DOI link: https://doi.org/10.1039/D5RA06290J
CTAs: [Read Publication →] [View on GitHub →]

STATS ROW (4 stats, animated count-up on scroll):
"1,631" — Compounds Screened
"250 ns" — MD Simulation Runtime
"3" — Confirmed Selective Inhibitors
"4+" — National Research Grants Backing

NOTE IN CODE COMMENT:
<!-- 
  CONTENT BOUNDARY: This section references the RSC publication only at a high level.
  Do NOT expose specific ML model architectures, compound structures, target binding details, 
  or screening methodology specifics on the public website.
  Keep all technical claims at the outcomes level.
-->
```

### 3F — Leadership Strip

```
PROMPT 3F — Leadership Preview Section

HEADLINE (H2, navy): "300+ Years of Combined Leadership"
SUBLINE: "Healthcare × Life Sciences × AI Convergence"

TWO-ROW GRID — FOUNDERS (first row, 4 cards):

Card 1: Jupudi Srinivasa Rao
Title: Co-Founder
Focus: "30+ Years | Enterprise GRC, Information Security & Privacy"

Card 2: Dr. Uma Maheswara Rao Chanchala
Title: Co-Founder
Focus: "30+ Years | Life Sciences IT & Digital Transformation | PhD Life Sciences"

Card 3: Sodhinipalli Chanakya
Title: Co-Founder
Focus: "15+ Years | Enterprise IT, Cloud & AI | Product Execution Leader"

Card 4: Madhusudhan Koppoju
Title: Co-Founder
Focus: "15+ Years | Entrepreneurship & Fund Management"

(Additional founders shown as "+4 more founders" expansion or on the About page)

CARD DESIGN: White card, 1px border, centered layout:
[Circular photo placeholder — grey div with initials]
Name (bold navy)
Title (violet, small)
Focus line (muted, smaller)

ADVISOR TEASER ROW (below founders, 3 advisor names as text badges):
"Advised by: Dr. Pawan K Dhar · Dr. Polamarasetty Aparoy · Dr. Satish Gupta 
· Dr. Nageswara Rao Reddy Neelapu · Dr. Ravi Chandra Pavan Kumar · Venkatesh Muniyandi"

CTA: "Meet the Full Team →" (links to About page)
```

### 3G — Final CTA / Pipeline Section

```
PROMPT 3G — Homepage Bottom CTA Section

Dark navy background (#1A2456), white text.

LEFT SIDE:
Pre-label (teal badge): "Early Commercial Traction"
H2 (white): "₹30 Crore+ in Active Pipeline Opportunities"
Body (light gray):
"AI.MeD has secured and advanced pipeline engagements across pharma infrastructure, 
genomics AI programs, and platform deployments — with a Year 1 foundation already 
generating committed revenue."

Pipeline highlights (3 rows, each with a teal check icon):
✓ Two enterprise projects with committed revenue delivering within 12 months
✓ Pharma infrastructure engagement — 30–50 FTE scale
✓ Advanced genomics AI program — IP and scientific credibility

RIGHT SIDE:
Two CTA cards (white on dark):
Card 1: "See a Live Demo"
Sub: "Watch our platforms in action on real data."
Button: "Request Demo →" (.btn-primary)

Card 2: "Run a PoC on Your Data"
Sub: "We'll deploy a proof-of-concept in your environment."
Button: "Start a PoC →" (.btn-teal)

Bottom strip (centered, below both columns):
"Ready to transform your operations? Let's build something real."
[Contact Us] button (outline, white)
```

---

## PART 4 — INNER PAGES

### 4A — About Page

```
PROMPT 4A — About Page (Full)

PAGE HERO:
H1: "Built by Scientists, Engineers, and Operators — For Life Sciences"
Sub: "AI.MeD is an AI-native platform company at the intersection of Life Sciences, 
Healthcare, and Artificial Intelligence. We build platforms that enterprises 
actually deploy — not prototypes."

SECTION 1 — Who We Are:
"AI.MeD builds AI-native platforms purpose-built for Life Sciences and Healthcare 
enterprises operating in regulated, data-intensive environments. We address four 
high-value transformation domains: multi-omics intelligence, predictive regulatory 
compliance, AI-driven molecule engineering, and research IT modernization.

Unlike fragmented SaaS tools or consulting-heavy programs, AI.MeD delivers 
integrated, production-grade platforms embedded within enterprise ecosystems — 
generating measurable scientific and operational impact.

Our differentiation combines domain-native AI, deep HPC and GPU infrastructure 
capability, regulatory-grade architecture, and enterprise delivery scale."

SECTION 2 — What We Are NOT (important for positioning):
Three statements in bold (from investor doc):
• "Not a system-of-record replacement vendor"
• "Not a drug-owning biotech"  
• "Not a generic IT services provider"
Followed by: "We operate as an AI-native intelligence and orchestration layer 
across enterprise ecosystems."

SECTION 3 — FOUNDERS (full grid, 8 people):
8-card grid (4×2 desktop, 2×4 tablet, 1-col mobile)
Each card: Photo placeholder | Name | Experience summary | Domain

1. Jupudi Srinivasa Rao
   "30+ Years in IT, Enterprise GRC & Information Security | Six Sigma MBB | 
   Governance, Risk & Compliance Leader | Enterprise Security & Privacy Expert"

2. Dr. Uma Maheswara Rao Chanchala
   "30+ Years in Life Sciences IT & Digital Transformation | PhD Life Sciences | 
   Scientific & Technology Leader Driving Enterprise-Scale Digital Transformation"

3. Sodhinipalli Chanakya
   "15+ Years in Enterprise IT, Cloud & AI | 
   Business-Driven Technology & Product Execution Leader"

4. Madhusudhan Koppoju
   "15+ Years in Entrepreneurship & Fund Management | 
   Serial Entrepreneur & Fund Management Leader"

5. Raghuram Veeramallu
   "25+ Years in Prime Brokerage & Securities Lending | 
   Technology & Product Leader (Equity Finance)"

6. Nagamani L
   "10+ Years in Student Enablement | 
   Materials Science & Technical Training"

7. Dr. Indukuri Srividya
   "15+ Years in Biochemistry & Biotechnology | 
   Molecular Sciences & Translational Research Leadership"

8. Navya D.
   "20+ Years in Bio-IT & Life Sciences R&D | 
   Program Management, Genomics & Digital Farming"

SECTION 4 — ADVISORS (6 people, 3×2 grid):

1. Dr. Pawan K Dhar — 40+ Years Synthetic Biology & Genomics | PhD Genetics
2. Dr. Polamarasetty Aparoy — 25+ Years Computational Biology | Drug Design & Molecular Modelling
3. Dr. Satish Gupta — 20+ Years Genomics & Bioinformatics | PhD Medical Genetics
4. Dr. Nageswara Rao Reddy Neelapu — 30+ Years Bioinformatics & Genomics | Drug Target Discovery
5. Dr. Ravi Chandra Pavan Kumar — 15+ Years Clinical Diagnostics & Biochemistry | PhD Biochemistry
6. Venkatesh Muniyandi — 20+ Years Cloud, Azure & AI | Enterprise Architecture & Developer Advocacy

SECTION 5 — Why Teams Choose Us (4 features):
• Product-first: platforms, not patchwork tools
• Built for regulated environments: traceability by design
• Cloud-flexible: no vendor lock-in (AWS, Azure, GCP, on-prem)
• Value-driven: prove ROI early with a PoC, then scale

CTA: "See a Live Demo | Run a PoC on Your Data"
```

### 4B — Platforms Page (Overview)

```
PROMPT 4B — Platforms Overview Page

PAGE HERO:
H1: "Four Platforms. One AI Operating Vision."
Sub: "Deploy fast. Scale cleanly. Prove value early."

For each of the four platforms, create a full DETAIL SECTION 
(alternating layout: image-left/text-right, then text-left/image-right):

HELIX OS SECTION:
"This is not a pipeline manager. This is an operating platform for modern biology."
Core capabilities (6 items in 2×3 grid with purple icon-circles):
- Unified genomics, transcriptomics, single-cell and proteomics integration
- FAIR-aligned structured data models
- Containerized and reproducible pipelines
- Integrated ML/AI workbench
- GPU-enabled scalable compute
- Cloud-agnostic deployment (AWS, Azure, GCP, or on-prem)
Workflow diagram (horizontal, 4 steps with connecting arrows):
[Raw Multi-Omics] → [Unified Data Foundation] → [Analysis & AI Workbench] → [Production-Grade Intelligence]
CTA: "Run your first production-grade omics pipeline in days — not months."
[See HelixOS on Your Data →]

REGULON SECTION:
"Continuous Readiness. Not Audit Panic."
Problem it solves: Traditional compliance is reactive — evidence collected days before 
audits, controls reviewed once a year, gaps discovered too late.
Regulon flips the model — you always know: where you stand, what's missing, 
what changed, what will fail an audit before it happens.
Modules (5 items — icon + name + 1-line description):
- Regulon Core: compliance knowledge graph, regulation-to-control mapping
- Regulon Evidence: automated evidence ingestion, immutable audit trails
- Regulon Control-as-Code: declarative controls across cloud, data, and IAM
- Regulon Readiness Score: real-time posture, risk-weighted scoring, executive views
- Regulon Inspect: FDA/EMA inspections, mock audits, CAPA tracking
Supported frameworks strip: GxP (GMP, GCP, GLP) | FDA 21 CFR Part 11 | EMA | SOC 1/2 | ISO 27001 | HIPAA | GDPR
CTA: "See your compliance posture in one dashboard." [Run a PoC →]

AI MOLECULE FOUNDRY SECTION:
"Enterprise-deployable AI drug design. Private. Secure. Validated."
(NOTE: Keep descriptions at outcomes level — do not expose specific algorithm 
details, compound libraries, or screening parameters on the public website)
Two capability tracks:
Small Molecule: Generative molecular design, reinforcement learning optimization, 
ADMET prediction, docking simulation loops
Large Molecule: Antibody engineering, protein optimization, binding affinity 
prediction, stability modelling
Closed-Loop Workflow (circular diagram): Design → Simulate → Score → Optimize → Lab Feedback → Retrain → Design
Value delivered (3 outcomes):
- Faster candidate prioritization
- Reduced experimental cycles
- Enterprise-deployable AI drug design
Research validation badge: "Validated in peer-reviewed research — RSC Advances 2025"
CTA: [Request Platform Access →]

SYNAPTRMED SECTION:
"Smart Pharmacy Operations, Built for the Real World."
Three capability modules (3-col cards):
1. Inventory Intelligence: Demand forecasting, expiry alerts, smarter reordering
2. Fast Billing & POS: Sub-3-second billing, voice/barcode search, GST-compliant, UPI
3. Customer & Growth Tools: Prescription digitization, WhatsApp refill reminders, loyalty
Built for Bharat strip: [Offline-first] [Multi-language] [Runs on low-cost Android devices]
CTA: "Launch a 30-day pilot in your pharmacy." [Start Pilot →]
```

### 4C — Services Page

```
PROMPT 4C — Services Page

PAGE HERO:
H1: "Platform-Led. Outcome-Driven."
Sub: "We don't sell services in isolation. Every engagement is powered by 
one or more of our platforms — HelixOS™, Regulon™, AI Molecule Foundry™, 
and SynaptMed™."

Four platform-powered service sections (same structure, tab or accordion format on mobile):

TAB 1: HelixOS™-Powered Services
Title: "Omics, AI & Research Enablement"
Target: "Built for pharma, biotech, and research teams that need reproducibility and scale."
Four service rows (each with: module badge + service name + description + outcome):

Service 1 — Multi-Omics Pipeline Engineering (Powered by HelixOS Pipelines)
WGS, WES, RNA-Seq, scRNA-Seq, epigenomics, proteomics & metabolomics workflows
Outcome: "Pipelines that survive beyond a single project."

Service 2 — AI-Ready Data Engineering (Powered by HelixOS Data Core)
Omics data harmonization, feature engineering for ML, FAIR-aligned datasets with lineage
Outcome: "Data that is genuinely usable for AI/ML."

Service 3 — HPC & Cloud Acceleration (Powered by HelixOS Deploy)
GPU acceleration, Slurm/Kubernetes/cloud HPC setups, hybrid on-prem + cloud execution
Outcome: "Faster science, controlled cost."

Service 4 — Discovery → Production Enablement (Powered by HelixOS AI Workbench)
Notebook-to-pipeline hardening, model training & inference, MLOps for biological models
Outcome: "Research that actually reaches production."

TAB 2: Regulon™-Powered Services
(Same structure — 4 services from the website doc)

TAB 3: Infrastructure & Research IT Services
(From investor doc — HPC lifecycle, GPU optimization, DevOps/MLOps, cloud-native, bioinformatics)

TAB 4: SynaptMed™-Powered Services
(Same structure — 5 services from the website doc)

ENGAGEMENT MODEL SECTION (bottom of services page):
Title: "How We Work With You"
4-step horizontal process:
Step 1: Discovery & Fit — "Platform selection: HelixOS / Regulon / AI Molecule Foundry / SynaptMed"
Step 2: PoC on Real Data — "Pipelines, controls, or pharmacy workflows — live on your environment"
Step 3: Production Rollout — "Hardened, secure, compliant deployment"
Step 4: Scale & Optimize — "Performance, cost, governance, and expansion"

CTA: "Let's Build Something Real" [Contact Us →]
```

### 4D — Research Page

```
PROMPT 4D — Research Page

PAGE HERO:
H1: "Research-Grounded. Open. Reproducible."
Sub: "The AI Molecule Foundry is built on active scientific research programs. 
We publish, share code, and engage with the global life sciences research community."

FEATURED PUBLICATION (large card, violet left border):
Same content as homepage 3E section — but expand to include:
Full abstract summary (2-3 sentences, plain language)
Research approach: "ML regression models trained on 1,631 compounds, Random Forest 
selected for superior performance, validated through molecular docking, 250ns 
molecular dynamics simulation, MM/PBSA free energy calculations, and in vitro 
enzyme assays"
Key advisors involved: Dr. Polamarasetty Aparoy, Dr. Nageswara Rao Reddy Neelapu 
(both on AI.MeD advisory board)
[Read Full Paper →] [GitHub Code Repository →] [Cite This Work →]

NOTE IN CODE COMMENT:
<!-- 
  WEBSITE CONTENT BOUNDARY: Do not publish:
  - Specific ML model hyperparameters or architecture details
  - Compound structures, SMILES strings, or screening hits
  - Assay protocols or inhibitor concentration data
  - Anything that could assist unauthorized replication of drug-like screening
  Keep all research content at the outcomes and validation level.
-->

RESEARCH AREAS (4 cards, 2×2 grid):
1. AI/ML for Drug Discovery
2. Multi-Omics Data Intelligence  
3. Structural Biology & Computational Modelling
4. Oncology Target Validation

ADVISORY RESEARCH BOARD:
Brief section featuring the 6 advisors with their research domains

COLLABORATION CTA:
"Are you a PI, institution, or pharma R&D team looking to embed AI 
into your discovery pipeline? We actively seek collaborative programs."
[Contact Us to Collaborate →]
```

### 4E — Contact Page with Email Triggers

```
PROMPT 4E — Contact Page with Formspree Email Integration

PAGE HEADLINE: "Let's Build Something Real"
SUB: "Whether you're looking for a live demo, a PoC engagement, a research 
collaboration, or a partnership — we'd love to hear from you. We respond 
within 2 business days."

LAYOUT: Two columns (desktop) — form on left, contact info on right

FORM FIELDS:
1. Full Name* (text input)
2. Organization / Institution* (text input)  
3. Role / Title (text input, optional)
4. Email Address* (email, validated)
5. Phone (optional, with +country prefix)
6. Inquiry Type* (select dropdown):
   Options: 
   - Live Demo Request
   - PoC Engagement (Platform Trial)
   - Research Collaboration
   - Platform Partnership / Integration
   - Investment & Strategic Partnership
   - Infrastructure Services Enquiry
   - Press & Media
   - General Enquiry
7. Which platform(s) are you interested in? (multi-checkbox):
   ☐ HelixOS™ — Multi-Omics Platform
   ☐ Regulon™ — Compliance OS
   ☐ AI Molecule Foundry™ — Drug Discovery
   ☐ SynaptMed™ — Pharmacy Operations
   ☐ Infrastructure & Research IT Services
8. Message* (textarea, 50+ char minimum, character counter shown)
9. How did you find us? (select): LinkedIn | Scientific Publication | Conference | 
   Colleague/Referral | T-Hub | Google Search | Other
10. Consent checkbox*: "I agree to AI.MeD's Privacy Policy and consent to being 
    contacted regarding my inquiry." (required)
11. [Send Message] button (.btn-primary, full width)

FORMSPREE SETUP (include as HTML comment at top of form):
<!--
  SETUP INSTRUCTIONS:
  1. Go to https://formspree.io — create a free account
  2. Create a new form → you'll receive a unique ID
  3. Set form action: action="https://formspree.io/f/YOUR_FORM_ID"
  4. In Formspree dashboard:
     - Set notification email to your actual business email
     - Set Reply-To field to submitter's {email}
     - Set subject template: "AI.MeD Inquiry: {inquiry_type} from {name} at {organization}"
     - Enable "Send copy to submitter" auto-responder
  5. Auto-responder message to configure:
     "Thank you for reaching out to AI.MeD. We've received your inquiry regarding 
     {inquiry_type} and will respond within 2 business days. 
     In the meantime, explore our platforms at [your domain]."
  6. Optional: Connect Formspree webhook → Zapier → Slack channel #inquiries
  7. For GoDaddy: This is a static form — no server config needed.
     Upload all files to public_html in GoDaddy File Manager.
-->

FORM STATES:
- Loading: spinner on button, disabled fields
- Success: animated checkmark + "Thank you! We've received your inquiry and 
  will respond within 2 business days."
- Error: "Something went wrong. Please email us directly at [email]."

RIGHT COLUMN — Contact Info:
Email: [your email]
Location: Hyderabad, Telangana, India
"Supported by T-Hub — Telangana's Innovation Ecosystem"
LinkedIn / Twitter / GitHub links

BOTTOM NOTE:
"For research collaborations, please include your institution name, 
PI details, and a brief description of your scientific program."

TECHNICAL: Pure HTML + vanilla JS + Formspree. No backend required.
All validation client-side with inline error messages.
```

---

## PART 5 — FULL SITE ASSEMBLY

```
PROMPT 5 — Complete GoDaddy-Ready Static Site Assembly

Assemble the following complete file structure.
ALL files must be pure HTML + CSS + vanilla JS — no React, no Node.js, 
no build tools required. Must run directly from GoDaddy File Manager.

FILE STRUCTURE:
/
├── index.html          (Homepage — all sections from Prompts 3A–3G + nav + footer)
├── about.html          (About page from Prompt 4A)
├── platforms.html      (Platform detail page from Prompt 4B)
├── services.html       (Services page from Prompt 4C)
├── research.html       (Research page from Prompt 4D)
├── contact.html        (Contact page from Prompt 4E)
├── privacy.html        (Privacy policy)
├── terms.html          (Terms of use)
├── 404.html            (Custom 404 page)
├── css/
│   └── styles.css      (Full design system from Prompt 1)
├── js/
│   ├── main.js         (Nav toggle, scroll animations, IntersectionObserver)
│   └── form.js         (Contact form validation + Formspree submission)
├── assets/
│   ├── logo/
│   │   ├── aimed-logo-dark.svg      (Dark background version of logo)
│   │   ├── aimed-logo-light.svg     (Light background version of logo)
│   │   └── aimed-favicon.ico
│   └── images/          (Image placeholders with correct aspect ratios)
├── sitemap.xml
├── robots.txt
└── .htaccess           (HTTPS redirect + clean URLs for GoDaddy Apache)

GODADDY DEPLOYMENT CHECKLIST (include as HTML comment in index.html):
<!--
  GODADDY DEPLOYMENT STEPS:
  1. Log in to GoDaddy → My Products → Websites + Hosting → Manage
  2. Go to cPanel → File Manager → public_html
  3. Upload ALL files preserving folder structure above
  4. index.html must be in root of public_html
  5. SSL: GoDaddy → Security → SSL Certificates → activate free SSL
  6. Domain DNS: A Record pointing to your GoDaddy hosting IP (visible in DNS Manager)
  7. Email setup: GoDaddy Email & Office → create hello@[yourdomain]
  8. .htaccess handles: HTTPS redirect, www→non-www, clean URLs
  9. Formspree: Test by submitting the contact form and verifying email arrives
  10. Analytics: Add your Google Analytics 4 ID in the gtag() snippet
-->

PERFORMANCE REQUIREMENTS:
- All images: loading="lazy"
- Fonts preloaded with <link rel="preload">
- JS deferred: <script defer src="...">
- No page exceeds 400KB total (before images)
- Scroll animations via IntersectionObserver (no GSAP dependency)
- CSS animations only where they add meaningful UX value

ACCESSIBILITY:
- ARIA labels on all interactive elements
- Focus-visible styles on all keyboard-navigable elements
- Color contrast ≥ 4.5:1 for all text
- Alt text on all images (or decorative images marked role="presentation")
- Skip to main content link at top of page
```

---

## PART 6 — EMAIL NOTIFICATIONS SETUP

```
PROMPT 6 — Email Trigger & Notification Setup Guide

Generate a formatted setup guide (can be an HTML page for internal team use) 
covering email trigger setup for every contact form submission:

OPTION A — FORMSPREE (Recommended — Zero backend, works with GoDaddy static):
Detailed steps:
1. Create account: formspree.io
2. New Form → name: "AI.MeD Website Inquiries"
3. Set action URL in contact.html: action="https://formspree.io/f/YOUR_ID"
4. Dashboard configuration:
   - Notification email: [your business email]
   - Reply-To: set to submitter's email field {email}
   - Subject: "AI.MeD Inquiry: {inquiry_type} from {name} at {organization}"
   - Enable submission email notifications (every submission)
   - Enable auto-responder to submitter
   - Enable reCAPTCHA spam protection
5. Test: Submit a test inquiry → verify email received at your inbox
Cost: Free tier (50 submissions/month), $10/month for 1,000/month

OPTION B — ZAPIER AUTOMATION LAYER (Connect to Formspree):
1. formspree.io → Settings → Webhooks → add your Zapier webhook URL
2. Create Zaps:
   Zap 1: New Formspree submission → send email via Gmail/Outlook with all form fields
   Zap 2: New submission → post to Slack channel #website-inquiries (formatted)
   Zap 3: New submission → create row in Google Sheets (inquiry log with timestamp)
   Optional Zap 4: If inquiry_type = "Investment" → create contact in HubSpot
3. Slack message format:
   "🔔 New AI.MeD Inquiry
   Name: {name} | Org: {organization}
   Type: {inquiry_type}
   Platforms: {platforms}
   Email: {email}
   Message: {message}"

OPTION C — EMAILJS (Alternative — no Formspree needed, pure frontend):
1. Create account at emailjs.com (free: 200 emails/month)
2. Connect your Gmail or Outlook account as email service
3. Create an email template with all form variables
4. Copy your Service ID, Template ID, and Public Key
5. Replace Formspree code in form.js with EmailJS SDK calls
Include code snippet showing exact implementation.

RECOMMENDED WORKFLOW FOR AI.MeD:
- Use Formspree for reliability + email to your business inbox
- Use Zapier Zap to simultaneously post to a Slack channel
- Store all submissions in Google Sheets as a backup CRM
- Monthly: review inquiries, follow up on non-responses
```

---

## PART 7 — LOGO GENERATION PROMPTS

*Use these with Midjourney v6.1, Ideogram v2, Adobe Firefly, or DALL·E 3*

### 7A — AI.MeD Master Brand Logo (variations)

```
LOGO PROMPT 7A — AI.MeD Logo Variations

IMPORTANT CONTEXT: AI.MeD already has an established logo — a geometric, 
faceted 3D hexagonal solid made of angular panels, with silver/gray facets, 
deep navy blue panels, and teal vertical accent lines on the left and right edges.
The wordmark "AI.MeD" is in bold geometric sans-serif, deep navy.

Use this prompt to generate VARIATIONS and REFINEMENTS of the existing concept:

VARIATION A — Dark background version (for hero, email headers):
"AI.MeD company logo on dark charcoal background (#2D3142).
The icon: a geometric 3D hexagonal solid/jewel shape made of angular flat panels.
Left and right edges have vertical teal (#06B6D4) accent lines.
Central facets: silver-white and deep navy blue panels creating a crystalline, 
architectural appearance. The form reads as both technological and structurally 
solid — like a data crystal or precision-engineered component.
Below the icon: 'AI.MeD' in bold geometric sans-serif, white text.
Style: vector clean, professional enterprise, flat-ish with subtle depth cues.
No gradients. No organic shapes. No DNA or helix elements. Pure geometry."

VARIATION B — White background version (for website header, documents):
"Same AI.MeD geometric hexagonal faceted icon as above, 
but on pure white background.
Icon colors: silver/gray primary facets with navy blue (#1A2456) panels 
and teal (#06B6D4) vertical accent lines.
Wordmark 'AI.MeD' in deep navy (#1A2456), bold geometric sans-serif.
Clean, minimal, enterprise-grade. White background."

VARIATION C — Icon only (favicon, app icon, social avatar):
"The AI.MeD geometric hexagonal faceted icon only — no text.
Must be immediately recognizable at 32x32px.
Colors: navy and silver facets with teal accents.
Maximum clarity and simplicity at small sizes.
Perfectly centered on square white canvas."

VARIATION D — Horizontal lockup (for email signatures, decks):
"AI.MeD geometric hexagonal icon on left + 'AI.MeD' wordmark on right.
Icon height matches cap-height of wordmark text.
8px gap between icon and wordmark.
White background, navy text. Horizontal layout only."
```

### 7B — HelixOS™ Platform Logo

```
LOGO PROMPT 7B — HelixOS™ Platform Logo

"Platform logomark for 'HelixOS™' — an AI-native operating system for 
multi-omics biological research.

ICON CONCEPT: Combine two visual ideas:
1. Layered OS/platform architecture: 3-4 horizontal layers stacked with 
   subtle depth, suggesting data layers and infrastructure stacks
2. A simplified helix or wave threading through or connecting the layers — 
   suggesting biological data flowing through a system

Colors: Electric Violet (#7C3AED) as the primary, Deep Navy (#1A2456) for 
structure/background elements, Teal (#06B6D4) as the helix/flow accent.

Style: Flat vector, geometric precision. Similar sophistication to 
VSCode, Datadog, or Weights & Biases logos — clean enterprise software aesthetic.
No text. Works at 512px and 32px. White or transparent background."

WORDMARK:
"'HelixOS' wordmark — 'Helix' in bold geometric sans-serif navy (#1A2456), 
'OS' in same weight but violet (#7C3AED), slightly differentiated.
Small ™ superscript. Clean, no embellishment. Enterprise software feel."
```

### 7C — Regulon™ Platform Logo

```
LOGO PROMPT 7C — Regulon™ Platform Logo

"Platform logomark for 'Regulon™' — an AI-native compliance operating system 
that continuously monitors regulatory readiness.

ICON CONCEPT: A stylized compliance knowledge graph or network — 
nodes connected in a hierarchical flow suggesting: Regulation → Controls → Evidence → Audit.
Alternatively, a shield integrated with a circuit/node pattern, 
but modern and minimal (not a traditional security shield).
The icon should convey: always-on vigilance, connected intelligence, structured control.

Colors: Electric Violet (#7C3AED) primary, 
with Deep Navy (#1A2456) and White accents.

Style: Precise, trustworthy, regulatory-grade feeling. 
Not aggressive or alarming — calm authority.
Think: the confidence of a Veeva or ServiceNow visual identity, 
but AI-native and more forward-looking.
Flat vector. White background."

WORDMARK:
"'Regulon' in bold geometric sans-serif. Primary color: violet (#7C3AED).
Clean, authoritative. ™ mark included. Pairs well with HelixOS™ wordmark in weight."
```

### 7D — AI Molecule Foundry™ Platform Logo

```
LOGO PROMPT 7D — AI Molecule Foundry™ Platform Logo

"Platform logomark for 'AI Molecule Foundry™' — an enterprise AI drug 
discovery platform combining generative molecular design with closed-loop validation.

ICON CONCEPT: Abstract representation of the closed-loop workflow:
A circular or cyclical icon suggesting: Design → Simulate → Score → Optimize → Retrain
Perhaps a molecular structure (3-4 atom nodes connected) arranged in a 
subtle orbital or loop pattern. The 'foundry' concept of transformation 
and refinement should be subtly present — precision craftsmanship.

Colors: Amber/Gold (#F59E0B) as the primary accent (differentiating from other platforms),
Deep Navy (#1A2456) for structure, Teal (#06B6D4) for node connections.

Style: Scientific elegance. More conceptual than literal — not a flask or test tube.
The visual weight should feel substantial — this is an enterprise platform, not a consumer app.
Flat vector. White or transparent background."

WORDMARK:
"'AI Molecule Foundry' — compact typographic treatment.
'AI' in monospace or tech-flavored font in gold (#F59E0B).
'Molecule Foundry' in bold geometric sans-serif in deep navy.
May be set in two lines for logo lockup:
  AI [gold]
  Molecule Foundry [navy]
™ mark included."
```

### 7E — SynaptMed™ Platform Logo

```
LOGO PROMPT 7E — SynaptMed™ Platform Logo

"Platform logomark for 'SynaptMed™' — a smart pharmacy operations platform 
for single stores and chains, built for offline-first real-world conditions.

ICON CONCEPT: 
A stylized connection/synapse icon — suggesting the 'synaptic' connection 
between pharmacy inventory, billing, and customer relationships.
Could be a simplified neural node connection or a cross between 
a pharmacy cross symbol and a data connection node.
The icon should feel: approachable and practical (it serves pharmacy owners, 
not just enterprise IT) while still modern and tech-forward.

Colors: Teal (#06B6D4) as primary (differentiating from the violet platforms),
White and Deep Navy as supporting colors.

Style: Friendly professional — warmer than the other platform logos, 
more approachable. Works on mobile app icons, physical signage, 
and website cards alike.
Flat vector. White background."

WORDMARK:
"'SynaptMed' — 'Synapt' in bold teal (#06B6D4), 'Med' in deep navy.
Clean, modern, approachable. ™ mark. Slightly warmer typographic feel 
than the other platforms without losing professionalism."
```

### 7F — Social Media & Brand Assets

```
LOGO PROMPT 7F — LinkedIn Banner + Social Assets

LINKEDIN BANNER (1584×396px):
"Professional LinkedIn company page banner for AI.MeD.
Left side: AI.MeD logo lockup (dark version) on deep navy background.
Center: Abstract flowing visual — subtle node network or geometric grid fading 
from left (navy) to right (lighter violet/lavender).
Right side: White text on dark:
  Line 1 (large, bold): 'Transforming Healthcare Through Intelligent Platforms'
  Line 2 (smaller): 'HelixOS™ | Regulon™ | AI Molecule Foundry™ | SynaptMed™'
Bottom-right corner: 'ai.med' or your domain in small teal text.
Horizontal purple/violet gradient wave element running through the middle 
(like the pitch deck visual language).
Style: Premium enterprise tech company — similar to AWS, Snowflake, or Databricks 
LinkedIn banners."

TWITTER/X HEADER (1500×500px):
"Same visual language as LinkedIn banner but wider aspect ratio.
More minimal — just the logo, tagline, and abstract background. Less text."

EMAIL SIGNATURE BANNER (600×150px):
"AI.MeD email signature banner — horizontal.
Left: Logo (light version on white background).
Center: Name, title, company placeholder text area.
Right: Four platform names in small violet text, website URL in teal.
Clean, minimal, white background."

FAVICON (32×32px and 192×192px):
"AI.MeD favicon — the geometric hexagonal faceted icon only.
Must be crystal clear at 32px.
Two color version (navy + teal) on white background.
No text."
```

---

## PART 8 — SEO & LEGAL PAGES

```
PROMPT 8 — SEO, Schema & Analytics Setup

Generate for every page of the AI.MeD website:

META TAGS (exact content for each page):
- Home: "AI.MeD — AI-Native Platforms for Life Sciences & Healthcare | HelixOS™ | Regulon™"
  Description: "AI.MeD builds AI-native platforms for life sciences and healthcare enterprises. 
  HelixOS™ for multi-omics, Regulon™ for compliance, AI Molecule Foundry™ for drug discovery, 
  SynaptMed™ for pharmacy operations."
- Platforms: "Our Platforms — HelixOS™, Regulon™, AI Molecule Foundry™, SynaptMed™ | AI.MeD"
- Services: "AI-Powered Research & Compliance Services | AI.MeD"
- About: "About AI.MeD — Leadership, Vision & Team | Life Sciences AI Company"
- Research: "Research & Publications | AI.MeD Molecule Foundry"
- Contact: "Contact AI.MeD — Demo, PoC & Partnership Enquiries"

SCHEMA.ORG JSON-LD BLOCKS:
Organization schema (homepage):
{
  "@type": "Organization",
  "name": "AI.MeD",
  "description": "AI-native platforms for Life Sciences, Drug Discovery & Regulated Healthcare",
  "url": "[your domain]",
  "foundingLocation": "Hyderabad, Telangana, India",
  "knowsAbout": ["Multi-omics", "Regulatory Compliance", "Drug Discovery AI", "Pharmacy Operations"],
  "sameAs": ["[LinkedIn URL]", "[GitHub URL]"]
}

SoftwareApplication schema (one per platform):
HelixOS™, Regulon™, AI Molecule Foundry™, SynaptMed™

GOOGLE ANALYTICS 4:
Include gtag.js snippet with placeholder: G-XXXXXXXXXX
Comment: "Replace G-XXXXXXXXXX with your GA4 Measurement ID from analytics.google.com"

SITEMAP.XML (all 8 pages with priority values)
ROBOTS.TXT (allow all, include sitemap reference)

PROMPT 9 — Privacy Policy & Terms of Use

PRIVACY POLICY — India DPDP Act 2023 + GDPR compliant template:
Data collected: Name, email, organization (contact form only) + Google Analytics (anonymized)
Third parties disclosed: Formspree (form processing), Google Analytics 4
Data retention: 12 months for inquiry data
User rights: access, correction, deletion via [email]
No data sold to advertisers — state explicitly
Cookie policy: session + GA4 analytics cookies with opt-out
Governing law: India (IT Act 2000 + DPDP Act 2023) + GDPR for EU visitors
Contact: [email] | AI.MeD | Hyderabad, Telangana

TERMS OF USE:
- Informational purposes only — not medical, clinical, or investment advice
- Platform names (HelixOS™, Regulon™, AI Molecule Foundry™, SynaptMed™) are trademarks of AI.MeD
- Research content is for general awareness — full methodology in linked publications
- Governing law: Courts of Hyderabad, Telangana, India
- Include visible "Template — consult legal counsel before publishing" banner during development
```

---

## QUICK REFERENCE TABLE

| Task | Tool | Notes |
|---|---|---|
| Website code generation | Claude (this chat) | Run prompts 1–9 sequentially |
| Logo variations | Midjourney v6 or Ideogram v2 | Existing logo already established — use for sub-brand/platform logos |
| Form email handling | Formspree.io | Free tier, GoDaddy compatible, zero backend |
| Slack notifications | Zapier + Formspree webhook | Forward inquiries to team channel |
| Analytics | Google Analytics 4 | Free, add G-XXXXXXXX ID |
| Hosting | GoDaddy File Manager → public_html | Upload files directly |
| Business email | GoDaddy Professional Email | Match your registered domain |
| Performance audit | Google PageSpeed Insights | Run before launch |
| Accessibility audit | axe DevTools Chrome extension | Free, WCAG 2.1 check |

## EXECUTION ORDER

1. **Prompt 1** → Design system CSS
2. **Prompt 2** → Nav + Footer
3. **Prompts 3A–3G** → All homepage sections
4. **Prompts 4A–4E** → All inner pages
5. **Prompt 5** → Full site assembly + GoDaddy checklist
6. **Prompt 6** → Formspree + Zapier email setup
7. **Prompts 7A–7F** → Platform logos + social assets (run in Midjourney/Ideogram simultaneously)
8. **Prompts 8–9** → SEO + legal pages
9. **Upload to GoDaddy** → Follow checklist in Prompt 5
10. **Test end-to-end** → Submit contact form, verify email, check all pages on mobile + desktop

---

*AI.MeD Website Prompt Guide v2.0 | Based on actual logos, website content doc v0.3, 
investor pitch deck, and executive proposal | February 2026*

*Platforms: HelixOS™ | Regulon™ | AI Molecule Foundry™ | SynaptMed™*
*All platform names are trademarks of AI.MeD. All rights reserved.*
