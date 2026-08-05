import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Metropolitan — Predictive Medicine",description:"Building the companies and talent required to solve medicine's longest-standing diseases at the molecular level."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
