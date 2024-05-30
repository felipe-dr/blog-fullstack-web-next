import { StyleSheet } from "@src/theme/style-sheet";
import { BaseComponent } from "@src/theme/base-component";

interface BoxProps {
  tag: any;
  styleSheet: StyleSheet;
  children: React.ReactNode;
}

export default function Box({ tag, styleSheet, children }: BoxProps) {
  const Tag = tag || "div";

  return (
    <BaseComponent as={Tag} styleSheet={styleSheet}>
      {children}
    </BaseComponent>
  );
}
