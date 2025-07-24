// components/ImageGallery.jsx
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function ImageGallery({ query }) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [page, setPage] = useState(1);
    const observer = useRef();

    const lastImageRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading]
    );

    const fetchImages = async (term, pageNum = 1, append = false) => {
        if (!term) return;

        setLoading(true);
        setNoResults(false);

        try {
            const res = await fetch(
                `https://api.unsplash.com/search/photos?query=${term}&page=${pageNum}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
            );
            const data = await res.json();

            if (append) {
                setImages((prev) => [...prev, ...data.results]);
            } else {
                setImages(data.results);
            }

            setNoResults(data.results.length === 0);
        } catch (err) {
            console.error("Failed to fetch images", err);
            setImages([]);
            setNoResults(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setImages([]);
        setPage(1);
        fetchImages(query, 1, false);
    }, [query]);

    useEffect(() => {
        if (page === 1) return;
        fetchImages(query, page, true);
    }, [page]);

    return (
        <div className="p-4">
            {loading && page === 1 && (
                <div className="text-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 mx-auto"></div>
                    <p className="mt-2 text-blue-500">Loading...</p>
                </div>
            )}

            {noResults && !loading && (
                <div className="text-center py-10 text-gray-500">
                    No images found for "<strong>{query}</strong>".
                </div>
            )}

            {!noResults && (
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {images.map((img, i) => {
                        const isLast = i === images.length - 1;

                        return (
                            <motion.div
                                key={img.id}
                                className="relative group"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                ref={isLast ? lastImageRef : null}
                            >
                                <img
                                    src={img.urls.small}
                                    alt={img.alt_description}
                                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                                    className="w-full h-60 object-cover rounded-lg shadow-md"
                                />
                                <a
                                    href={`${img.links.download}?force=true`}
                                    download
                                    className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-transform duration-300 transform hover:scale-110 hover:bg-white hover:text-black"
                                >
                                    Download
                                </a>


                            </motion.div>
                        );
                    })}
                </motion.div>
            )}

            {loading && page > 1 && (
                <div className="text-center mt-4 text-blue-500">Loading more images...</div>
            )}
        </div>
    );
}
