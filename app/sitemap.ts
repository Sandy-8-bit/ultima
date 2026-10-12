import type { MetadataRoute } from "next";
import { features } from "@/data/features";
import { siteUrl } from "@/lib/seo";
export default function sitemap():MetadataRoute.Sitemap {if(!siteUrl)return [];return ["","features","benefits","demo","faq","about","contact","privacy","terms",...features.map(f=>`features/${f.slug}`)].map(path=>({url:`${siteUrl}/${path}`,changeFrequency:"monthly",priority:path===""?1:.7}));}
