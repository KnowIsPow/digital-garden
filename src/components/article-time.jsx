import { format } from 'date-fns';

export function ArticleTime({ date }) {
  return (
    <time dateTime={date} className="text-gray-500">
      {format(new Date(date), 'MMMM dd, yyyy')}
    </time>
  );
}