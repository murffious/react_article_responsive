import Head from 'next/head';
import TextBody from '../components/TextBody';
import fetch from 'isomorphic-unfetch';

  
  HelloWorld.getInitialProps = async ({ req }) => {
    const res = await fetch('https://interview-project-17987.herokuapp.com/api/article');
    const json = await res.json();
    return { articles: json };
  };
  
  function HelloWorld({ articles }) {
    console.log(articles)
    return (
      <div>
         <Head>
           <title>LDS Article Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        </Head>
       
        <p>scoped!</p>
        <TextBody/>
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