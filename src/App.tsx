import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const ItemList = lazy(() => import("./components/items/index"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>...Loading</>}>
        <Routes>
          <Route path="/" element={<ItemList />} />
          {/* Catch-all route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
