import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["roadmap"].title, pageInfo["roadmap"].description, "/roadmap");
export default function Page() { return <StandardPage slug="roadmap"/>; }
