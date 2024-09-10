export default function Tab({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label={label}
      />
      <div role="tabpanel" className="tab-content mt-10">
        {description}
      </div>
    </>
  );
}
