import fetch from 'isomorphic-unfetch';
function Page({ stars }) {
    return <div>Next stars: {stars}</div>;
  }
  
  Page.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
  };
  
  export default Page;

//   https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans
// import Head from 'next/head';

// function IndexPage() {
//   return (
//     <div>
//       <Head>
//         <title>My page title</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
{/* <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link> */}
//       </Head>
//       <p>Hello world!</p>
//     </div>
//   );
// }

// export default IndexPage;