import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["contact"].title, pageInfo["contact"].description, "/contact");
export default function Page() { return <StandardPage slug="contact"/>; }
