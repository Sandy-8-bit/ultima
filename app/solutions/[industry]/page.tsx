import { notFound } from "next/navigation";
import { industries } from "@/data/usecases";
import { IndustryPage } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export function generateStaticParams(){return industries.map(i=>({industry:i.slug}));}
export async function generateMetadata({params}:{params:Promise<{industry:string}>}){const {industry}=await params;const i=industries.find(i=>i.slug===industry);return i?metadataFor(`${i.name} solutions`,i.solution,`/solutions/${industry}`):{};}
export default async function Page({params}:{params:Promise<{industry:string}>}){const {industry}=await params;if(!industries.some(i=>i.slug===industry))notFound();return <IndustryPage slug={industry}/>;}
