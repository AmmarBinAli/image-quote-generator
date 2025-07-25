<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/02b046d3-4513-443d-821d-43eada881bee" /># 🎭 Quote & Image Explorer

An elegant React app that lets you discover **random inspirational quotes** and browse **beautiful images** from Unsplash with seamless animations and infinite scrolling.

## ✨ Features

- 🎯 **Random Quote Generator** using `quotable.io`
- 🔍 **Image Search** from Unsplash API
- ♾️ **Infinite Scroll** to load more images
- 🎨 **Dark & Light Mode Toggle**
- 📥 **Download Button** for each image (direct download)
- 💫 **Smooth Animations** using Framer Motion
- ❌ Graceful fallback for no results & errors

## 🔧 Tech Stack

- **React + Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Unsplash API** for image search
- **Quotable API** for quotes

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/quote-image-explorer.git
cd quote-image-explorer

2. Install Dependencies
npm install

3. Setup Environment Variables
Create a .env file in the root with your Unsplash API key:
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
Get one for free from: https://unsplash.com/developers

npm run dev
```
 -🧠 Learnings & Concepts
useEffect for API fetching

useState for local state

fetch() with error handling

Tailwind CSS Grid + Flexbox

Conditional rendering (loading, not found)

Framer Motion for animations

Unsplash API integration

🔗 Live Preview
https://image-quote-generator.vercel.app/

🛠 Future Enhancements
📤 Share quotes via social media

❤️ Like/favorite images

📜 View full quote history
