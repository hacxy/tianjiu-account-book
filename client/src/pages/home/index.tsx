import { View } from '@tarojs/components';
import Container from '@/components/container';
import AddBtn from '@/pages/home/cpns/AddBtn';
import styles from './index.module.scss';
import UserAvatar from '@/components/user-avatar';
import Taro from '@tarojs/taro';
import { useEffect } from 'react';
import CommonHeader from '@/components/common-header';

function Home() {
  useEffect(() => {
    console.log(33333);
  }, []);
  return (
    <Container
      title='甜酒账簿'
      titleColor='#fff'
      navTransparent
      customeLeft={
        <UserAvatar
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/profile/index'
            });
          }}
        />
      }
    >
      <CommonHeader />
      <View className={styles.HomeWrapper}></View>
      <AddBtn />
    </Container>
  );
}

export default Home;
