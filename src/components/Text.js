import React from 'react';
import styled from 'styled-components';

import theme from 'theme';

const Base = styled.p`
  color: ${theme.colors.black};
`;

const Text = props => <Base>{props.children}</Base>;

export default Text;
