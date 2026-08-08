import { Link } from 'react-router-dom';

export default function Button({ children, href, to, variant = 'primary', className = '' }) {
  const baseClass = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2';
  const variants = {
    primary: 'bg-brand-red text-white shadow-sm hover:bg-brand-red-dark',
    secondary: 'border border-current bg-transparent text-inherit hover:border-brand-red hover:bg-brand-red hover:text-white',
    ghost: 'bg-transparent text-brand-red hover:bg-brand-red-light',
  };

  const classes = `${baseClass} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
