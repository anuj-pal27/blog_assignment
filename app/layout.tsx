import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Website',
  description: 'A modern blog website with rich text editor and MongoDB integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <a href="/" className="text-xl font-bold text-gray-900">
                    Blog Website
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/admin" className="text-gray-600 hover:text-gray-900">
                    Admin Dashboard
                  </a>
                  <a href="/admin/create" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Create Post
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 