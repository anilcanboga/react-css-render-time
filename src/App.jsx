import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [linkData, setLinkData] = useState(null);
  const [test, setTest] = useState(null);

  useEffect(() => {
    const dataFnc = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");
      setLinkData(await data.json());
      setTimeout(() => {
        setTest("aa");
      }, 3000);
    };
    dataFnc();
  }, []);

  return (
    <>
      <a
        href={test ? "https://via.placeholder.com/600/92c952" : "getmobil.com"}
      >
        TEST
      </a>
      {/* <div>
        {linkData?.slice(0, 4).map((item, key) => (
          <div key={key}>
            <a className="deneme" href={item.url}>
              {item.url}
            </a>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default App;
