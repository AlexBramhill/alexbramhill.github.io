import Link from "next/link";
import DateFormatter from "../date-formatter";
import { TextLink } from "../text-link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, date, excerpt, slug }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">
        <TextLink href={`/blog/${slug}`}>{title}</TextLink>
      </h3>
      <div className="flex gap-4 flex-wrap">
        <div className="shrink-0 w-32">
          <DateFormatter dateString={date} />
        </div>
        <div className="flex-1 min-w-96">{excerpt}</div>
      </div>
    </div>
  );
}
