// ARCHIVO: src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import { SERVICES_MENU } from '../data/menuData';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/');

  const toggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform">
                <CodeBracketIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">StackSolver</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') && currentPath === '/' 
                    ? 'text-white bg-zinc-900' 
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                Inicio
              </a>

              {/* Services Dropdown */}
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                  onClick={() => toggleDropdown('services')}
                  className={`group inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeDropdown === 'services' || currentPath.startsWith('/servicios')
                      ? 'text-white bg-zinc-900'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <span>Servicios</span>
                  <ChevronDownIcon
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Panel */}
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md px-2 sm:px-0 lg:max-w-3xl z-50 transform -translate-x-1/4 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-zinc-900 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {SERVICES_MENU.map((section) => {
                           const Icon = section.icon;
                           return (
                            <div key={section.id} className="group relative flex items-start p-3 -m-3 rounded-lg hover:bg-zinc-800 transition-colors">
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-600/10 text-blue-500 sm:h-12 sm:w-12">
                                <Icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                    {section.title}
                                </p>
                                <div className="mt-1 space-y-1">
                                    {section.subsections.map(sub => (
                                        <a 
                                            key={sub.id}
                                            href={`/servicios/${section.id}/${sub.id}`}
                                            className="block text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                                        >
                                            {sub.title}
                                        </a>
                                    ))}
                                </div>
                                </div>
                            </div>
                           )
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/nosotros"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/nosotros') 
                    ? 'text-white bg-zinc-900' 
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                Nosotros
              </a>

              <a
                href="/contacto"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contacto') 
                    ? 'text-white bg-zinc-900' 
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              Inicio
            </a>

            <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-zinc-500 uppercase tracking-wider">
                    Servicios
                </div>
                {SERVICES_MENU.map(section => (
                    <div key={section.id} className="pl-4">
                        <div className="px-3 py-1 text-sm font-medium text-zinc-300">
                            {section.title}
                        </div>
                        <div className="pl-4 mt-1 space-y-1 border-l border-zinc-800 ml-3">
                            {section.subsections.map(sub => (
                                <a
                                    key={sub.id}
                                    href={`/servicios/${section.id}/${sub.id}`}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                        isActive(`/servicios/${section.id}/${sub.id}`)
                                            ? 'text-blue-400 bg-blue-900/10'
                                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                    }`}
                                >
                                    {sub.title}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <a
              href="/nosotros"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/nosotros') ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              Nosotros
            </a>

            <a
              href="/contacto"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contacto') ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
