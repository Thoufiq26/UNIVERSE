'use client';

import React, { useState, useEffect } from 'react';


const NasaLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('space');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${encodeURIComponent(searchQuery)}&media_type=image`
        );
        if (!response.ok) throw new Error('Failed to fetch NASA images');
        const data = await response.json();
        const itemsWithThumbnails = data.collection.items
          .filter(item => item.data[0].media_type === 'image')
          .map(item => ({
            nasa_id: item.data[0].nasa_id,
            title: item.data[0].title,
            description: item.data[0].description || 'No description available',
            thumbnail: item.links?.[0]?.href
          }));
        setItems(itemsWithThumbnails);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, [searchQuery]);

  useEffect(() => {
    const fetchSelectedImage = async () => {
      if (!selectedItem) return;
      try {
        const response = await fetch(`https://images-api.nasa.gov/asset/${selectedItem.nasa_id}`);
        if (!response.ok) throw new Error('Failed to fetch image asset');
        const data = await response.json();
        const imageUrl =
          data.collection.items.find(item => item.href.includes('~medium'))?.href ||
          selectedItem.thumbnail;
        setSelectedImage(imageUrl);
      } catch {
        setSelectedImage(selectedItem.thumbnail);
      }
    };
    fetchSelectedImage();
  }, [selectedItem]);

  const handleSearch = () => {
    const query = searchQuery.trim();
    if (query) setSearchQuery(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  const openDialog = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
    setSelectedImage(null);
  };

  return (
    <>
      
      <div className="library-wrapper">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search for space images..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}

        <div className="gallery">
          {items.map(item => (
            <img
              key={item.nasa_id}
              src={item.thumbnail}
              alt={item.title}
              className="gallery-img"
              onClick={() => openDialog(item)}
            />
          ))}
        </div>

        {/* Fullscreen Dialog */}
        {dialogOpen && selectedItem && (
          <div className="dialog-overlay" onClick={closeDialog}>
            <div className="dialog-content" onClick={e => e.stopPropagation()}>
              <img src={selectedImage} alt={selectedItem.title} className="dialog-img" />
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
              <button onClick={closeDialog}>Close</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .library-wrapper {
          padding: 2rem;
          background: #0b0d17;
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .search-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          width: 100%;
          max-width: 600px;
        }
        .search-bar input {
          flex: 1;
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: none;
          outline: none;
          font-size: 1rem;
        }
        .search-bar button {
          padding: 0.75rem 1.5rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          width: 100%;
        }
        .gallery-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
          border: 2px solid transparent;
        }
        .gallery-img:hover {
          border-color: #3b82f6;
          transform: scale(1.03);
        }
        .dialog-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 50;
        }
        .dialog-content {
          background: #111827;
          padding: 2rem;
          border-radius: 1rem;
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto;
          color: white;
          text-align: center;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .dialog-img {
          max-width: 100%;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }
        .dialog-content button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: #3b82f6;
          border: none;
          color: white;
          border-radius: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default NasaLibraryPage;
