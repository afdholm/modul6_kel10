import React from "react";
import "./index.css";


export default function index({ isShow, data, onCancel }){
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
          .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(function(error) {
            console.error('Service Worker registration failed:', error);
          });
      }
      
    return (
        <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div><div className="modal">
                {data && <img src={data.i.imageUrl} alt="sesuatu"/>}
            </div>
        </div>
    );
}
