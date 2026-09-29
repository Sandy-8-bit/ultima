import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["faq"].title, pageInfo["faq"].description, "/faq");
export default function Page() { return <StandardPage slug="faq"/>; }
