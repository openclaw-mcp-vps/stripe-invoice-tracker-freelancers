import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Tracker for Freelancers',
  description: 'Track Stripe invoices across multiple freelance clients. Dashboard showing payment status, overdue invoices, and client payment patterns.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e348241-e8d0-4988-b48c-09a583832c15"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
