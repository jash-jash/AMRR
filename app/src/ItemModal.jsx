// ItemModal.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

const ItemModal = ({ item, onClose }) => {
  if (!item) 
    return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{item.name}</h2>
        <p><strong>Type:</strong> {item.type}</p>
        <p><strong>Description:</strong> {item.description}</p>

        <Carousel showThumbs={false}>
          <div>
            <img src={item.coverImage} alt="Cover" />
          </div>
          {item.additionalImages?.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Additional ${index}`} />
            </div>
          ))}
        </Carousel>
          <br />
        <button onClick={() => alert("Enquiry sent!")}>Enquire</button>
      </div>
    </div>
  );
};

export default ItemModal;
