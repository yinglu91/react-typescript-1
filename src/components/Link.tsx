interface Props {
  url: string;
  className?: string;
  variant: "regular" | "dart";
  children: React.ReactNode;
}

// type LinkProps = {
//   url: string;
//   className?: string;
//   variant: "regular" | "dart";
//   children: React.ReactNode;
// }

// _rafce
const Link = ({ url, variant, className, children }: Props) => {
  const hasHyphen = className?.includes('-') ?? false

  return (
    <a href={url}
    className={className}
      target="_blank"
       rel="noopener noreferrer">{children}</a>
  )
}

export default Link
