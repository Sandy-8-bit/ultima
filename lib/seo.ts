import type { Metadata } from "next";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export function metadataFor(title: string, description: string, path: string): Metadata {
  const clean=title.replaceAll("\n"," ");
  return { title:clean,description,...(siteUrl?{alternates:{canonical:`${siteUrl}${path}`}}:{}),openGraph:{title:`${clean} | Wise Ultima`,description,type:"website",...(siteUrl?{url:`${siteUrl}${path}`}:{})} };
}
