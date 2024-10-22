import React, { memo } from 'react';
import { Image } from '@tarojs/components';
import addBtnIcon from '@/assece/images/home/add_btn.svg';
import styles from './index.module.scss';
import { useAccountPopup } from '@/components/container/cpns/account-popup/useAccountPopup';

const AddBtn: React.FC = memo(() => {
  const { showAccountPopup } = useAccountPopup();
  return (
    <Image
      className={styles.AddBtn}
      src={addBtnIcon}
      onClick={() => {
        showAccountPopup();
      }}
    />
  );
});

export default AddBtn;
