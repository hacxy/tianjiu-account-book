import { View, Button } from '@tarojs/components';
import { useState } from 'react';
import { userLogin } from '@/services';

const Login = () => {
  const [openid, setOpenid] = useState();
  const handleLogin = () => {
    userLogin().then((res: any) => {
      setOpenid(res.result.openid);
    });
  };
  return (
    <View className='index'>
      <Button onClick={handleLogin}>获取登录云函数</Button>
      <View>openid: {openid}</View>
    </View>
  );
};

export default Login;
