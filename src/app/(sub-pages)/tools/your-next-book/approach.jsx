"use client";

import { Button } from "@/components/button";
import { useState } from "react";

export function BookApproach({}) {
  const [activeApproach, setActiveApproach] = useState();

  return (
    <div className="flex gap-x-4 justify-between">
      {[
        { name: "Find Similar Books", disabled: false },
        { name: "Explore New Topics", disabled: false },
        { name: "Get More Technical", disabled: true },
        { name: "Get More General", disabled: true },
      ].map(({ name, disabled }) => (
        <div key={name} className="relative">
          <Button
            variant={activeApproach === name ? "default" : "outline"}
            onClick={() => setActiveApproach(name)}
            disabled={disabled}
            className="flex-col"
          >
            {name}
          </Button>
          {disabled && (
            <div className="text-xs absolute inset-x-0 top-0 w-full text-center -translate-y-4 text-gray-400">
              Coming Soon
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
