import React from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-components';

const CampusInformation: React.FC = (props) => {
  const {children} = props;
  return (
    <PageHeaderWrapper>
      {children}
    </PageHeaderWrapper>
  );
};

export default CampusInformation;
