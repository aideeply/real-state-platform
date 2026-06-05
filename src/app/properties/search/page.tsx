import { Suspense } from "react";
import SearchRouteClient from "./SearchRouteClient";

export default function SearchRoute() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">
          Loading search results...
        </div>
      }
    >
      <SearchRouteClient />
    </Suspense>
  );
}


