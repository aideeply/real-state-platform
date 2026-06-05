"use client";

import { useSearchParams } from "next/navigation";
import SearchPage from "../searchPage/page";

export default function SearchRouteClient() {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "buy";
  const location = searchParams.get("location") || "";
  const city = searchParams.get("city") || "8";
  const locality = searchParams.get("locality") || "9694";
  const preference = searchParams.get("preference") || "S";
  const res_com = searchParams.get("res_com") || "R";

  const searchData = {
    tab,
    location: location.replace(/-/g, " "),
    city,
    locality,
    preference,
    res_com,
  };

  return <SearchPage searchData={searchData} />;
}
