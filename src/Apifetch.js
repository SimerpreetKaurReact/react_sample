import React, { useState } from "react";

function Apifetch() {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocations] = useState({ headers: [], data: [] });
  const getFlattenLocation = (locations) => {
    let newdata = [];
    for (const location of locations) {
      const { street, coordinates, timezone, ...rest } = location;
      newdata.push({
        ...rest,
        number: street.number,
        name: street.name,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });
    }

    let headers = Object.keys(newdata[0]);

    return { headers, data: newdata };
  };
  const handleClick = async (e) => {
    e.preventDefault();
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((res) => {
        if (Array.isArray(res.results)) {
          const newArr = res.results.map((ele) => ({
            name: `${ele.name.title}${ele.name.first}${ele.name.last}`,
          }));

          const locationlist = getFlattenLocation(
            res.results.map((location) => location.location)
          );
          console.log(locationlist);
          setLocations(locationlist);

          setData(newArr);
          console.log(data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };
  return (
    <div>
      <h1>API fetch</h1>
      <button onClick={handleClick}>Get Response</button>
      {console.log(location.headers)}

      <div>
        <table>
          <thead>
            <tr>
              {location.headers?.length ? (
                location.headers?.map((user, index) => (
                  <th key={index}>{user}</th>
                ))
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody>
            {location.data?.length ? (
              location.data?.map((info, index) => (
                <tr key={index}>
                  {console.log(info)}
                  {Object.values(info).map((item, i) => (
                    <td key={i}>{item}</td>
                  ))}
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Apifetch;
