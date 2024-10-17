import React, { useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: null,
    mp3: null,
    tags: '',
    duration: '',
    bpm: ''
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadStatus(null);

    const uploadData = new FormData();
    for (const key in formData) {
      uploadData.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/upload', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadStatus({ type: 'success', message: 'Beat uploaded successfully!' });
      // Reset form after successful upload
      setFormData({
        title: '',
        thumbnail: null,
        mp3: null,
        tags: '',
        bpm: ''
      });
      // Reset file inputs
      e.target.thumbnail.value = '';
      e.target.mp3.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus({ type: 'error', message: 'Failed to upload beat. Please try again.' });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='bg-white'>    
    <div className="max-w-md  p-8 ">
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">Upload Beat</h2> */}
      {uploadStatus && (
        <div className={`mb-4 p-2 rounded ${uploadStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {uploadStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/* <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label> */}
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder='Title'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">Thumbnail</label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="mp3" className="block text-sm font-medium text-gray-700 mb-1">MP3 File</label>
          <input
            type="file"
            id="mp3"
            name="mp3"
            onChange={handleFileChange}
            accept="audio/mpeg"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          {/* <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags</label> */}
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="Tags: Separate tags with commas"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          {/* <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label> */}
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="duration: e.g., 3:45"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          {/* <label htmlFor="bpm" className="block text-sm font-medium text-gray-700 mb-1">BPM</label> */}
          <input
            type="number"
            id="bpm"
            name="bpm"
            value={formData.bpm}
            onChange={handleInputChange}
            placeholder='BPM'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isUploading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Beat'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default FileUpload;