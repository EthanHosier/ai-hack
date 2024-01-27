import { cn } from "@/lib/utils";
import { AppConfig } from "@/utils/AppConfig";

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? "44" : "32";
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <div className={"flex flex-col items-center text-gray-900 font-semibold"}>
      <span className={cn("text-3xl", { "text-4xl": props.xl })}>
        <span className="text-primary">GI</span>LO
      </span>
      <span className={cn("text-sm", { "text-xs": !props.xl })}>
        <span className={"text-primary mr-1"}>Global Ideas</span>
        Local Impact
      </span>
    </div>
  );
};

export { Logo };
