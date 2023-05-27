import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/layout/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import NavigationSidebar from "@/components/layout/side-nav"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="flex min-w-screen">
              <aside className="fixed top-0 left-0 flex-col flex-shrink-0 w-64 h-screen bg-background border-r border-b justify-between lg:flex">
                <NavigationSidebar />
              </aside>
              <div className="w-full pl-64 bg-secondary/50">
                <SiteHeader />
                <div className="w-full space-y-4 md:p-8 p-4 pt-6 h-screen overflow-auto">{children}</div>
              </div>
            </main>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
