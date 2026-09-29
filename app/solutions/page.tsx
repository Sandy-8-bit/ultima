import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["solutions"].title, pageInfo["solutions"].description, "/solutions");
export default function Page() { return <StandardPage slug="solutions"/>; }
