import { getMenuButtonBoundingClientRect, getSystemInfoSync } from '@/components/Container/cpns/Navigator/utils';
import { Navbar } from '@taroify/core';
import React, { memo } from 'react';
import { View } from '@tarojs/components';
import './index.scss';

export interface Props {
  safeAreaInsetTop?: boolean;
  title: string;
}

const Navigator: React.FC<Props> = memo((props) => {
  const { safeAreaInsetTop = true, title } = props;
  const { statusBarHeight = 22 } = getSystemInfoSync();
  const menuButtonInfo = getMenuButtonBoundingClientRect();
  const navBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height;

  return (
    <View className='navigator-wrapper'>
      <Navbar
        title={title}
        style={{ height: `${navBarHeight}px`, paddingTop: safeAreaInsetTop ? statusBarHeight + 'px' : 0 }}
      />
    </View>
  );
});

export default Navigator;
