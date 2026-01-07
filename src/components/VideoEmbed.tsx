// ARCHIVO: src/components/VideoEmbed.tsx
import { useEffect, useState } from 'react';

interface VideoEmbedProps {
    vimeoId: string;
    title: string;
    delay?: number; // delay en segundos
}

export default function VideoEmbed({ vimeoId, title, delay = 0 }: VideoEmbedProps) {
    const [isVisible, setIsVisible] = useState(delay === 0);

    useEffect(() => {
        if (delay > 0) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [delay]);

    return (
        <div
            className={`relative rounded-2xl overflow-hidden aspect-video bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            {isVisible && (
                <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={title}
                />
            )}
        </div>
    );
}
