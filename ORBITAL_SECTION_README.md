# Orbital Section Component

## Overview
This component recreates the animated orbital section from the Kayzen Store website (https://kayzen-store.com/). It features a beautiful circular animation with profile avatars orbiting around a central circle.

## Features

### Visual Elements
- **Floating Top Card**: Displays "أوائل فاروق" (Awael Farouk) and "لغة عربية" (Arabic Language) with a floating animation
- **Central Blue Circle**: Large gradient blue circle with:
  - 5 animated green stars
  - Arabic text: "انطلق معنا نحو النجاح" (Start with us towards success)
- **Three Orbital Rings**: Concentric circles at different radii (180px, 280px, 380px)
- **8 Profile Avatars**: Circular profile images with white borders
- **Star Badges**: Blue circular badges with white stars on each profile
- **Connecting Lines**: Subtle gradient lines connecting profiles to the center
- **Gradient Background**: Beautiful blue-to-purple gradient background

### Animations
1. **Floating Animation**: Top card floats up and down smoothly (3s infinite)
2. **Orbital Rotation**: Profiles rotate around the center at different speeds:
   - Inner orbit (orbit 1): Speed 1.0
   - Middle orbit (orbit 2): Speed 0.8
   - Outer orbit (orbit 3): Speed 0.6
3. **Star Pulse**: Stars in the central circle pulse with staggered delays
4. **Badge Bounce**: Star badges have a subtle bounce animation
5. **Hover Effect**: Profiles scale up on hover (1.1x)

## Component Structure

```
OrbitalSection/
├── Top Card (floating)
├── Orbital Container
│   ├── Orbital Rings (3 concentric circles)
│   ├── Central Circle
│   │   ├── Stars (5 green stars)
│   │   └── Arabic Text
│   └── Orbiting Profiles (8 avatars)
│       ├── Profile Image
│       └── Star Badge
└── Connecting Lines (SVG)
```

## Usage

### Import the component:
```tsx
import OrbitalSection from "@/components/OrbitalSection";
```

### Add to your page:
```tsx
<OrbitalSection />
```

## Customization

### Change Profile Images
Edit the `profiles` array in the component:
```tsx
const profiles: Profile[] = [
  { 
    id: 1, 
    image: 'your-image-url.jpg', 
    name: 'Profile Name', 
    orbit: 1, // 1, 2, or 3
    startAngle: 0, // 0-360 degrees
    speed: 1 // rotation speed multiplier
  },
  // ... more profiles
];
```

### Adjust Orbital Radii
Modify the `getOrbitRadius` function:
```tsx
const getOrbitRadius = (orbit: number) => {
  switch (orbit) {
    case 1: return 180; // Inner orbit
    case 2: return 280; // Middle orbit
    case 3: return 380; // Outer orbit
  }
};
```

### Change Rotation Speed
Adjust the interval in the `useEffect`:
```tsx
setRotation((prev) => (prev + 0.2) % 360); // Change 0.2 to adjust speed
```

### Customize Colors
- **Background**: Modify `bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100`
- **Central Circle**: Change `from-blue-500 to-blue-600`
- **Stars**: Modify `text-green-400`
- **Badges**: Change `bg-blue-600`

### Change Text
Update the Arabic text in the component:
```tsx
{/* Top Card */}
<h3>أوائل فاروق</h3>
<p>لغة عربية</p>

{/* Central Circle */}
<p>انطلق معنا</p>
<p>نحو النجاح</p>
```

## Technical Details

### Dependencies
- React (hooks: useState, useEffect)
- Tailwind CSS
- tailwindcss-animate plugin

### Custom Animations
Added to `tailwind.config.ts`:
```ts
keyframes: {
  "float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
},
animation: {
  "float": "float 3s ease-in-out infinite",
}
```

### Performance
- Uses CSS transforms for smooth animations
- Interval updates every 50ms for smooth rotation
- Cleanup function prevents memory leaks

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS Grid and Flexbox support
- SVG support for connecting lines

## Responsive Design
- Uses `max-w-5xl` container for large screens
- `aspect-square` maintains circular layout
- Profiles scale appropriately with container

## File Location
`/vercel/sandbox/src/components/OrbitalSection.tsx`

## Integration
The component is integrated into the main Index page:
`/vercel/sandbox/src/pages/Index.tsx`

---

**Created**: November 11, 2025
**Inspired by**: Kayzen Store (https://kayzen-store.com/)
