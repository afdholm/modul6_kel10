import React from "react";
import "./DetailPage.css";


const DetailPage = ({ data }) => {
  return (
    <div className="detailPage">
      <h3>{data.title}</h3>
      {data.image && data.image.url && (
        <img src={data.image.url} alt={data.title} />
      )}
      {data.runningTimeInMinutes && (
        <p>Durasi: {data.runningTimeInMinutes} menit</p>
      )}
      {data.numberOfEpisodes && (
        <p>Jumlah Episode: {data.numberOfEpisodes}</p>
      )}
      {data.seriesStartYear && <p>Tahun Rilis: {data.seriesStartYear}</p>}
    </div>
  );
};

export default DetailPage;
