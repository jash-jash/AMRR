import React, { useState } from 'react';
import './App.css';

const Additems = () => {
  const [item, setItem] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: null,
    additionalImages: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'coverImage') {
      setItem({ ...item, coverImage: URL.createObjectURL(files[0]) });

    } else if (name === 'additionalImages') {
      const filesArray = Array.from(files);

      if (filesArray.length < 2 || filesArray.length > 5) {
        alert("Please select between 2 to 5 additional images.");
        return;
      }

      const imgs = filesArray.map(file => URL.createObjectURL(file));
      setItem({ ...item, additionalImages: imgs });

    } else {
      setItem({ ...item, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('items')) || [];
    localStorage.setItem('items', JSON.stringify([...stored, item]));
    alert('✅ Item successfully added!');
  };

  return (
    <div className="home">
      <div>
        <h2>Add New Item</h2>
        <hr />
        <br />

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
            <label htmlFor="name">Item Name:</label>
            <input type="text" name="name" id="name" required onChange={handleChange} />
          </div>

          <div className="form-row">
            <br />
            <label htmlFor="type">Item Type:</label>
            <select name="type" id="type" required defaultValue="" onChange={handleChange}>
              <option value="" disabled>Select Type</option>
              <option value="Shirt">Shirt</option>
              <option value="Pant">Pant</option>
              <option value="Shoes">Shoes</option>
              <option value="Sports Gear">Sports Gear</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" rows="3" required onChange={handleChange}></textarea>
          </div>

          <div className="form-row">
            <label htmlFor="coverImage">Cover Image:</label>
            <input type="file" name="coverImage" id="coverImage" accept="image/*" required onChange={handleChange} />
          </div>

          <div className="form-row">
            <label htmlFor="additionalImages">Additional Images (2–5):</label>
            <input
              type="file"
              name="additionalImages"
              id="additionalImages"
              accept="image/*"
              multiple
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label></label>
            <button type="submit">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additems;
