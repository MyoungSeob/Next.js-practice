import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Hello! next!</h1>
      <h2>
        <Link href="page1">
          <a>소개</a>
        </Link>
      </h2>
    </div>
  );
};
export default Index;