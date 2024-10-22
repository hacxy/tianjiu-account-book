import { Avatar } from '@taroify/core';
import { FC, memo } from 'react';
import default_avatar from '@/assece/images/common/default_avatar.jpeg';
import { ViewProps } from '@tarojs/components';
import { AvatarProps } from '@taroify/core/avatar/avatar';

interface Props extends AvatarProps {}

const UserAvatar: FC<Props> = memo((props) => {
  return <Avatar src={default_avatar} {...props} />;
});

export default UserAvatar;
