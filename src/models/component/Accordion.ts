import { ReactNode } from "react";

export interface IAccordion {
  id: number;
  reposUrl: string;
  title: string;
  children: ReactNode;
  change: Function;
  expanded: boolean;
}
