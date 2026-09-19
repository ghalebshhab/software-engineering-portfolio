export function TagList({
  items,
  label,
  emphasized = [],
}: {
  items: readonly string[];
  label: string;
  emphasized?: readonly string[];
}) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className={emphasized.includes(item) ? 'tag tag--primary' : 'tag'}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
