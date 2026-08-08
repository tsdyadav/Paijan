import ResponsiveImage from '../../common/ResponsiveImage';

export default function MachineGallery({ images = [] }) {
  const previewImages = images.length ? images : [{}, {}, {}];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface p-2 shadow-[0_8px_24px_rgba(7,26,47,0.08)]">
        <div className="aspect-[4/3] overflow-hidden rounded-xl border border-brand-border bg-gradient-to-br from-brand-navy to-brand-navy-secondary">
          <ResponsiveImage image={previewImages[0]} alt="Machine preview" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {previewImages.map((image, index) => (
          <div key={image.id || index} className="aspect-square overflow-hidden rounded-xl border border-brand-border bg-brand-surface-muted">
            <ResponsiveImage image={image} alt={`Machine view ${index + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
