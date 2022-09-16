import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ssb from './img/ssb.png';
import roboik from './img/roboik.png';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <div className="container-fluid py-3 px-5">
            <div className="row justify-content-between">
                <div className="col-3 text-center">
                    <img src={ssb} className="img-fluid ssbLogo rotating" alt="" />
                </div>
                <div className="col-4 text-center">
                    <h3 style={{color:'white'}} className='flying'>ROBOİK 2022 <br/>İNSANSIZ SU ÜSTÜ ARAÇLARI PROTOTİP YARIŞMASI</h3>
                </div>
                <div className="col-3 text-center" style={{display: 'flex',alignItems:'center'}}>
                    <img src={roboik} className="img-fluid roboikLogo rotating" alt="" />
                </div>
            </div>

        </div>
        <div id="test">
            <table className="table table-striped table-primary" style={{fontSize: 1.2 + 'em',}}>
                <thead>
                <tr>
                    <th scope="col" className="pr-3">Proje Adı</th>
                    <th scope="col" className="pr-3">Proje Takımı</th>
                    <th scope="col" className="pr-3">Proje Bilgi Dokümanı Puanı</th>
                    <th scope="col" className="pr-3">Proje Teslim Dokümanı Puanı</th>
                    <th scope="col" className="pr-3">Parkur Puanı</th>
                    <th scope="col" className="pr-3">Toplam Puan</th>

                </tr>
                </thead>
                <App />
            </table>
        </div>
    </div>
);
