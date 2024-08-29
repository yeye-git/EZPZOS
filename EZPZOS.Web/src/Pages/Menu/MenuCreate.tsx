import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiUploadSimpleLight } from "react-icons/pi";
import { DefaultMenuCreateValues } from "ezpzos.core";

const MenuCreate: React.FC = () => {
  // State variables to store form inputs and their corresponding setters
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>(['No.1 ordered']);
  const [newTag, setNewTag] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [dishImageUrl, setDishImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [showError, setShowError] = useState(false); // Error handling state

  /**
   * Adds a new tag to the tags list if it does not already exist
   */
  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  /**
   * Removes a specific tag from the tags list
   * @param tagToRemove The tag to be removed from the list
   */
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  /**
   * Handles the image file upload process and sets the image preview
   * @param event Event triggered when the file input changes
   */
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Inserts the provided image URL into the image preview area
   */
  const handleInsertImageUrl = () => {
    setImagePreview(dishImageUrl);
  };

  /**
   * Validates required fields and submits the form data
   */
  const handleSubmit = () => {
    if (!dishName || !dishDescription || !dishPrice || !category) {
      setShowError(true); // Show error if any required field is missing
      return;
    }

    const menuDetails = {
      dishName,
      dishDescription,
      dishPrice,
      category,
      tags,
      isAvailable,
      dishImageUrl,
      imagePreview,
    };

    console.log("Menu Details JSON:", JSON.stringify(menuDetails));
    // Handle submission logic
  };

  /**
   * Navigates back to the previous page
   */
  const goBack = () => {
    // Implement the logic to go back to the previous page
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="w-full max-w-lg mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
        <button className="text-black mb-4 flex items-center" onClick={goBack}>
          <FaArrowLeftLong className="inline w-4 h-4 mr-2" />
          Back
        </button>
        {showError && (
          <div className="text-red-500 mb-4">
            {DefaultMenuCreateValues.Messages.ValidationError}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.DishName}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.DishDescription}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={dishDescription}
              onChange={(e) => setDishDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.DishPrice}</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={dishPrice}
              onChange={(e) => setDishPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.Category}</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.Tags}</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  onClick={() => handleRemoveTag(tag)}
                  className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-sm border border-orange-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                className="flex-grow px-3 py-2 border border-gray-300 rounded bg-gray-100"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                className="w-[123px] h-[39px] bg-orange-500 text-white rounded"
                onClick={handleAddTag}
              >
                {DefaultMenuCreateValues.Labels.AddTagButton}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.IsDishAvailable}</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
            </label>
          </div>
          <div className="relative w-full">
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.UploadImage}</label>
            <div className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 flex items-center justify-center">
              <label className="w-full flex items-center justify-center cursor-pointer">
                <PiUploadSimpleLight className="mr-2" />
                {DefaultMenuCreateValues.Labels.UploadImage}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <div className="flex justify-center mt-2 text-gray-500">{DefaultMenuCreateValues.Labels.OrText}</div>
            <input
              type="text"
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded bg-gray-100"
              value={dishImageUrl}
              onChange={(e) => setDishImageUrl(e.target.value)}
            />
            <div className="flex justify-end mt-2">
                <button 
                  className="w-[123px] h-[39px] bg-orange-500 text-white rounded"
                  onClick={handleInsertImageUrl} // Insert the image URL
                >
                    {DefaultMenuCreateValues.Labels.InsertButton}
                </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">{DefaultMenuCreateValues.Labels.ImagePreview}</label>
            <div className="w-full h-[230px] mt-2 rounded border border-gray-300 flex items-center justify-center bg-gray-100">
              {imagePreview ? (
                <img src={imagePreview} alt="Image-Preview" className="h-full object-cover rounded" />
              ) : (
                <span className="text-gray-500">{DefaultMenuCreateValues.Labels.NoImageSelected}</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="w-[168px] h-[45px] bg-gray-300 text-gray-700 rounded">
            {DefaultMenuCreateValues.Labels.CancelButton}
          </button>
          <button 
            className="w-[168px] h-[45px] bg-orange-500 text-white rounded" 
            onClick={handleSubmit}
          >
            {DefaultMenuCreateValues.Labels.AddNewButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCreate;