import { useEffect } from "react";
import { getFormatedUrl } from "./lib/heloer";
const App = () => {
  useEffect(() => {
    const test = async () => {
      try {
        const url = getFormatedUrl("/");
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    test();
  }, []);
  return (
    <div>
      <h2>React starter template starter pack</h2>
      <p>This is a react starter pack with tanstackquery implemented</p>
    </div>
  );
};

export default App;
