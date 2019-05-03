import Head from 'next/head';
import TextBody from '../components/TextBody';
import fetch from 'isomorphic-unfetch';
import MainImage from '../components/MainImage';
import Video from '../components/Video';

  
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
        <section className="gallery">
          <MainImage images={articles[0].images}/>
        </section>
        <TextBody content={articles[0].content}/>
        <Video video={articles[0].video}/>
        <style jsx>{`
          p {
            font-family: 'Open Sans', sans-serif;
          }
          div {
           
          }
          @media (max-width: 600px) {
            div {
              
            }
          }
        `}</style>
        <style global jsx>{`
          body {
            padding: 20px;
          }
        `}</style>
      </div>
    );
  }
  
  export default HelloWorld;