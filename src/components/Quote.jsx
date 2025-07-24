import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [bgImage, setBgImage] = useState("");


  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);

      
      
    } catch (err) {
      setQuote("Failed to load quote");
      setAuthor("");
            setBgImage("");
    }
  };
 
  useEffect(() => {
    fetchQuote();
  }, []);

   return (
    <motion.div
      className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xl mx-auto mt-8 dark:bg-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-xl italic"
        key={quote} // to re-animate on quote change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        "{quote}"
      </motion.p>
      <p className="mt-4 text-sm font-semibold">— {author}</p>
      <button
        onClick={fetchQuote}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        New Quote
      </button>
    </motion.div>
  );
}