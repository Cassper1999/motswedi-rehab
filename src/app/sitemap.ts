import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.motswedirehabcentre.com";
  const paths = [
    '/',
    '/about',
    '/centre-facilities-and-services',
    '/contact',
    '/get-involved',
    '/impact',
    '/programmes',
    '/programmes/carpentry',
    '/programmes/cookery',
    '/programmes/dressmaking',
    '/programmes/horticulture',
    '/programmes/ict',
    '/programmes/stimulation',
    '/projects',
    '/support-services',
  ];

  return paths.map((path) => ({
    url: baseUrl + path,
  }));
}
