import { Divider } from "@mantine/core";
import ActivityChart from "../Tools/ActivityChart";
import { StatsRingCard } from "../Tools/RunningChallange";

export default function Activity() {
  return(
    <div>
    <ActivityChart/>
    <Divider my="sm"/>
    <StatsRingCard/>
    </div>
  );
}