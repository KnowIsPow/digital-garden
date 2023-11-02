import { ChartPieIcon } from "@heroicons/react/24/outline";
import { Callout } from "../callout";

export default function Stat({ title = "Did you know?", text }) {
  return (
    <Callout title={title} color="blue" icon={ChartPieIcon}>
      {text}
    </Callout>
  );
}
