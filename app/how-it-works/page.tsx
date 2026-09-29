import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["how-it-works"].title, pageInfo["how-it-works"].description, "/how-it-works");
export default function Page() { return <StandardPage slug="how-it-works"/>; }
