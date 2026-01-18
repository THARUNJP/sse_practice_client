import { useEffect, useState } from "react";
import * as ItemService from "../../service/item.service";
import type { Item } from "../../types/types";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>();
  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      const response = await ItemService.get();
      setItems(response?.data);
    } catch (err) {
      console.log("err in the get Items", err);
    }
  }

  return (
    <>
      <h1 className="flex justify-center text-red-500 font-bold text-3xl mb-4">
        Item List
      </h1>

      <div className="flex justify-center">
        <table className="border border-gray-300 w-3/4 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-4">ID</th>
              <th className="border px-4 py-4">Name</th>
              <th className="border px-4 py-4">Price</th>
              <th className="border px-4 py-4">quantity</th>
              <th className="border px-4 py-4">category</th>
              <th className="border px-4 py-4">brand</th>
            </tr>
          </thead>

          <tbody>
            {items?.map((item: Item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-4">{item.id}</td>
                <td className="border px-4 py-4">{item.name}</td>
                <td className="border px-4 py-4">{item.price}</td>
                <td className="border px-4 py-4">{item.quantity}</td>
                <td className="border px-4 py-4">{item.category}</td>
                <td className="border px-4 py-4">{item.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
