import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export function ApiContextProvider(props) {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [color, setColor] = useState([]);
  async function loadData() {
    const response = await fetch("https://favqs.com/api/qotd");
    const data = await response.json();
    setQuote(data.quote.body);
    setAuthor(data.quote.author);
  }
  useEffect(() => {
    loadData();
  }, []);

  const nextQuote = () => {
    loadData();
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };
  return (
    <ApiContext.Provider value={{ quote, author, color, nextQuote }}>
      {props.children}
    </ApiContext.Provider>
  );
}
