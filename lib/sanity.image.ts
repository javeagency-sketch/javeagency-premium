import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { projectId, dataset } from "@/lib/sanity.client";

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!builder || !source) return undefined;
  return builder.image(source).auto("format").fit("max").url();
}
