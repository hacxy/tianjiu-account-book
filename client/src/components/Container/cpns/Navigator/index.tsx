import { getMenuButtonBoundingClientRect, getSystemInfoSync } from '@/components/container/cpns/navigator/utils';
import { Navbar } from '@taroify/core';
import React, { memo } from 'react';
import { Text, View } from '@tarojs/components';
import './index.scss';

export interface NavigatorProps {
  safeAreaInsetTop?: boolean;
  title?: string;
  navLeftIcon?: React.ReactNode;
  navRightIcon?: React.ReactNode;
  navLeftText?: string;
  navRightText?: string;
  transparent?: boolean;
  textColor?: string;
}

const Navigator: React.FC<NavigatorProps> = memo((props) => {
  const { safeAreaInsetTop = true, title, navLeftIcon, navLeftText, navRightIcon, navRightText } = props;
  const { statusBarHeight = 22 } = getSystemInfoSync();
  const menuButtonInfo = getMenuButtonBoundingClientRect();
  const navBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height;

  return (
    <View className='navigator-wrapper'>
      <Navbar
        title={<Text style={{ color: props.textColor }}>{title}</Text>}
        style={{
          height: `${navBarHeight}px`,
          paddingTop: safeAreaInsetTop ? statusBarHeight + 'px' : 0,
          backgroundColor: props.transparent ? 'transparent' : '#fff'
        }}
      >
        {(navLeftIcon || navLeftIcon) && <Navbar.NavLeft icon={navLeftIcon}>{navLeftText}</Navbar.NavLeft>}
        {(navRightIcon || navRightText) && <Navbar.NavRight icon={navRightIcon}>{navRightText}</Navbar.NavRight>}
      </Navbar>
    </View>
  );
});

export default Navigator;
