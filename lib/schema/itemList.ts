import { SITE_URL } from "../site";

export type ItemListEntry = { name: string; path: string };

export function itemListSchema({ name, items }: { name: string; items: ItemListEntry[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}
