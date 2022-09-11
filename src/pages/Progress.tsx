import Leaderboard from "../Tools/Leaderboard";
import { StatTracking } from "../Tools/StatTracking";

interface RowData {
    name: string;
    email: string;
    company: string;
  }

  interface StatsGroupProps {
    data: { title: string; stats: string; description: string }[];
  }

export default function Progress() {
    const data: RowData[] = [{name: "Jack", email:"jj280822@gmail.com", company:"CAE"}]



  return (
    <>
    <Leaderboard data={data} />
    <StatTracking />
    </>
  );
}