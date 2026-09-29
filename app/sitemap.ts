import type { MetadataRoute } from "next";
import { features } from "@/data/features";
import { industries } from "@/data/usecases";
import { siteUrl } from "@/lib/seo";
export default function sitemap():MetadataRoute.Sitemap {if(!siteUrl)return [];return ["","product","features","how-it-works","architecture","solutions","benefits","integrations","demo","roadmap","faq","about","contact","privacy","terms",...features.map(f=>`features/${f.slug}`),...industries.map(i=>`solutions/${i.slug}`)].map(path=>({url:`${siteUrl}/${path}`,changeFrequency:"monthly",priority:path===""?1:.7}));}
