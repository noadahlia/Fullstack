import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Albums.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons';

function Albums({ user }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((a) => a.userId === user.id);
        setAlbums(data);
        localStorage.setItem("albums", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, [user]);

  return (
    <div>
      <div className="albums-container">
        {albums.map((album) => (
          <Link
            key={album.id}
            to={`/albums/${album.id}`}
            className="album-link"
          >
            <div className="album">
              <FontAwesomeIcon icon={faFolder} className="folder-icon" style={{ fontSize: '150px' }} />
              <h5 className="album-id">{`Album Id: ${album.id}`}</h5>
              <h6 className="album-title">{album.title}</h6>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Albums;

