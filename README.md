# Tanmay -  Developer Portfolio

A sleek, highly interactive, and visually striking personal portfolio built with modern web technologies. Designed to leave a lasting impression with dynamic animations, magnetic UI elements, and a heavily refined dark aesthetic.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Form Handling**: Web3Forms (No backend required)
- **Icons**: Lucide React
- **Language**: TypeScript

## Key Features

- **Magnetic UI Elements**: Custom physics-based magnetic components that follow the user's cursor for a premium, tactile feel.
- **Scroll-Linked Animations**: Complex viewport-triggered reveal animations utilizing Framer Motion.
- **Infinite Marquee**: A smooth, infinitely scrolling marquee section for technologies and skills.
- **Fully Functional Contact Form**: Integrated with Web3Forms to send emails directly to your inbox without a custom backend.
- **Legal Modal**: Custom animated modal for Privacy Policy and Terms of Service.
- **Responsive Design**: Meticulously crafted to look flawless on giant desktop monitors and mobile devices alike.
- **Advanced CSS Blending**: Custom CSS `mix-blend-mode` and masks to seamlessly integrate imagery into the background.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/TanmayK-23/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
   *You can get a free key by signing up at [Web3Forms](https://web3forms.com/).*

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Structure

- `src/components/sections/` - The core building blocks of the one-page layout (Hero, About, Services, Projects, Education, Contact).
- `src/components/ui/` - Reusable, highly interactive components (FadeIn, Magnet, AnimatedText, LegalModal).

## License

This project is open-source and available under the [MIT License](LICENSE).
