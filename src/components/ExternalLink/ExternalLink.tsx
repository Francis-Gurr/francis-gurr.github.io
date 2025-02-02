import { ExternalLinkIcon } from "lucide-react";

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
}

const ExternalLink: React.FC<StyledLinkProps> = ({ href, children, newTab = false }) => {
  return (
    <a
      className="underline text-teal-700 decoration-teal-700 inline-flex items-center gap-1 hover:text-teal-900 hover:decoration-teal-900 hover:decoration-2"
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {newTab && <ExternalLinkIcon size={16} />}
    </a>
  );
};

export { ExternalLink };

