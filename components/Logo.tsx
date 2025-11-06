import Link from 'next/link';

interface LogoProps {
  noLink?: boolean;
  size?: 'default' | 'large' | 'small';
}

const Logo = ({ noLink = false, size = 'default' }: LogoProps) => {
  const sizeClasses = {
    small: 'h-12 w-auto',
    default: 'h-20 w-auto',
    large: 'h-32 w-auto',
  };

  const logoImage = (
    <img 
      src="/rectify-logo.png" 
      alt="Rectify Logo" 
      className={sizeClasses[size]}
    />
  );

  if (noLink) {
    return logoImage;
  }

  return (
    <Link href="/">
      {logoImage}
    </Link>
  );
};

export default Logo; 