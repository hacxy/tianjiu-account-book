import Navigator, { NavigatorProps } from '@/components/container/cpns/navigator';
import { View } from '@tarojs/components';
import React, { memo, PropsWithChildren } from 'react';
import styles from './index.module.scss';
import AccountPopup from '@/components/container/cpns/account-popup';
import { ConfigProvider } from '@taroify/core';

interface Props extends NavigatorProps {}

const Container: React.FC<PropsWithChildren<Props>> = memo((props) => {
  const { children, ...navProps } = props;
  return (
    <ConfigProvider theme={{ primaryColor: '#008080' }}>
      <View className={styles.ContainerWrapper}>
        {navProps.title && <Navigator {...navProps} />}
        {children}
        <AccountPopup />
      </View>
    </ConfigProvider>
  );
});

export default Container;
