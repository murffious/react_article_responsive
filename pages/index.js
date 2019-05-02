// function Home() {
//     return <div>Welcome to Next.js!</div>;
//   }
  
//   export default Home;
import Head from 'next/head';

  function HelloWorld() {
    return (
      <div>
         <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        </Head>
        Hello world
        <p>scoped!</p>
        <style jsx>{`
          p {
            color: blue;
            font-family: 'Open Sans', sans-serif;

          }
          div {
            background: red;
          }
          @media (max-width: 600px) {
            div {
              background: blue;
            }
          }
        `}</style>
        <style global jsx>{`
          body {
            background: black;
          }
        `}</style>
      </div>
    );
  }
  
  export default HelloWorld;