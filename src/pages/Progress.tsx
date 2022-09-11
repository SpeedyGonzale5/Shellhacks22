import { Divider } from "@mantine/core";
import Leaderboard from "../Tools/Leaderboard";
import { StatTracking } from "../Tools/StatTracking";

interface RowData {
  name: string;
  email: string;
  company: string;
}

export default function Progress() {
  const data: RowData[] = [
    { name: "Jack", email: "30", company: "1" },
    { name: "Jill", email: "42", company: "2" },
    { name: "Niv", email: "40", company: "3" },
    { name: "Robert", email: "35", company: "4" },
    { name: "Pedro", email: "29", company: "5" },
    { name: "Rachel", email: "28", company: "6" },
    { name: "Reana", email: "26", company: "7" },
    { name: "Aly", email: "24", company: "8" },
    { name: "Ali (You)", email: "06", company: "247" },
  ];

  return (
    <>
      <Leaderboard data={data} />
      <StatTracking />
    </>
  );
}
