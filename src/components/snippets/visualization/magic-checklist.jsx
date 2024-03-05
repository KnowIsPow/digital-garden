import { Meteors } from "@/components/ui/meteors";

export default function MagicChecklist({ items }) {
  return (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden shadow-lg md:-mx-20">
      <div className="translate-x-24">
        <Meteors className="before:from-slate-500" />
      </div>
      <div className="text-white p-4 flex items-center justify-center text-lg font-bold h-full py-12">
        <fieldset>
          <legend className="sr-only">Notifications</legend>
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.name} className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id={item.name}
                    readOnly
                    aria-describedby={item.name}
                    name={item.name}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                    checked={item.checked}
                  />
                </div>
                <div className="ml-3 text-sm leading-6 font-medium">
                  <label
                    htmlFor="comments"
                    className="font-semibold text-white"
                  >
                    {item.name}
                  </label>{" "}
                  {item.description && (
                    <span id="comments-description" className="text-slate-300">
                      {item.description}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
