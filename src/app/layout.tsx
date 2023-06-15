import "@/styles/globals.css";
import React from "react";
import ReactQueryProvider from "@/providers/react-query-provider";
import { interDefault } from "@/styles/fonts";
import RootFooter from "@/components/root-footer";
import NavBar from "@/components/nav-bar";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata = {
  title: "Market Ticker",
  description: "Get Latest Updates about Crypto and Stocks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <body
          className={`${interDefault.className} container mx-auto scroll-smooth bg-gradient-to-r from-backgroundGradientStart to-backgroundGradientEnd text-primary-foreground`}
        >
          <NavBar />
          <main>{children}</main>
          <RootFooter />
        </body>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
