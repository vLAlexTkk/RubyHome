import { IButton } from "@src/types/button";
import Loop from "@icons/loop.svg";

export const Button = ({ children, search = "none", type = "default", ...props }: IButton): JSX.Element => {
  return (
    <button
      className={
        type == "contact"
          ? "flex items-center rounded-[5px] border border-primary bg-primary py-3 px-5 font-medium text-white transition-colors hover:bg-white hover:text-primary lg:py-3 lg:px-7.5"
          : type == "search"
          ? "flex items-center rounded-[10px] border border-primary bg-primary py-3 px-5 font-medium text-white transition-colors hover:bg-white hover:text-primary lg:py-4 lg:px-7.5"
          : type == "card-details"
          ? "w-full rounded-[5px] border border-primary bg-primary py-2 px-5 text-center font-medium text-white transition-colors hover:bg-white hover:text-primary"
          : type == "subscribe"
          ? "w-full rounded-[10px] border border-primary bg-primary py-2 px-5 text-center font-medium text-white transition-colors hover:bg-white hover:text-primary md:py-4 md:px-10"
          : "bg-primary py-2 px-2 text-white"
      }
      {...props}
    >
      {search != "none" && (
        <span className={search == "loop" ? "mr-2 flex text-white" : "hidden"}>
          <Loop className="h-[15px] w-3.5" />
        </span>
      )}
      {children}
    </button>
  );
};