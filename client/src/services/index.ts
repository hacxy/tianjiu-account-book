import Taro from '@tarojs/taro';

export const userLogin = () => {
  return Taro.cloud.callFunction({
    name: 'login',
    data: {}
  });
};
