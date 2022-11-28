import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
  //   const [dataCovid, setdataCovid] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [isError, setIsError] = useState(false);
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDate = moment().subtract(30, "days");
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`
  );
  // "https://api.covid19api.com/country/vietnam?from=2020-03-01T00:00:00Z&to=2022-04-01T00:00:00Z"
  return (
    <>
      <h3>Covid19 Viet Nam</h3>
      <table id="customers">
        {/* {console.log(">> check data covid: ", dataCovid)} */}
        <thead>
          <tr>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                  <td>{item.Date}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading....
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Somethings wrong
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
