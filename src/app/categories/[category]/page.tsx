import CategoryClient from "./CategoryClient";

export async function generateStaticParams() {
  return [
    { category: 'sleep' },
    { category: 'stress' },
    { category: 'hair' },
    { category: 'skin' },
  ];
}

export default function CategoryPage() {
  return <CategoryClient />;
}
