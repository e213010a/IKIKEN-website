import { type ReactNode } from "react";
import clsx from "clsx";

type StickyPinProps = {
  children: ReactNode;
  className?: string;
};

/**
 * スクロールに追従して画面内に留まり続けるビジュアル用のラッパー。
 * position: sticky ベースなので、スクロールジャックなしで安定して動く。
 */
export function StickyPin({ children, className }: StickyPinProps) {
  return (
    <div className={clsx("lg:sticky lg:top-28 lg:self-start", className)}>{children}</div>
  );
}
