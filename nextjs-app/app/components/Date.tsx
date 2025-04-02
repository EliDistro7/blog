import { format } from "date-fns";

export default function DateComponent({
  dateString,
}: {
  dateString: string | undefined;
}) {
  if (!dateString) {
    return null;
  }

  return (
    <time dateTime={dateString} className="text-ocean-dark/80">
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
}
