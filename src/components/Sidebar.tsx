// ARCHIVO: src/components/Sidebar.tsx
import React, { useState, useEffect } from 'react';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon,
  ChevronDownIcon, 
  ChevronRightIcon, 
  Bars3Icon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import { SERVICES_MENU } from '../data/menuData';

export default function Sidebar() {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleMenu = (menuKey: string) => {
    setExpandedMenus(prev => ({
        ...prev,
        [menuKey]: !prev[menuKey]
    }));
  };

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/');

  return (
    <>
      {/* Header Móvil */}
      <div className="sticky top-0 z-40 md:hidden flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                <CodeBracketIcon className="w-4 h-4 text-white" />
             </div>
            <span className="font-bold text-zinc-900 dark:text-white">StackSolver</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
            <Bars3Icon className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay Móvil */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:top-0 top-0 h-screen
      `}>
        {/* Logo */}
        <a href="/" className="p-8 flex-shrink-0 cursor-pointer block group">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <CodeBracketIcon className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">StackSolver</h1>
            </div>
            <p className="text-xs text-zinc-500 pl-11">Tech Solutions & AI</p>
        </a>

        {/* Navegación Scrollable */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto pb-20 custom-scrollbar">
            <div className="pb-4">
                <a 
                    href="/"
                    className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-lg transition-all duration-200 mb-2 ${isActive('/') && currentPath === '/' ? 'bg-blue-50 text-blue-600 dark:bg-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                >
                    <HomeIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-left">Inicio</span>
                </a>

                <p className="px-4 text-xs font-bold text-zinc-600 uppercase tracking-wider mb-3 mt-6">Servicios</p>
                
                {SERVICES_MENU.map(section => {
                    const Icon = section.icon;
                    const isExpanded = expandedMenus[section.id];
                    const isSectionActive = section.subsections.some(sub => isActive(`/servicios/${section.id}/${sub.id}`));

                    return (
                        <div key={section.id} className="mb-1">
                            <button
                                onClick={() => toggleMenu(section.id)}
                                className={`
                                    w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 group text-left
                                    ${isSectionActive ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'}
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-5 h-5 flex-shrink-0 transition-transform ${isSectionActive ? 'text-blue-600' : 'text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300'}`} />
                                    <span className="font-medium tracking-wide leading-tight">{section.title}</span>
                                </div>
                                {isExpanded 
                                    ? <ChevronDownIcon className="w-4 h-4 opacity-70 flex-shrink-0 ml-2" /> 
                                    : <ChevronRightIcon className="w-4 h-4 opacity-70 flex-shrink-0 ml-2" />
                                }
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="ml-4 pl-4 border-l border-zinc-800 mt-1 space-y-1">
                                    {section.subsections.map(sub => (
                                        <a
                                            key={sub.id}
                                            href={`/servicios/${section.id}/${sub.id}`}
                                            className={`
                                                block w-full text-left px-4 py-2.5 rounded-md text-sm transition-colors leading-tight
                                                ${isActive(`/servicios/${section.id}/${sub.id}`)
                                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 border border-blue-200 dark:border-blue-600/20' 
                                                    : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'}
                                            `}
                                        >
                                            {sub.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}

                <p className="px-4 text-xs font-bold text-zinc-500 dark:text-zinc-600 uppercase tracking-wider mb-3 mt-6">Empresa</p>
                 <a 
                    href="/nosotros"
                    className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-lg transition-all duration-200 ${isActive('/nosotros') ? 'bg-blue-50 text-blue-600 dark:bg-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                >
                    <UserGroupIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-left">Nosotros</span>
                </a>
                 <a 
                    href="/contacto"
                    className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-lg transition-all duration-200 ${isActive('/contacto') ? 'bg-blue-50 text-blue-600 dark:bg-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                >
                    <ChatBubbleLeftRightIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-left">Contacto</span>
                </a>
            </div>
        </nav>
      </aside>
    </>
  );
}