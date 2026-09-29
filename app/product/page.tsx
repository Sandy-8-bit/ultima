import { StandardPage, pageInfo } from "@/components/sections/pages";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor(pageInfo["product"].title, pageInfo["product"].description, "/product");
export default function Page() { return <StandardPage slug="product"/>; }
