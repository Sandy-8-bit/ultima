import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["features"].title, pageInfo["features"].description, "/features");
export default function Page() { return <StandardPage slug="features"/>; }
