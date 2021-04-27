import React from 'react';
import image1 from '../../img/linkcardimg.png';
import image2 from '../../img/userdatabase.png';
import image3 from '../../img/reportcard.jpg';
import image4 from '../../img/express.jpg';
import image5 from '../../img/addshiplogo.jpg';
import image6 from '../../img/warehouselink.jpg';
import image7 from '../../img/addware2.jpg';
import image8 from '../../img/assetlogo.png';
import image9 from '../../img/assetaddlogo.png';

export default function AdminComponent() {
  return (
    <div className="adminComponent container-fluid">
      <div className="container-fluid table-responsive" id="admin-comp">
        <div className="row">
          <div className="card" id="link_card">
            <img className="card-img-top" src={image1} alt="Card image cap" />
            <div className="card-img-overlay">
              <div className="card-body">
                <div className="card-text-center" id="bottom">
                  <strong>USER REGISTRATION</strong>
                </div>
                <a href="/admin/register" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="card" id="link_card">
            <img className="card-img-top" src={image2} alt="Card image cap" />
            <div className="card-img-overlay">
              <div className="card-body">
                <div className="card-text-center" id="bottom">
                  <strong>USER DATABASE</strong>
                </div>
                <a href="/admin/usersList" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="card" id="link_card">
            <img className="card-img-top" src={image3} alt="Card image cap" />
            <div className="card-img-overlay">
              <div className="card-body">
                <div className="card-text-center" id="bottom">
                  <strong>REPORT</strong>
                </div>
                <a href="/admin/report" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="card" id="link_card">
            <img className="card-img-top" src={image4} alt="Card image cap" />
            <div className="card-img-overlay">
              <div className="card-body">
                <div className="card-text-center" id="bottom">
                  <strong>SHIPMENTS</strong>
                </div>
                <a href="/admin/shipment/all" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="card" id="link_card">
            <img className="card-img-top" src={image5} alt="Card image cap" />
            <div className="card-img-overlay">
              <div className="card-body">
                <div className="card-text-center" id="bottom">
                  <strong>ADD SHIPMEMT</strong>
                </div>
                <a href="/admin/shipment/add" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card" id="link_card">
              <img className="card-img-top" src={image6} alt="Card image cap" />
              <div className="card-img-overlay">
                <div className="card-body">
                  <div className="card-text-center" id="bottom">
                    <strong>WAREHOUSES</strong>
                  </div>
                  <a
                    href="/admin/warehouses/get/all"
                    className="stretched-link"
                  ></a>
                </div>
              </div>
            </div>

            <div className="card" id="link_card">
              <img className="card-img-top" src={image7} alt="Card image cap" />
              <div className="card-img-overlay">
                <div className="card-body">
                  <div className="card-text-center" id="bottom">
                    <strong>ADD WAREHOUSE</strong>
                  </div>
                  <a href="/admin/warehouses" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="card" id="link_card">
              <img className="card-img-top" src={image8} alt="Card image cap" />
              <div className="card-img-overlay">
                <div className="card-body">
                  <div className="card-text-center" id="bottom">
                    <strong>ASSETS</strong>
                  </div>
                  <a
                    href="/admin/assets/get/all"
                    className="stretched-link"
                  ></a>
                </div>
              </div>
            </div>

            <div className="card" id="link_card">
              <img className="card-img-top" src={image9} alt="Card image cap" />
              <div className="card-img-overlay">
                <div className="card-body">
                  <div className="card-text-center" id="bottom">
                    <strong>CREATE ASSET</strong>
                  </div>
                  <a href="/admin/assets" className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
