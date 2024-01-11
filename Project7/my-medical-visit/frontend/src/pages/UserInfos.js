import React, { useState } from 'react';
import { useUser } from './UserContext';
import "../css/Infos.css";

function UserInfos() {
  const { user, updateUser } = useUser();
  const [editedUser, setEditedUser] = useState({ ...user });

  const renderUserInfo = () => {
    return Object.entries(editedUser).map(([key, value]) => {
      // Exclude 'typeData' from being displayed
      if (key === 'typeData'|| key === 'speciality_id') {
        return null;
      }

      const cleanedKey = cleanKey(key);
      let displayedValue = value;

      if (key === 'id' && editedUser.typeData === 'patient') {
        displayedValue = `PAT-${value}`;
      } else if (key === 'id' && editedUser.typeData === 'doctor') {
        displayedValue = `DOC-${value}`;
      }

      return (
        <div key={key} className="user-info">
          <label>{cleanedKey}:</label>
          <input
            type="text"
            value={displayedValue}
            readOnly={isNonEditableField(key)}
            onChange={(e) => handleFieldChange(key, e.target.value)}
            className={isNonEditableField(key) ? 'non-editable' : ''}
          />
        </div>
      );
    });
  };

  const isNonEditableField = (key) => {
    const nonEditableFields = ['id', 'name', 'blood_type', 'birthdate'];
    return nonEditableFields.includes(key);
  };

  const cleanKey = (key) => {
    let cleanedKey = key.replace(/_/g, '');
    cleanedKey = cleanedKey.replace(/^[a-z]/, (match) => match.toUpperCase());
    return cleanedKey;
  };

  const handleFieldChange = (key, newValue) => {
    setEditedUser((prevUser) => ({
      ...prevUser,
      [key]: newValue,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/patients/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        // If the request is successful, update the context
        updateUser(editedUser);
      } else {
        console.error('Failed to update user information');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
      // Handle errors as needed
    }
  };

  return (
    <div className="content">
      <div className="user-info-container">
        {renderUserInfo()}
        <div className="save-btn-container">
          <button className="save-button" onClick={handleSaveClick}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfos;
