import { useEffect } from 'react';
import Taro, { useDidShow, useDidHide } from '@tarojs/taro';
import { getUserInfo } from '@/services';
import './app.scss';

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.log(222222);
  });

  // 对应 onShow
  useDidShow(() => {
    Taro.cloud.init(); // 初始化云开发
    getUserInfo(); // 获取用户信息
  });

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
}

export default App;
