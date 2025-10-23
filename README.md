# SkillSwap

SkillSwap is a vibrant learning platform that connects local learners with trusted skill providers. Whether you're picking up guitar, mastering yoga, or improving your spoken English — SkillSwap makes it easy to browse, book, and grow.

---

## Live Link

Live: https://my-skillswap-83520.web.app/

---

## Purpose

To create a warm, engaging, and responsive Single Page Application (SPA) where users can:

- Discover skill providers in their area
- Book sessions and rate experiences
- Sign up, log in, and manage their profile securely
- Enjoy delightful UI/UX with animations and responsive design

---

## Key Features

- Hero Slider with dynamic content using Swiper
- Responsive design powered by Tailwind CSS and DaisyUI
- Authentication with Firebase (Email/Password + Google Login)
- Toast notifications for feedback using react-hot-toast
- Animated sections with AOS for smooth transitions
- Marquee for scrolling success stories
- SPA routing with react-router-dom
- Iconography using react-icons
- Profile management with image upload and live updates

---

## NPM Packages Used

| Package               | Purpose                                                                 |
|-----------------------|-------------------------------------------------------------------------|
| `tailwindcss`         | Utility-first CSS framework for styling                                 |
| `react-router-dom`    | SPA routing between pages like Home, Login, Signup, My Profile          |
| `firebase`            | Authentication and profile updates                                      |
| `react-hot-toast`     | Toast notifications for success/error messages                          |
| `swiper`              | Hero slider on the homepage                                             |
| `daisyui`             | Tailwind component library for faster UI development                    |
| `react-icons`         | Icons for buttons, inputs, and social links                             |
| `aos`                 | Animate on scroll for subtle UI animations                              |
| `react-fast-marquee`  | Scrolling success stories section                                       |

---

## Setup Instructions

```bash
git clone https://github.com/connectdipta/my-skillswap-project.git
cd skillswap
npm install
npm run dev
