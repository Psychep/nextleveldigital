import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ252n68zhMRUR58-VSamule4&key=AIzaSyCPuZybfBxXGr-paLNDUrMmlnnSazkNV8I"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
