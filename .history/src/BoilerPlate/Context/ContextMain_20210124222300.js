import React from "react";
import axios from "axios";

const ContextMain = () => {
  const [inform, setInform] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    setInform(data);
  };

  return <div></div>;
};

export default ContextMain;
