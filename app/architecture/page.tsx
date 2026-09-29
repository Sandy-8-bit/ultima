import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["architecture"].title, pageInfo["architecture"].description, "/architecture");
export default function Page() { return <StandardPage slug="architecture"/>; }
