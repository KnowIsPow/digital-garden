import { format } from "date-fns";

export function ArticleTime({ date }) {
  return <time dateTime={date}>{format(new Date(date), "MMMM dd, yyyy")}</time>;
}
