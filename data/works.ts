export type Work = {
  slug: string;
  title: string;
  year?: string;
  medium?: string;
  size?: string;
  series?: string;
};

export const works: Work[] = [
  {
    slug: "work-01",
    title: "Untitled 01",
    year: "2024",
    medium: "Oil on canvas",
    size: "100 × 80 cm",
    series: "New Works",
  },
  {
    slug: "work-02",
    title: "Untitled 02",
    year: "2023",
    medium: "Mixed media",
    size: "70 × 50 cm",
    series: "New Works",
  },
  {
    slug: "work-03",
    title: "Untitled 03",
    year: "2022",
    medium: "Charcoal on paper",
    size: "60 × 42 cm",
    series: "Drawings",
  },
];
