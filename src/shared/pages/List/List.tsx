import { useState } from "react";
import { AddItemForm, Dashboard } from "../../components";

export function List({ type }: { type: "spents" | "entries" }) {
  const [addMenuOpen, setAddMenuOpen] = useState(false);

  return (
    <>
      <AddItemForm
        onClose={() => setAddMenuOpen(false)}
        open={addMenuOpen}
        defaultType={type === "spents" ? "spent" : "entry"}
      />
      <div className="pt-16 md:pt-24 overflow-hidden">
        <div className="p-4 lg:pl-64 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Here is all your{" "}
            <span className="text-secondary-color">{type}</span>
          </h1>
          <p className="text-lg md:text-xl mt-1 text-gray-300">
            You can order by values
          </p>
          <Dashboard type={type === "entries" ? "entry" : "spent"} />
          <button
            onClick={() => setAddMenuOpen(true)}
            className="w-[100px] h-[40px] text-lg rounded-full bg-secondary-color hover:bg-violet-700 transition-transform dark:text-white mb-20"
          >
            + {type === "entries" ? "entry" : "spent"}
          </button>
        </div>
      </div>
    </>
  );
}
