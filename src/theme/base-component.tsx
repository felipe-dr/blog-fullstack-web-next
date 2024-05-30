import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import styled from "styled-components";

import { StyleSheet } from "@src/theme/style-sheet";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
  return <StyledBaseComponent {...props} />;
};

BaseComponent.defaultProps = {
  styleSheet: {},
};
