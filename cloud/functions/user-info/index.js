const cloud = require("wx-server-sdk");
// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();
exports.main = async () => {
  const user = db.collection("user");
  const wxContext = cloud.getWXContext();

  const userInfo = await user
    .where({
      openid: wxContext.OPENID,
    })
    .get();

  if (userInfo.data.length === 0) {
    await db.collection("user").add({
      data: {
        openid: wxContext.OPENID,
        //  截取openid后六位作为用户名
        username: `用户${wxContext.OPENID.slice(-6)}`,
        avatarUrl: "",
        createTime: db.serverDate(),
        updateTime: db.serverDate(),
      },
    });
    const userInfo = await db
      .collection("user")
      .where({
        openid: wxContext.OPENID,
      })
      .get();

    return {
      code: 0,
      data: userInfo.data[0],
    };
  }

  return {
    code: 0,
    data: userInfo.data[0],
  };
};
