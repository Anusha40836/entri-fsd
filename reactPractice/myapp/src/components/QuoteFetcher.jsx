import React, { useEffect, useState } from "react";

function QuoteFetcher() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content))
      .catch((err) => setQuote("Failed to fetch quote"));
  }, []); // runs only once

  return (
    <div style={{ textAlign: "center" }}>
      <h2>💬 Random Quote</h2>
      <p>{quote || "Loading..."}</p>
    </div>
  );
}

export default QuoteFetcher;
