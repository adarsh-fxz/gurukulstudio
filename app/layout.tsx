import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fredoka } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });

export const metadata: Metadata = {
  title: 'Gurukul Studio - Where Young Minds Grow & Shine',
  description: 'Nurturing children aged 2-18 through Creative Arts, Mental Growth, Physical Activities, Tech Skills, and Life Skills development.',
  keywords: 'kids studio, children education, creative arts, coding for kids, physical activities, mental growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fredoka.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}