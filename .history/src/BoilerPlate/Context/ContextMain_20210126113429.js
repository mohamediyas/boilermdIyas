import React from "react";
import axios from "axios";
import CardItems from "./CardItems";

const ContextMain = () => {
  const [inform, setInform] = React.useState([]);

  React.useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    setInform(data);
  };

  return (
    <div>
      {inform.map((getData) => {
        return <CardItems cardData={...getData} />;
      })}
    </div>
  );
};

export default ContextMain;
