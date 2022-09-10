import { useState } from "react";
import { SearchBar } from "../Tools/SearchBar";

export default function Medication(props: boolean) {
  const [active, setActive] = useState(props);
  return <SearchBar />;
}
