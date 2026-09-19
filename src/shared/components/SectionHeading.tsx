export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <h2 className="section-header">
        {number}. {title}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
