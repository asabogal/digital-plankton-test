import React from 'react';
import styled from 'styled-components';
import BrandLoader from './BrandLoader';

const Profile = () => {
  return (
    <PageContainer>
      <BrandLoader/>
    </PageContainer>
  );
};

export default Profile;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
