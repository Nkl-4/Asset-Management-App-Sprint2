/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function ReportComponent() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [month, setMonth] = useState('');

  const apiUrl = 'http://localhost:8090';

  // fetch data for given month & year
  const getData = (monthYear) => {
    setMonth(monthYear);
    const monYr = monthYear.split('-');
    console.log(monYr);
    Axios.get(
      apiUrl +
        `/admin/shipments/report/month?month=${monYr[1]}&year=${monYr[0]}`
    ).then((resp) => {
      setData(resp.data);
    });
  };

  useEffect(() => {
    let newCount = count + 1;
    setCount(newCount);
    console.log(count);
  }, [data]);

  //print pdf function
  const exportPDF = () => {
    const unit = 'pt';
    const size = 'A4'; // page size
    const orientation = 'portrait'; // landscape available

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = 'Shipment Report';
    const headers = [
      [
        'Shipment ID',
        'Asset ID',
        'User ID',
        'Status',
        'Source WH ID',
        'Destination WH ID',
        'Shipment Date',
        'Delivery Date',
      ],
    ];

    const values = data.map((val) => [
      val.shipmentId,
      val.assetId,
      val.userId,
      val.status,
      val.sourceWhId,
      val.destWhId,
      val.shipmentDate,
      val.deliveryDate,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: values,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    // export file name
    doc.save(`Report-${month}.pdf`);
  };

  return (
    <div className="reportComponent">
      <center>
        <h3
          style={{
            backgroundColor: 'rgba(25, 55, 77)',
            width: '150px',
            color: 'white',
          }}
        >
          REPORT
        </h3>
      </center>
      <br></br>

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
            <div className="table-responsive">
              <table className="table table-striped table-sm5  table-hover">
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
            </div>
          ) : (
            <h4 className="mx-auto" style={{ width: '200px' }}>
              No Data
            </h4>
          )}
        </div>
        {/* Display button if data != empty */}
        {data.length > 0 && (
          <button className="btn-primary" onClick={() => exportPDF()}>
            Generate Report
          </button>
        )}
      </div>
    </div>
  );
}
