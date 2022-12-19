import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '记录',
  pwa: false,
  logo: "https://cdn.jsdelivr.net/gh/avidll/pic-repo//images/xl_logo.png",
  iconfontUrl: '',
};

export default Settings;
