import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["benefits"].title, pageInfo["benefits"].description, "/benefits");
export default function Page() { return <StandardPage slug="benefits"/>; }
