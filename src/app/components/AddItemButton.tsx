"use client";
import React from "react";

const AddItemButton = ({ setItem }: any) => {
  return (
    <div>
      <button
        onClick={setItem}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItemButton;
