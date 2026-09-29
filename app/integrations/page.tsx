import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["integrations"].title, pageInfo["integrations"].description, "/integrations");
export default function Page() { return <StandardPage slug="integrations"/>; }
