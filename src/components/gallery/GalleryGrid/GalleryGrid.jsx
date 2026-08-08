import StrapCard from './StrapCard';

export default function GalleryGrid({ items = [], contactLabel }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <StrapCard key={item.id} item={item} contactLabel={contactLabel} />
      ))}
    </div>
  );
}
