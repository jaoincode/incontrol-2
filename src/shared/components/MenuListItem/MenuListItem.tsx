import { MenuListItemType } from "./MenuListItem.types";

export function MenuListItem({
  id,
  title,
  date,
  value,
  type,
}: MenuListItemType) {
  return (
    <div
      key={id}
      className="flex w-full justify-between bg-item-bg py-2 px-4 rounded-lg"
    >
      <p>{title}</p>
      <span>{date}</span>
      <span
        className={`${
          type === "spent" ? "text-red-400" : "text-secondary-color-2"
        }`}
      >
        ${value.toFixed(2)}
      </span>
    </div>
  );
}