// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-24 dark:bg-gray-900 sm:py-32">
      <div className="text-center">
        {/* Subtitle / Status Code */}
        <p className="text-base font-semibold text-blue-600 dark:text-blue-400">404</p>
        
        {/* Main Heading */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        
        {/* Description */}
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        
        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}