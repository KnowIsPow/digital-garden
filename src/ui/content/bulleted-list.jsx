export function BulletedList({ items }) {
  return (
    <ul className="px-1 sm:px-4 py-4 space-y-1">
      {items.map((item) => (
        <li key={item} className="flex gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}
