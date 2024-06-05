import React from "react";
import styled from "styled-components";

import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import { StyleSheet } from "@src/theme/style-sheet";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
  ref: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

interface BaseComponentProps {
  styleSheet: StyleSheet;
  [key: string]: any;
}

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>(
  (props, ref) => {
    return <StyledBaseComponent ref={ref} {...props} />;
  }
);

BaseComponent.defaultProps = {
  styleSheet: {},
};
