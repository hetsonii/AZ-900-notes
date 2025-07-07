import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchResult } from '../utils/search';
import { BookOpen } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onResultClick }) => {
  const navigate = useNavigate();

  const handleResultClick = (path: string) => {
    navigate(path);
    onResultClick();
  };

  if (results.length === 0) {
    return (
      <div className="py-4">
        <p className="text-gray-500 dark:text-gray-400 text-center">
          No results found. Try different keywords.
        </p>
      </div>
    );
  }

  return (
    <div className="py-2 max-h-[60vh] overflow-y-auto">
      {results.map((result, index) => (
        <button
          key={index}
          className="w-full text-left p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-lg"
          onClick={() => handleResultClick(result.path)}
        >
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <BookOpen size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{result.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {result.description}
              </p>
              <span className="inline-block mt-2 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                {result.section}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchResults;