import createImageUrlBuilder from "@sanity/image-url";
import { Link } from "@/sanity.types";
import { dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { createDataAttribute, CreateDataAttributeProps } from "next-sanity";
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'



const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: SanityImageSource | undefined) => {
  if (!source) return undefined
  return imageBuilder.image(source)
}
export function resolveOpenGraphImage(image: any, width = 1200, height = 627) {
  if (!image) return;
  const url = urlForImage(image)?.width(1200).height(627).fit("crop").url();
  if (!url) return;
  return { url, alt: image?.alt as string, width, height };
}

// Depending on the type of link, we need to fetch the corresponding page, post, or URL.  Otherwise return null.
export function linkResolver(link: Link | undefined) {
  if (!link) return null;

  // If linkType is not set but href is, lets set linkType to "href".  This comes into play when pasting links into the portable text editor because a link type is not assumed.
  if (!link.linkType && link.href) {
    link.linkType = "href";
  }

  switch (link.linkType) {
    case "href":
      return link.href || null;
    case "page":
      if (link?.page && typeof link.page === "string") {
        return `/${link.page}`;
      }
    case "post":
      if (link?.post && typeof link.post === "string") {
        return `/posts/${link.post}`;
      }
    default:
      return null;
  }
}

type DataAttributeConfig = CreateDataAttributeProps &
  Required<Pick<CreateDataAttributeProps, "id" | "type" | "path">>;

export function dataAttr(config: DataAttributeConfig) {
  return createDataAttribute({
    projectId,
    dataset,
    baseUrl: studioUrl,
  }).combine(config);
}


export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

