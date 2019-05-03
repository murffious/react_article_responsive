import React from "react";

function TextBody(props) {
  const { content } = props;
  return (
    <div>
      {content.map(p => {
        if (p.subtitle) {
          return (
            <div key={p.subtitle + new Date().getTime()}>
              <h3>{p.subtitle}</h3> <p>{p.text}</p>
            </div>
          );
        } else {
          return <p key={p.subtitle + new Date().getTime()}>{p.text}</p>;
        }
      })}

      <style jsx>{`
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
        }
      `}</style>
    </div>
  );
}

export default TextBody;
