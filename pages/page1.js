import Head from "next/head";

const Page1 = () => {
  return (
    <>
      
      <div>
        <p>This is page 1.</p>
        <img src="../static/icon.png" />
        <Head>
          <title>page1</title>
        </Head>
        <Head>
          <meta name="description" content="hello world" />
        </Head>
        <style jsx>{`
          p {
            color : blue;
            font-size : 18pt;
          }
        `}</style>
      </div>
    </>
  );
};

export default Page1;
