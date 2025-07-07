import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Sidebar from './Sidebar';
import { ProgressProvider } from '../contexts/ProgressContext';
import { searchContent, SearchResult } from '../utils/search';
import SearchResults from './SearchResults';

const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSearchResults(searchContent(query));
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.pageX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = startWidth + (e.pageX - startX);
        if (newWidth >= 200 && newWidth <= 600) {
          setSidebarWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    if (isResizing) {
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }
  }, [isResizing]);

  // Handle escape key to close search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeSearch();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <ProgressProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleSidebar} 
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle sidebar"
              >
                {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
              <a href="/" className="flex items-center gap-2">
                <div className="text-primary font-bold text-xl">Azure</div>
                <div className="text-lg">AZ-900 Study Guide</div>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleSearch}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 flex items-start justify-center pt-20 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl animate-slide-down">
              <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 p-4">
                <Search size={20} className="text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search topics..."
                  className="w-full bg-transparent outline-none"
                  autoFocus
                />
                <button 
                  onClick={closeSearch}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              <SearchResults 
                results={searchResults} 
                onResultClick={closeSearch}
              />
            </div>
          </div>
        )}

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside 
            ref={sidebarRef}
            className={`shrink-0 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-all duration-300 ease-in-out ${
              sidebarOpen ? '' : 'w-0'
            }`}
            style={{ width: sidebarOpen ? `${sidebarWidth}px` : 0 }}
          >
            <Sidebar />
            {/* Resize handle */}
            <div
              ref={resizeRef}
              className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-primary/50 transition-colors"
              onMouseDown={handleMouseDown}
            />
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="container mx-auto">
              <Outlet />
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4">
          <div className="container text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 AZ-900 Study Guide. Not affiliated with Microsoft.</p>
          </div>
        </footer>
      </div>
    </ProgressProvider>
  );
};

export default Layout;