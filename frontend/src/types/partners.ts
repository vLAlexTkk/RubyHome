import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPartners extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
