import "./styles.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main>
      <h1>Quote Generator</h1>
      <section>
        <h3>
          <span>"&nbsp;</span>
          {quote?.text}
          <span>&nbsp;"</span>
        </h3>
        <i>- {quote?.author}</i>
        <br />
        <button onClick={getNewQuote}>New Quote</button>
      </section>
    </main>
  );
}
