import Head from 'next/head';
import TextBody from '../components/TextBody';
import fetch from 'isomorphic-unfetch';
import MainImage from '../components/MainImage';
import Video from '../components/Video';

  
  App.getInitialProps = async ({ req }) => {
    const res = await fetch('https://interview-project-17987.herokuapp.com/api/article');
    const json = await res.json();
    return { articles: json };
  };
  
  function App({ articles }) {
    console.log(articles)
    // For routing move all this to Main and pass through router
    return (
      <div>
         <Head>
           <title>LDS Article Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        </Head>
        <h1>{articles[0].title}</h1>
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
  
  export default App;