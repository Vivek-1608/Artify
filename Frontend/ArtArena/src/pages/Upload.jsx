import React from "react";
import UploadForm from "../components/UploadForm";

const Upload = ({ onUpload }) => {
  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-4 text-center">Upload Your Artwork</h1> */}
      <UploadForm onUpload={onUpload} />   
    </div>
  );
};

export default Upload;
