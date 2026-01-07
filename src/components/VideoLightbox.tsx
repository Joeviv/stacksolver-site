// ARCHIVO: src/components/VideoLightbox.tsx
import { useState } from 'react';
import { XMarkIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

interface VideoLightboxProps {
    vimeoId: string;
    title: string;
    thumbnailUrl?: string;
}

export default function VideoLightbox({ vimeoId, title, thumbnailUrl }: VideoLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = () => setIsOpen(true);
    const closeLightbox = () => setIsOpen(false);

    // Thumbnail por defecto de Vimeo
    const defaultThumbnail = `https://vumbnail.com/${vimeoId}.jpg`;

    return (
        <>
            {/* Thumbnail Clickeable */}
            <div
                onClick={openLightbox}
                className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-video bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
            >
                <img
                    src={thumbnailUrl || defaultThumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay con Play Button */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <PlayCircleIcon className="w-20 h-20 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
                </div>
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón Cerrar */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-200 group"
                            aria-label="Cerrar video"
                        >
                            <XMarkIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Video Embed */}
                        <iframe
                            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={title}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
