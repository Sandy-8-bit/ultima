import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["privacy"].title, pageInfo["privacy"].description, "/privacy");
export default function Page() { return <StandardPage slug="privacy"/>; }
