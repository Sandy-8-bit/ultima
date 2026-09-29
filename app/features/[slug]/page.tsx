import { notFound } from "next/navigation";
import { features } from "@/data/features";
import { FeaturePage } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export function generateStaticParams(){return features.map(f=>({slug:f.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const f=features.find(f=>f.slug===slug);return f?metadataFor(f.name,f.description,`/features/${slug}`):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!features.some(f=>f.slug===slug))notFound();return <FeaturePage slug={slug}/>;}
