import { useState } from "react";
import QuoteBox from "./components/Quote";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import useDarkMode from "./hooks/DarkMode";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("nature");
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        <div>
          <h1 className="text-3xl font-bold">🎭 Quote & Image Explorer</h1>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
            Discover inspirational quotes and beautiful images!
          </p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded hover:opacity-80 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main className="px-4">
        <QuoteBox />
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
        <ImageGallery query={searchTerm} />
      </main>
    </div>
  );
}
