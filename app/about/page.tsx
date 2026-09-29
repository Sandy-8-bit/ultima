import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["about"].title, pageInfo["about"].description, "/about");
export default function Page() { return <StandardPage slug="about"/>; }
