# ProjectHub360 (ProtoBuild Labs) - Full Knowledge Base

This document serves as a deep-dive reference for all architecture, logic, styling, and design decisions within the ProtoBuild Labs repository. 

## 1. Core Architecture & Routing (Next.js App Router)
The application is built on Next.js 14 utilizing the `app/` directory (App Router). 
- **`app/page.jsx`**: The main entry point. It's a server component that renders purely presentational sections: `Hero`, `Services`, `WhyUs`, `ProjectShowcase`, `Testimonials`, `Contact`, and `Footer`.
- **`app/layout.jsx`**: Wraps the entire app in a dark theme (`bg-dark-900 text-slate-200`) and the `AuthProvider`. 
- **`app/admin/dashboard/page.jsx`**: The Admin Panel. Protected via `useAuth().isAdmin` (which checks if the logged-in Firebase email matches `NEXT_PUBLIC_ADMIN_EMAIL`). Includes full CRUD for projects, order viewing, and inquiry tracking.

## 2. Global State & Authentication
Authentication is handled entirely via Firebase Auth mapped through a React Context.
- **`context/AuthContext.jsx`**: Exports `AuthProvider` and `useAuth`. 
- **State provided**: `user`, `loading`, `isAdmin`, `signup`, `login`, `loginWithGoogle`, `logout`.
- **Admin Verification**: `const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;`

## 3. Database Layer (Firestore)
The file `lib/firestore.js` acts as the repository layer for all database interactions.
Collections and their primary schemas:
1. **`projects`**:
   - Fields: `title`, `category`, `description`, `tags` (Array/String), `emoji`, `price` (Number), `featured` (Boolean), `createdAt`, `updatedAt`.
2. **`orders`**:
   - Fields: `userId`, `projectTitle`, `amount`, `status` (default: 'pending'), `createdAt`.
3. **`contacts`**: 
   - Fields: `name`, `email`, `phone`, `college`, `projectType`, `message`, `status` (default: 'new'), `createdAt`.

## 4. Payment Gateway (Razorpay)
Payments are initiated from the client but handled server-side to prevent tampering.
- **`app/api/razorpay/create-order/route.js`**: 
  Accepts `amount`, `projectTitle`, `userId`. Converts `amount` from INR to paise (`amount * 100`). Creates the Razorpay order using the `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`.
- **`app/api/razorpay/verify/route.js`** *(Standard Razorpay Flow)*:
  Typically validates the `razorpay_signature` using crypto HMAC before writing the order to Firestore.

## 5. UI/UX Design System & Animations
The platform features a highly premium, neon-cyber aesthetic mapped in `tailwind.config.js`.

### 3D Canvas (React Three Fiber)
- **`components/FloatingScene.jsx`**: A transparent 3D canvas serving as the Hero background.
- It uses `@react-three/drei` and `@react-three/fiber` to render `NeonCube`, `GlassOctahedron`, `GlowTorus`, `PulsingRing`, and `SmallOrb`.
- Materials heavily utilize `metalness`, `roughness`, `emissive` properties, and `MeshDistortMaterial` for a frosted glass / liquid look.
- Uses `useFrame` for continuous rotation based on clock elapsed time.

### Tailwind Theme & Colors
- **Primary Color Scheme**: A vibrant blue spectrum (`primary-400: '#4DA6FF'`).
- **Dark Backgrounds**: `#070d1b` (Dark 900), `#0e1a33` (Dark 800).
- **Custom Animations**:
  - `float`: Vertical translation animation for UI cards.
  - `pulse-glow`: Custom box-shadow pulsing for buttons and inputs.
- **Custom Shadows**:
  - `glass`: `0 8px 32px rgba(77,166,255,0.12), inset 0 1px 0 rgba(255,255,255,0.1)`
  - `glow`: `0 0 30px rgba(77,166,255,0.4)`

## 6. Environment Variables
For the project to build and run, the following must exist in `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_ADMIN_EMAIL=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=
```

## 7. Developer Notes
- When adding new components, styling must rely on the established Tailwind classes (e.g., `glass`, `input-dark`) to maintain the visual hierarchy.
- Dependencies include `--legacy-peer-deps` due to the combination of Three.js, React 18, and Framer Motion. 
- API Routes should always remain in `app/api` to isolate server logic. 
- The project is highly modular. Any new page should compose sections out of the `components/` directory where possible.
