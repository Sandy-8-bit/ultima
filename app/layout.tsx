import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/motion/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteUrl } from "@/lib/seo";
import "./globals.css";
const bodyFont=DM_Sans({variable:"--font-body",subsets:["latin"],display:"swap"});
const headingFont=Space_Grotesk({variable:"--font-heading",subsets:["latin"],display:"swap"});
const codeFont=JetBrains_Mono({variable:"--font-code",subsets:["latin"],display:"swap"});
export const metadata:Metadata={title:{default:"Wise Ultima — Intelligent Operations, Simplified!",template:"%s | Wise Ultima"},description:"Predict. Prevent. Act. AI-driven operations by Wise Work.",...(siteUrl?{metadataBase:new URL(siteUrl)}:{})};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${bodyFont.variable} ${headingFont.variable} ${codeFont.variable} antialiased`}><body className="bg-white font-sans text-ink"><TooltipProvider><MotionProvider><a href="#main-content" className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-md bg-ink px-5 py-3 text-white focus:translate-y-0">Skip to content</a><Navbar/><main id="main-content">{children}</main><Footer/></MotionProvider></TooltipProvider><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication",name:"Wise Ultima",applicationCategory:"BusinessApplication",description:"AI-driven predictive IT operations, prescriptive actions, and intelligent automation.",publisher:{"@type":"Organization",name:"Wise Work",url:"https://wisework.in"}})}}/></body></html>;}
