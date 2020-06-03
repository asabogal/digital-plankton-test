import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import BrandLoader from './BrandLoader';
import Browse from './Browse';

const Profile = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading((false))
    }, 4500)
  })

  return (
    <PageContainer>
      {loading && <BrandLoader/>}
      {!loading && <Browse/>}
    </PageContainer>
  );
};

export default Profile;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
