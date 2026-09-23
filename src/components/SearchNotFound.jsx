import React from "react";
import { SearchX, RefreshCw } from "lucide-react";

const SearchNotFound = ({
  searchTerm = "",
  onReset,
  title = "No pets found",
  description = "We couldn't find anything matching your search criteria. Try checking for typos or adjusting your filters.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 my-8 text-center bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 max-w-md mx-auto">
      {/* Icon Badge */}
      <div className="p-4 mb-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-500 dark:text-gray-400">
        <SearchX className="w-10 h-10 stroke-[1.5]" />
      </div>

      {/* Main Heading */}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
        {title}
      </h3>

      {/* Search Term Display */}
      {searchTerm && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
          No results for <span className="text-primary font-bold">"{searchTerm}"</span>
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
        {description}
      </p>

      {/* Reset / Action Button */}
      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          Clear Search & Filters
        </button>
      )}
    </div>
  );
};

export default SearchNotFound;