import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Marval = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=68c91f583f5eeeb897f4a19583efd498&hash=273d3c50c72d286afb696ade0768b0f1`
        );
        setItem(res.data.data.results[0]); // Assuming you want the first result
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="box-content">
      {loading ? (
        <p>Loading...</p>
      ) : item ? (
        <>
          <div className="right-box">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
            />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Marval;
