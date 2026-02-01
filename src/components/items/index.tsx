import { useEffect, useRef, useState } from "react";
import * as ItemService from "../../service/item.service";
import type { Item } from "../../types/types";
import { useInfiniteScroll } from "../../hooks/infiniteScroll";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>();
  const [cursor,setCursor] = useState<number>(0)

  useEffect(() => {
    getItems();
  }, []);
  const loaderRef = useInfiniteScroll(getItems);
  async function getItems() {
    try {
      const response = await ItemService.get(cursor, 16);
      setItems(response?.data);
    } catch (err) {
      console.log("err in the get Items", err);
    }
  }

  return (
    <div ref={loaderRef} className="h-screen">
      <h1 className="flex justify-center text-red-500 font-bold text-3xl mb-4">
        Item List
      </h1>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5">
          {items?.map((e: Item) => (
            <div key={e.id} className="bg-gray-300 p-6 rounded-md shadow-sm">
              <h2 className="font-bold text-lg mb-2">{e.name}</h2>
              <p className="text-sm">ID: {e.id}</p>
              <p className="text-sm">Category: {e.category}</p>
              <p className="text-sm">Brand: {e.brand}</p>
              <p className="text-sm">Quantity: {e.quantity}</p>
              <p className="font-semibold mt-3">Price: ₹{e.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
