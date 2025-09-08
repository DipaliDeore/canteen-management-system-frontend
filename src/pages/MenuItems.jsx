// src/pages/MenuItems.jsx
import React, { useState, useEffect } from "react";
import { Button } from "../components/UI";

const MenuItemsPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    meal_type: "Breakfast",
    quantity: "",
    available: true,
    image: null
  });

  const API_BASE_URL = 'http://localhost:5000';

  // Fetch menu items from backend
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/menu/get-all-menu`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      
      const data = await response.json();
      setMenuItems(data.data || []);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      alert('Failed to load menu items');
    } finally {
      setLoading(false);
    }
  };

  // Filter menu items based on search term
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.meal_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    setShowForm(true);
    setEditingItem(null);
    setImagePreview(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      meal_type: "Breakfast",
      quantity: "",
      available: true,
      image: null
    });
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description || "",
      price: item.price,
      meal_type: item.meal_type,
      quantity: item.quantity,
      available: item.is_available,
      image: null
    });
    setImagePreview(item.image_url);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/menu/delete-menu/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete menu item');
      }

      // Remove item from local state
      setMenuItems(prev => prev.filter(item => item.item_id !== Number(id)));
      alert('Menu item deleted successfully!');
    } catch (error) {
      console.error('Error deleting menu item:', error);
      alert('Failed to delete menu item');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.quantity || (!editingItem && !formData.image)) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('description', formData.description);
      submitData.append('price', formData.price);
      submitData.append('meal_type', formData.meal_type);
      submitData.append('quantity', formData.quantity);
      if (formData.image) {
        submitData.append('image', formData.image);
      }

      let response;
      if (editingItem) {
        // Update existing item
        response = await fetch(`${API_BASE_URL}/menu/update-menu/${editingItem.item_id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: submitData
        });
      } else {
        // Add new item
        response = await fetch(`${API_BASE_URL}/menu/add-menu`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: submitData
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save menu item');
      }

      alert(editingItem ? "Menu item updated successfully!" : "Menu item added successfully!");
      
      // Refresh the menu items list
      fetchMenuItems();
      
      // Reset form
      setShowForm(false);
      setEditingItem(null);
      setImagePreview(null);
      setFormData({
        name: "",
        description: "",
        price: "",
        meal_type: "Breakfast",
        quantity: "",
        available: true,
        image: null
      });

    } catch (error) {
      console.error('Error saving menu item:', error);
      alert(error.message || 'Failed to save menu item');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingItem(null);
    setImagePreview(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      meal_type: "Breakfast",
      quantity: "",
      available: true,
      image: null
    });
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">
          <i className="bx bx-loader-circle bx-spin"></i>
          <p>Loading menu items...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="actions-bar">
        <Button variant="primary" icon="bx-plus" onClick={handleAddItem}>
          Add Item
        </Button>
        <Button variant="ghost" icon="bx-upload">
          Import
        </Button>
        <Button variant="ghost" icon="bx-download">
          Export
        </Button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingItem ? "Edit Menu Item" : "Add New Menu Item"}</h3>
              <button type="button" className="modal-close" onClick={handleCancel}>
                <i className="bx bx-x"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="menu-item-form">
              {/* Image Upload */}
              <div className="form-group">
                <label>Item Image *</label>
                <div className="image-upload-container">
                  <div className="image-preview">
                    {imagePreview ? (
                      <>
                        <img src={imagePreview} alt="Preview" className="preview-image" />
                        <button type="button" onClick={removeImage} className="remove-image-btn">
                          <i className="bx bx-x"></i>
                        </button>
                      </>
                    ) : (
                      <div className="image-placeholder">
                        <i className="bx bx-image"></i>
                        <span>No image selected</span>
                      </div>
                    )}
                  </div>
                  <label className="file-input-label">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file-input"
                      required={!editingItem}
                    />
                    <span className="file-input-button">
                      <i className="bx bx-upload"></i>
                      Choose Image
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Item Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter item name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter item description"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label>Meal Type *</label>
                <select
                  name="meal_type"
                  value={formData.meal_type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snacks">Snacks</option>
                </select>
              </div>

              <div className="form-group">
                <label>Quantity *</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                  min="0"
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="available"
                    checked={formData.available}
                    onChange={handleInputChange}
                  />
                  Available
                </label>
              </div>

              <div className="form-actions">
                <Button type="button" variant="ghost" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  {editingItem ? "Update Item" : "Add Item"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>
              <i className="bx bx-restaurant" /> All Menu Items
            </h3>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <i className="bx bx-search search-icon" />
            </div>
            <i className="bx bx-filter filter-icon" />
          </div>
          
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Description</th>
                <th>Meal Type</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.item_id}>
                  <td>
                    <div className="item-image">
                      <img src={item.image_url} alt={item.name} />
                    </div>
                  </td>
                  <td>
                    <p className="item-name">{item.name}</p>
                  </td>
                  <td>
                    <p className="item-description">{item.description}</p>
                  </td>
                  <td>{item.meal_type}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <span
                      className={`status ${
                        item.is_available ? "completed" : "pending"
                      }`}
                    >
                      {item.is_available ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <Button
                        variant="tiny"
                        icon="bx-edit"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="tiny"
                        className="ghost"
                        icon="bx-trash"
                        onClick={() => handleDelete(item.item_id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredItems.length === 0 && (
            <div className="empty-state">
              <i className="bx bx-food-menu"></i>
              <p>No menu items found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuItemsPage;