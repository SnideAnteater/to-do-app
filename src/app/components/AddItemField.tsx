"use client";
import React, { useState } from "react";

const AddItemField = ({ onChangeFunction }: any) => {
  return (
    <div className=" my-2">
      <input
        className=" text-black"
        name="username"
        onChange={onChangeFunction}
        placeholder="Add Items"
      ></input>
    </div>
  );
};

export default AddItemField;
