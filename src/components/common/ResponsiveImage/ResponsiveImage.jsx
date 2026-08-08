import media from '../../../data/media.json';

/**
 * Renders an image defined in JSON and replaces unavailable files with the
 * shared placeholder. Image entries can be a string or an object with
 * src, alt, fallbackSrc, width, and height fields.
 */
export default function ResponsiveImage({ image, alt, className = '', eager = false, ...props }) {
  const imageData = typeof image === 'string' ? { src: image } : image || {};
  const source = imageData.src || media.placeholder.src;
  const fallback = imageData.fallbackSrc || media.placeholder.src;

  function handleError(event) {
    if (event.currentTarget.src.endsWith(fallback)) return;
    event.currentTarget.src = fallback;
  }

  return (
    <img
      {...props}
      src={source}
      alt={imageData.alt || alt || media.placeholder.alt}
      width={imageData.width}
      height={imageData.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={handleError}
      className={className}
    />
  );
}
