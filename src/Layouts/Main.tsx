import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import Box from '../Components/Box';

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
`;

interface MainLayoutProps {
  top?: ReactElement;
  bottom?: ReactElement;
  children?: ReactElement;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, bottom, top}) => {
  return (
    <Box flex={1}>
      <SafeAreaViewContainer>
        {top && (
            <Box
              justifyContent="center"
              alignItems="center"
              px={18}
              height={64}
              width="100%">
              {top}
            </Box>
          )}
          
        <Box flex={1}>{children}</Box>
      </SafeAreaViewContainer>
      {bottom && <Box>{bottom}</Box>}
    </Box>
  );
};

export default MainLayout;
