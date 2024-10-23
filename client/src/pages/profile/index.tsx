import Container from '@/components/container';
import { View } from '@tarojs/components';
import { FC, memo } from 'react';
import styles from './index.module.scss';
import UserAvatar from '@/components/user-avatar';
import CommonHeader from '@/components/common-header';
import { Cell, Toast } from '@taroify/core';
import { Edit, InfoOutlined } from '@taroify/icons';

const Profile: FC = memo(() => {
  return (
    <Container title='我的' navTransparent titleColor='#fff' navLeftIconColor='#fff'>
      <CommonHeader />
      <View className={styles.ProfileWrapper}>
        <View
          className={styles.UserInfoCard}
          onClick={() => {
            console.log('点击了');
          }}
        >
          <UserAvatar size='large' />
          <View className={styles.UserName}>用户名称</View>
        </View>
        <View className={styles.MenusWrapper}>
          <Cell title='编辑资料' isLink icon={<Edit />} />
          <Cell
            title='关于'
            isLink
            icon={<InfoOutlined />}
            onClick={() => {
              Toast.open('暂未开发');
            }}
          />
        </View>
      </View>
    </Container>
  );
});

export default Profile;
