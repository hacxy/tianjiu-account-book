import { View } from '@tarojs/components';
import React, { memo } from 'react';
import styles from './index.module.scss';

interface Props {
  height?: number;
}

const CommonHeader: React.FC<Props> = memo((props) => {
  const { height } = props;
  return <View className={styles.CommonHeader} style={{ height: `${height}rpx` }} />;
});

export default CommonHeader;
