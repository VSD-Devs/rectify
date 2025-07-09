import Link from 'next/link';

interface LogoProps {
  noLink?: boolean;
}

const Logo = ({ noLink = false }: LogoProps) => {
  const logoImage = (
    <img 
      src="/rectify-logo.png" 
      alt="Rectify Logo" 
      className="h-20 w-auto"
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