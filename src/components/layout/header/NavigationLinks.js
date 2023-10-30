import Link from 'next/link';

export const NavigationLinks = ({ navigation, linkClassName }) => {
  return (
    <>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href} className={linkClassName}>
          {item.name}
        </Link>
      ))}
    </>
  );
};
