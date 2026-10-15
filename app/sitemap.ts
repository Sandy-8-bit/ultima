import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export default function sitemap():MetadataRoute.Sitemap {if(!siteUrl)return [];return ["","demo","faq","about","contact","privacy","terms"].map(path=>({url:`${siteUrl}/${path}`,changeFrequency:"monthly",priority:path===""?1:.7}));}
