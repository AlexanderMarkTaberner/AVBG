import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_GALLERY_NAME + "'s Gallery",
  description: "A Very Basic Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
