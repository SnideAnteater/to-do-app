"use client";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const ItemList = ({ itemList, deleteFunction, completeFunction }: any) => {
  return (
    <div className=" w-full mt-4">
      <table className=" table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Item Name
            </th>
            <th scope="col" className="px-6 py-3">
              State
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
          {itemList.map(({ id, itemName, isDone }: any) => (
            <tr
              key={id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {id}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {itemName}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {isDone ? "Done" : "Doing"}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row justify-center"
              >
                <button
                  onClick={() => {
                    deleteFunction(id);
                  }}
                  type="button"
                  className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4
                   focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center
                   inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white 
                   dark:focus:ring-red-800 dark:hover:bg-red-500"
                >
                  <RiDeleteBinLine></RiDeleteBinLine>
                </button>
                <button
                  onClick={() => {
                    completeFunction(id);
                  }}
                  type="button"
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4
                   focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center
                   inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white 
                   dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                >
                  <FaCheck></FaCheck>
                </button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default ItemList;
