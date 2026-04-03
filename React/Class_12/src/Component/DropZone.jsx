import React, { useEffect, useRef, useState } from "react";

const DropZone = () => {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFiles = (fileList) => {
    const arr = Array.from(fileList).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...arr]);
  };

  useEffect(() => {
    return () => {
      files.forEach((item) => {
        URL.revokeObjectURL(item.preview);
      });
    };
  }, [files]);

  const onInputChange = (e) => {
    handleFiles(e.target.files);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <div
        className={`w-80 h-56 p-5 border-2 border-dashed rounded-lg flex flex-col justify-center items-center cursor-pointer transition-colors ${
          dragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
        }`}
        onClick={openFileDialog}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={onInputChange}
        />

        <p className="text-center text-gray-600">
          {dragging
            ? "Drop files here"
            : "Drag and drop files here, or click to select"}
        </p>
        <p className="text-xs text-gray-400 mt-2">Supports multiple files</p>
      </div>

      {files.length > 0 && (
        <div className="w-80 p-4 border rounded-md bg-white shadow-sm">
          <h3 className="font-medium">Selected files:</h3>
          <ul className="list-disc list-inside mt-2">
            {files.map((item, idx) => (
              <li
                key={`${item.file.name}-${idx}`}
                className="text-sm text-gray-700 flex justify-between items-center"
              >
                <span>
                  {item.file.name} ({(item.file.size / 1024).toFixed(2)} KB)
                </span>
                {item.file.type.startsWith("image/") && (
                  <img
                    src={item.preview}
                    alt={item.file.name}
                    className="h-16 w-16 object-cover rounded-md ml-2"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropZone;
