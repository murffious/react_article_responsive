import React, { useState, useEffect } from 'react';
import Head from "next/head";
import TextBody from "../components/TextBody";
import fetch from "isomorphic-unfetch";
import MainImage from "../components/MainImage";
import Video from "../components/Video";
const { parse } = require("url");

// 3hr mark notes
// was going smooth so went for routing to then focus last 3 hours on styles -
// was not super fast like I thought since just learning next.js and usually do spa

//Next hour//
// layout and responsiveness

// routing --> will upgrade if time and add nav bar etc
App.getInitialProps = async ({ req, query }) => {
  console.log(query);
  // const parsedUrl = parse(req.url, true);
  // const { pathname, query } = parsedUrl;
  // console.log(parsedUrl, pathname, parsedUrl.path)
  const res = await fetch(
    `https://interview-project-17987.herokuapp.com/api/article`
  );
  const json = await res.json();
  return { articles: json };
};

function App({ articles }) {

  console.log(articles);
  // For routing move all this to Main and pass through router
  return (
    <div className="site-container">
      <Head>
        <title>LDS Article Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Head>
      <h1>{articles[0].title}</h1>
      <section className="gallery">
        <MainImage images={articles[0].images} />
      </section>
      <TextBody content={articles[0].content} />
      <Video video={articles[0].video} />
      <style jsx>{`
        .site-container {
          padding-right: 15%;
        }
        .site-container h1{
          font-size: 1.2em;
        }
        p {
          font-family: "Open Sans", sans-serif;
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
          font-family: "Open Sans", sans-serif;
        }
      `}</style>
    </div>
  );
}

export default App;
