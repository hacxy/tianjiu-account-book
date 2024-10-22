import { View } from '@tarojs/components';
import Container from '@/components/container';
import AddBtn from '@/pages/home/cpns/AddBtn';
import styles from './index.module.scss';
import UserAvatar from '@/components/UserAvatar';
import Taro from '@tarojs/taro';

function Home() {
  return (
    <Container
      title='甜酒账簿'
      textColor='#fff'
      transparent
      navLeftIcon={
        <UserAvatar
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/profile/index'
            });
          }}
        />
      }
    >
      <View className={styles.CommonHeader} />
      <View className={styles.HomeWrapper}></View>
      <AddBtn />
    </Container>
  );
}

export default Home;
