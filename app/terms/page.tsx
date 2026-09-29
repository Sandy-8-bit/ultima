import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["terms"].title, pageInfo["terms"].description, "/terms");
export default function Page() { return <StandardPage slug="terms"/>; }
