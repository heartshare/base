/* 测试 */
const title = '基础系统(本地)';
const baseUrl = 'http://localhost:8086/';
// const socket = 'wss://127.0.0.1:9002/';
const dev = true;

/* 正式 */
// const title = '基础系统';
// const baseUrl = 'https://api.webmis.vip/';
const socket = 'wss://webmis.vip/wss';
// const dev = false;

/* 配置信息 */
export default {
  dev: dev,
  title: title,
  version: '1.0.0',
  baseUrl: baseUrl,
  apiUrl: baseUrl+'admin/',
  themeColor: '#6FB737',
  copy: 'Copyright © WebMIS.vip 2020',
  // 请求
  request:{
    headers: {"Content-Type":"multipart/form-data"},
  },
  // 状态栏
  statusBar:{height:'0px',color: '#333', bgColor:'#FFF'},
  // 更新
  update: true,
  upDateColor: {
    bg: '#6FB737',
    logoBg: '#FFF',
    loading: '#FFF',
    loaded: '#666',
    copy: '#333',
    butColor: '#666',
    butBg: '#FFF',
    butText: '下载并安装'
  },
  upIosUrl: 'itms-apps://itunes.apple.com/cn/app/tao-bao-sui-shi-sui-xiang/id387682726?mt=8',
  // 地图
  amapKey: 'd956f0c3e15489a1b5bf291e5d133c8a',
  // 百度AI
  baiduOcr: 'https://aip.baidubce.com/rest/2.0/ocr/v1/',
  // Socket
  socketServer: socket,
  msgRead: 1000,
  msgNew: 5*60*1000,
  msgContent: 'content',
  msgBrowser: false,
}