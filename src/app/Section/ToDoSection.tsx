"use client";
import React, { useState } from "react";
import AddItemField from "../components/AddItemField";
import AddItemButton from "../components/AddItemButton";
import ItemList from "../components/ItemList";

let nextID = 0;

interface itemListProperties {
  id: number;
  itemName: string;
  isDone: boolean;
}

const ToDoSection = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState<itemListProperties[]>([]);

  const setItemButton = (e: any) => {
    setItem(e.target.value);
  };

  const addItemToArray = () => {
    const itemListCopy = [...itemList];
    itemListCopy.push({
      id: nextID++,
      itemName: item,
      isDone: false,
    });
    setItemList(itemListCopy);
    console.log(item);
  };

  const deleteItemFromArray = (itemID: any) => {
    console.log(itemID);
    let itemListCopy = [...itemList];
    itemListCopy = itemListCopy.filter((item) => item.id != itemID);
    console.log(itemListCopy);
    setItemList(itemListCopy);
  };

  const setCompleted = (itemID: any) => {
    console.log(itemID);
    let itemListCopy = [...itemList];
    itemListCopy[itemID].isDone = true;
    setItemList(itemListCopy);
  };

  return (
    <div className=" flex flex-col items-center w-full">
      <AddItemField onChangeFunction={setItemButton}></AddItemField>
      <AddItemButton setItem={addItemToArray}></AddItemButton>
      <ItemList
        itemList={itemList}
        deleteFunction={deleteItemFromArray}
        completeFunction={setCompleted}
      ></ItemList>
    </div>
  );
};

export default ToDoSection;
