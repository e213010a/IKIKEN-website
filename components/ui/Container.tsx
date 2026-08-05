import { type ElementType, type ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
