import { classNames } from "@/functions/class-names";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export function BookPreview({ book, reason }) {
  return (
    <div className="border rounded-md p-4">
      <div className="flex gap-x-4">
        {
          <div className="aspect-[2/3] w-1/5 relative flex-shrink-0">
            <Image
              fill
              alt={book.title}
              src={
                book.imageLinks?.smallThumbnail ||
                "https://dummyimage.com/134x201/f1f1f1/000000.png&text=No+Image"
              }
              className="object-cover"
            />
          </div>
        }
        <div>
          <div className="flex justify-between items-start w-full">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                {book.title}
              </h3>
              {book.authors && (
                <p className="mt-1 text-sm text-gray-500">
                  {book.authors.join(", ")}
                </p>
              )}
              {book.categories && (
                <p className="mt-4 text-sm text-gray-500">
                  {book.categories.join(", ")}
                </p>
              )}
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-700">
                {book.averageRating}
                <span className="sr-only"> out of 5 stars</span>
              </p>
              {book.averageRating && (
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        book.averageRating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          {reason && (
            <p className="mt-4 text-sm text-gray-500 line-clamp-5">{reason}</p>
          )}
        </div>
      </div>
    </div>
  );
}
