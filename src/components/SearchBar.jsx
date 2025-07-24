import { motion } from "framer-motion";

export default function SearchBar({ onSearch  }) {
  return (
    <motion.div
      className="max-w-xl mx-auto mt-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for images..."
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
    </motion.div>
  );
}