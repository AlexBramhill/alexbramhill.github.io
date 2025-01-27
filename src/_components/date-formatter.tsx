type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateFormatter;
