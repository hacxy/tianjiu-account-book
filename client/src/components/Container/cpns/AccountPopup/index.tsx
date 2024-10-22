import { useAccountPopup } from './useAccountPopup';
import { Grid, NumberKeyboard, Popup, SafeArea, Swiper } from '@taroify/core';
import styles from './index.module.scss';
import React, { memo, useMemo, useState } from 'react';
import { CONSUME_ITEM } from '@/components/Container/cpns/AccountPopup/constants';
import { Image, Text, View } from '@tarojs/components';
import classNames from 'classnames';
import './index.scss';

export * from './useAccountPopup';

const AccountPopup: React.FC = memo(() => {
  const { visible, hideAccountPopup, openNumberKeyboard } = useAccountPopup();
  const [moneyText, setMoneyText] = useState('');
  const [accountType, setAccountType] = useState('');

  const currentMoney = useMemo(() => {
    return Number(moneyText);
  }, [moneyText]);

  const onFinish = () => {
    console.log(currentMoney);
  };

  return (
    <Popup
      open={visible}
      placement='bottom'
      onClose={hideAccountPopup}
      className={classNames(styles.AccountPopup, 'account-popup')}
      rounded
      // style={{ borderRadius: '30rpx 30rpx 0 0' }}
    >
      <Swiper>
        <Swiper.Item>
          <Grid bordered={false} square gutter={10}>
            {CONSUME_ITEM.map((item) => {
              return (
                <Grid.Item
                  key={item.title}
                  className={classNames({ active: item.type === accountType })}
                  icon={<Image src={item.icon} />}
                  text={item.title}
                  onClick={() => setAccountType(item.type)}
                />
              );
            })}
          </Grid>
        </Swiper.Item>
      </Swiper>
      <View className={styles.MoneyInputWrapper}>
        <View className={styles.MoneyInput}>
          ¥ <Text className={styles.MoneyValue}>{moneyText}</Text>
        </View>
      </View>
      <NumberKeyboard
        open={openNumberKeyboard}
        extraKey={[undefined, '.']}
        onKeyPress={(value) => {
          if (value === '.') {
            if (moneyText.includes('.') || !moneyText.length) {
              return;
            } else {
              setMoneyText(moneyText + value);
            }
          } else if (value === 0) {
            if (moneyText.length === 0) {
              return;
            } else {
              if (moneyText.toString().includes('.')) {
                if (moneyText.split('.')[1].length >= 2) {
                  return;
                }
              }

              setMoneyText(moneyText + value);
            }
          } else if (!value) {
            // 删除
            setMoneyText(moneyText.slice(0, -1));
          } else if (value === '完成') {
            // 完成
            onFinish();
          } else {
            if (moneyText.toString().includes('.')) {
              if (moneyText.split('.')[1].length >= 2) {
                return;
              }
            }
            setMoneyText(moneyText + value);
          }
        }}
      >
        <NumberKeyboard.Sidebar>
          <NumberKeyboard.Key size='large' code='backspace' />
          <NumberKeyboard.Key size='large' code='keyboard-hide' color='blue'>
            完成
          </NumberKeyboard.Key>
        </NumberKeyboard.Sidebar>
      </NumberKeyboard>
      <SafeArea position='bottom' />
    </Popup>
  );
});

export default AccountPopup;
