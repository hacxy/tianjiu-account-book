import type { CIOptions } from '@tarojs/plugin-mini-ci';
import projectConfig from '../../project.config.json';
import path from 'path';
import { fs } from '@tarojs/helper';

const SECRET_FILE_NAME = 'wechat.secret.key';
const privateKeyIsExist = fs.existsSync(path.resolve(__dirname, `../${SECRET_FILE_NAME}`));

// 判断是否存在, 没有则创建一个 secret 文件
if (!privateKeyIsExist) {
  fs.writeFileSync(path.resolve(__dirname, `../${SECRET_FILE_NAME}`), 'app-secret');
}

// 配置 CI 插件
export const CIPluginOpt: CIOptions = {
  weapp: {
    appid: projectConfig.appid,
    privateKeyPath: path.resolve(__dirname, `../${SECRET_FILE_NAME}`)
  }
};
