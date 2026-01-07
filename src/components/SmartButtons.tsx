// ARCHIVO: src/components/SmartButtons.tsx
import React from 'react';
import { SERVICES_MENU } from '../data/menuData';

export default function SmartButtons() {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {SERVICES_MENU.map((section) => {
                const Icon = section.icon;
                return (
                    <a
                        key={section.id}
                        href={`/servicios/${section.id}`} // Link to the main section page
                        className="
              group flex items-center gap-2 px-4 py-2 rounded-full
              bg-white border border-zinc-200 text-zinc-600
              dark:bg-white/5 dark:border-white/10 dark:text-zinc-300
              text-sm font-medium
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-lg
              hover:bg-zinc-50 hover:border-blue-300 hover:text-blue-600 hover:shadow-blue-500/20
              dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:text-white dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            "
                    >
                        <Icon className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
                        <span>{section.title}</span>
                    </a>
                );
            })}
        </div>
    );
}
