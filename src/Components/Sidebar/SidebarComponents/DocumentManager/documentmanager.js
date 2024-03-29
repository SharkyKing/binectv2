import './documentmanager.css'
import '../../sidebar.css'

import React, { useState } from 'react';

const DocumentManager = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploadedDocuments([...uploadedDocuments, selectedFile.name]);
      setSelectedFile(null);
    }
  };

  return (
    <div className="document-manager">
        <div className='sidebar-header'>
            <h2>Document Manager</h2>
        </div>
      
      {/* File input for document upload */}
      <input className='file-input' type="file" onChange={handleFileChange} />

      {/* Button to trigger the upload */}
      <button onClick={handleUpload}>Upload</button>

      {/* Display uploaded documents */}
      <div>
        <h3>Uploaded Documents</h3>
        <ul>
          {uploadedDocuments.map((document, index) => (
            <li key={index}>{document}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentManager;
