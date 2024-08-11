import '../index.css';

export const metadata = {
  title: 'nextjs-ssr-app-router-api',
  description: 'A Next.js app with SSR and App Router API',
  icons: {
    icon: '/images/favicon-16x16.png',
  },
};

export const generateViewport = () => ({
  width: 'device-width',
  initialScale: 1.0,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
