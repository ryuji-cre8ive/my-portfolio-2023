import "./globals.css";
import Header from "./components/Header";
import Head from 'next/head'

export const metadata = {
  title: "ryuji-portfolio",
  twitter: {
    card: "summary_large_image",
    title: "Ryuji-portfolio",
    description: "Portfolio made by ryuji-cre8ive",
    creator: "@ryuji-cre8ive",
    images: ["https://ryuji-portfolio-2023.vercel.app/logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="twitter:image" content="https://ryuji-portfolio-2023.vercel.app/logo.png" />
      </Head>
      <body className="bg-stone-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
