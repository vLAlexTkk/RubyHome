import { IContainer } from "@src/types/container";
import clsx from "clsx";

export const Container = ({ children, className, ...props }: IContainer): JSX.Element => {
  return (
    <div id="#properties" className={clsx("mx-auto w-[100wh] px-5 md:px-10", { className })} {...props}>
      {children}
    </div>
  );
};
