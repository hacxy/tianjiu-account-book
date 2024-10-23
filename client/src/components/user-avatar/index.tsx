import { Avatar } from '@taroify/core';
import { FC, memo } from 'react';
import default_avatar from '@/assece/images/common/default_avatar.jpeg';
import { AvatarProps } from '@taroify/core/avatar/avatar';
import styles from './index.module.scss';

interface Props extends AvatarProps {}

const UserAvatar: FC<Props> = memo((props) => {
  return <Avatar src={default_avatar} {...props} className={styles.UserAvatart} />;
});

export default UserAvatar;
