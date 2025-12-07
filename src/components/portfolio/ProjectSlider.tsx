import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProjectSlider = ({ images, title }) => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!images || images.length === 0) return null;

    const showArrows = images.length > 1;

    return (
        <div className="relative w-full rounded-lg overflow-hidden">
            <img
                src={images[current]}
                alt={`${title} screenshot ${current + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500"
            />

            {/* Navigation arrows (only if more than one image) */}
            {showArrows && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                            idx === current ? "bg-primary" : "bg-white/50"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
