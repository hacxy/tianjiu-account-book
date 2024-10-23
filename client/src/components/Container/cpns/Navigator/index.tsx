import { getMenuButtonBoundingClientRect, getSystemInfoSync } from '@/components/container/cpns/navigator/utils';
import { Navbar } from '@taroify/core';
import React, { memo } from 'react';
import { Text, View } from '@tarojs/components';
import './index.scss';
import Taro, { getCurrentPages } from '@tarojs/taro';
import { ArrowLeft } from '@taroify/icons';

export interface NavigatorProps {
  safeAreaInsetTop?: boolean;
  title?: string;
  navTransparent?: boolean;
  titleColor?: string;
  navLeftIconColor?: string;
  customeLeft?: React.ReactNode;
  customeRight?: React.ReactNode;
  homePath?: string;
}

const Navigator: React.FC<NavigatorProps> = memo((props) => {
  const { safeAreaInsetTop = true, title, navLeftIconColor, homePath = '/pages/home/index' } = props;
  const { statusBarHeight = 22 } = getSystemInfoSync();
  const menuButtonInfo = getMenuButtonBoundingClientRect();
  const navBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height;
  const pagesLength = getCurrentPages().length;

  const handleBack = () => {
    if (pagesLength > 1) {
      Taro.navigateBack();
    } else {
      Taro.redirectTo({
        url: homePath
      });
    }
  };

  return (
    <View className='navigator-wrapper'>
      <Navbar
        title={<Text style={{ color: props.titleColor }}>{title}</Text>}
        style={{
          height: `${navBarHeight}px`,
          paddingTop: safeAreaInsetTop ? statusBarHeight + 'px' : 0,
          backgroundColor: props.navTransparent ? 'transparent' : '#fff'
        }}
      >
        {props.customeLeft && <Navbar.NavLeft icon={props.customeLeft}></Navbar.NavLeft>}
        {!props.customeLeft && (
          <Navbar.NavLeft icon={<ArrowLeft color={navLeftIconColor || '#000'} />} onClick={handleBack}></Navbar.NavLeft>
        )}
      </Navbar>
    </View>
  );
});

export default Navigator;
