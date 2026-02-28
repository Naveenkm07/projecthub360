<div align="center">

# ⚡ ProtoBuild Labs

### *Premium Engineering Project Development Platform*

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%2B%20Firestore-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com)
[![Razorpay](https://img.shields.io/badge/Razorpay-Payments-02042B?style=for-the-badge&logo=razorpay)](https://razorpay.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-3D%20Scene-black?style=for-the-badge&logo=three.js)](https://threejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)](LICENSE)

<br/>

> **Where engineering students get production-ready projects — Major, Mini & Prototype — delivered with full source code, documentation, and technical support.**

<br/>

![ProtoBuild Labs Hero](https://img.shields.io/badge/🚀_Live_Demo-Coming_Soon-4DA6FF?style=for-the-badge)

</div>

---

## ✨ What is ProtoBuild Labs?

ProtoBuild Labs is a **full-stack SaaS platform** connecting engineering students with professional project development services. Students can browse, request, and pay for custom engineering projects directly through the platform.

The platform is built with a **premium dark + light-blue hybrid design**, featuring interactive 3D visuals, glassmorphism UI, and smooth animations — delivering a high-end startup feel from day one.

---

## 🎯 Features at a Glance

| Category | Features |
|----------|----------|
| 🏠 **Homepage** | 3D floating hero, animated counters, services cards, testimonials, contact form |
| 🔐 **Auth** | Firebase email/password + Google Sign-In, sign up flow, protected routes |
| 🎓 **Student Dashboard** | View all orders, track status (pending / active / completed) |
| 📁 **Project Showcase** | Filterable, searchable grid of engineering projects |
| 💳 **Payments** | Razorpay checkout integration with server-side order creation + signature verification |
| 🛡️ **Admin Panel** | Full CRUD for projects, view all orders and contact inquiries |
| 📬 **Contact API** | Form submissions saved to Firestore with email + WhatsApp number |
| 🌐 **Pages** | Home, Services, Projects, Login, Dashboard, Admin Login, Admin Dashboard |
| 📱 **Responsive** | Fully mobile-optimised across all pages |
| ⚡ **SEO Ready** | Next.js metadata API, semantic HTML, proper page titles |

---

## 🖥️ Tech Stack

```
Frontend          →  Next.js 14 (App Router) + React 18
Styling           →  Tailwind CSS + Custom CSS (glassmorphism, glow)
3D Graphics       →  React Three Fiber + Three.js + @react-three/drei
Animations        →  Framer Motion (scroll-triggered, page transitions)
Icons             →  Lucide React
Auth & Database   →  Firebase (Authentication + Firestore)
Payments          →  Razorpay (server-side API routes)
HTTP Client       →  Axios
Fonts             →  Google Fonts (Inter + Outfit)
```

---

## 📂 Project Structure

```
protobuild-labs/
├── app/
│   ├── page.jsx                    # Homepage (all sections)
│   ├── layout.jsx                  # Root layout + Navbar + Auth
│   ├── globals.css                 # Global dark theme styles
│   ├── login/page.jsx              # Student sign in / sign up
│   ├── dashboard/page.jsx          # Student order dashboard
│   ├── projects/page.jsx           # Browse all projects
│   ├── services/page.jsx           # Services detail page
│   ├── admin/
│   │   ├── login/page.jsx          # Admin restricted login
│   │   └── dashboard/page.jsx      # Admin CRUD panel
│   └── api/
│       ├── contact/route.js        # Save contact form → Firestore
│       └── razorpay/
│           ├── create-order/route.js   # Create Razorpay order (server)
│           └── verify/route.js         # HMAC signature verification
│
├── components/
│   ├── Navbar.jsx                  # Glassmorphism navbar with auth state
│   ├── Hero.jsx                    # 3D hero section
│   ├── FloatingScene.jsx           # React Three Fiber 3D canvas
│   ├── Services.jsx                # Service cards + animated counters
│   ├── WhyUs.jsx                   # Feature highlights + checklist
│   ├── ProjectShowcase.jsx         # Featured projects preview
│   ├── Testimonials.jsx            # Student review cards
│   ├── Contact.jsx                 # Contact form with API call
│   ├── Footer.jsx                  # Full footer with links
│   └── AnimatedCounter.jsx         # Scroll-triggered number counter
│
├── context/
│   └── AuthContext.jsx             # Firebase auth state + hooks
│
├── lib/
│   ├── firebase.js                 # Firebase init (client-side only)
│   └── firestore.js                # Firestore CRUD helpers
│
├── .env.example                    # Environment variable template
├── next.config.mjs                 # Next.js config (Razorpay external)
├── tailwind.config.js              # Tailwind theme + animations
└── jsconfig.json                   # @ path alias config
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Naveenkm07/projecthub360.git
cd projecthub360
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in your credentials:

```env
# Firebase — https://console.firebase.google.com
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Admin email (must be a registered Firebase user)
NEXT_PUBLIC_ADMIN_EMAIL=admin@yourdomain.com

# Razorpay — https://dashboard.razorpay.com
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
```

### 4. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com) → **Create Project**
2. Enable **Authentication** → Sign-in methods → Email/Password + Google
3. Enable **Firestore Database** → Start in test mode
4. Create these Firestore collections:

| Collection | Purpose |
|------------|---------|
| `projects` | Managed by admin — project listings |
| `contacts` | Saved from contact form submissions |
| `orders` | Created after successful Razorpay payment |

---

## 💳 Razorpay Integration

The payment flow works as follows:

```
Student clicks "Pay" 
    → Frontend calls /api/razorpay/create-order (server-side)
    → Razorpay order created securely
    → Razorpay checkout popup opens
    → On success → /api/razorpay/verify validates HMAC signature
    → Verified order saved to Firestore
```

Get your test keys from [Razorpay Dashboard](https://dashboard.razorpay.com) → Settings → API Keys.

---

## 🛡️ Admin Panel

Access the admin panel at `/admin/login` using the email set in `NEXT_PUBLIC_ADMIN_EMAIL`.

**Admin capabilities:**
- ➕ Add new projects (title, category, description, tags, price, featured flag)
- ✏️ Edit existing projects
- 🗑️ Delete projects  
- 📋 View all student orders with status
- 📬 View all contact form inquiries

---

## 📄 Pages Overview

| Route | Description |
|-------|-------------|
| `/` | Homepage — 3D hero, services, projects, testimonials, contact |
| `/services` | Detailed services page |
| `/projects` | All projects — searchable + filterable by category |
| `/login` | Student sign in / sign up + Google OAuth |
| `/dashboard` | Student order history (protected route) |
| `/admin/login` | Admin-only login portal |
| `/admin/dashboard` | Admin CRUD dashboard (protected route) |

---

## 🎨 Design Highlights

- **Dark + Light Blue Hybrid Theme** — Deep navy backgrounds with `#4DA6FF` neon accents
- **Glassmorphism** — Frosted glass cards throughout using `backdrop-filter: blur`
- **3D Interactive Hero** — React Three Fiber canvas with floating neon shapes and starfield
- **Scroll Animations** — Framer Motion `whileInView` on every section
- **Animated Counters** — 60fps count-up on scroll using `useInView`
- **Glow Buttons** — CSS `box-shadow` pulse on hover
- **Custom Scrollbar** — Themed to match primary blue accent

---

## 📦 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Set all environment variables from `.env.example` in the **Vercel dashboard** under Project → Settings → Environment Variables.

### Manual Build

```bash
npm run build
npm start
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create a branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for engineering students across India**

*ProtoBuild Labs — We Build Engineering Projects That Stand Out*

⭐ **Star this repo if it helped you!** ⭐

</div>
