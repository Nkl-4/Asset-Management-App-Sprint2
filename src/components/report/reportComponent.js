/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Axios from 'axios';

export default function ReportComponent() {
  const [data, setData] = useState([]);
  //   const [monthYear, setMonthYear] = useState('');

  const apiUrl = 'http://localhost:8090';

  const getData = (monthYear) => {
    const monYr = monthYear.split('-');
    console.log(monYr);
    Axios.get(
      apiUrl +
        `/admin/shipments/report/month?month=${monYr[1]}&year=${monYr[0]}`
    ).then((resp) => {
      setData(resp.data);
    });
  };

  return (
    <div>
      <h3>Report Page</h3>
      <div className="container border">
        <div className="row">
          <div className="col-auto">
            <input
              type="month"
              name="reportDate"
              id="rd"
              className="form-control col-auto my-4"
              onChange={(event) => getData(event.target.value)}
            />
          </div>
        </div>
        <div className="col2">
          {data.length > 0 ? (
            <table
              className="table table-striped table-sm5  table-hover"
              border="1"
            >
              <thead className="thead-dark">
                <tr>
                  <th>Shipment ID</th>
                  <th>Asset ID</th>
                  <th>User ID</th>
                  <th>Status</th>
                  <th>Source WH ID</th>
                  <th>Destination WH ID</th>
                  <th>Shipment Date</th>
                  <th>Delivery Date</th>
                </tr>
              </thead>
              {data.map((val) => (
                <tbody>
                  <tr key={val.shipmentId}>
                    <td>
                      <b>{val.shipmentId}</b>
                    </td>
                    <td>{val.assetId}</td>
                    <td>{val.userId}</td>
                    <td>
                      <b>{val.status}</b>
                    </td>
                    <td>{val.sourceWhId}</td>
                    <td>{val.destWhId}</td>
                    <td>{val.shipmentDate}</td>
                    <td>{val.deliveryDate}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          ) : (
            <h4 className="mx-auto" style={{ width: '200px' }}>
              No Data
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
