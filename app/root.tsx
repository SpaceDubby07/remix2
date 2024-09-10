// Import necessary functions and types from Remix
import type { LinksFunction } from '@remix-run/node';
// Import components and hooks from Remix for client-side rendering
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  Outlet,
} from '@remix-run/react';

// Import the CSS file for the app
// The '?url' suffix is likely used by a bundler to handle the CSS import
import appStylesHref from './app.css?url';

// Links function: Defines the stylesheets for the app
// This is a Remix-specific function that allows you to programmatically
// include links in your app's <head>
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
];

// Main App component: This is the root component of the Remix application
export default function App() {
  // The component's JSX
  return (
    <html
      lang="en"
      className="h-screen bg-base-300 font-mono"
      data-theme="nord"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="description" content="Remix tutorial" />
        <title>Remix Site 1</title>
        {/* Meta component for Remix-managed meta tags */}
        <Meta />
        {/* Links component for Remix-managed link tags */}
        <Links />
      </head>
      <body>
        <Outlet />

        {/* ScrollRestoration component manages scroll position */}
        <ScrollRestoration />
        {/* Scripts component includes necessary Remix scripts */}

        <Scripts />
      </body>
    </html>
  );
}
