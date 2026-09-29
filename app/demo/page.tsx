import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["demo"].title, pageInfo["demo"].description, "/demo");
export default function Page() { return <StandardPage slug="demo"/>; }
