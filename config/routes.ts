export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './user/Login'},
      {name: '注册', path: '/user/register', component: './user/Register'},
      {component: './404'},
    ],
  },
  {path: '/Home', name: '首页', icon: 'home', component: './Home'},
  {path: '/welcome', name: '大广场', icon: 'crown', component: './Welcome'},
  {path: '/personal-space', name: '个人空间', icon: 'smile', component: './PersonalSpace'},
  {
    path: '/personal-growth',
    name: '个人成长',
    icon: 'trophy',
    routes: [
      {path: '/personal-growth/study-record', name: '学习记录', component: './PersonalGrowth/Study'}
    ]
  },
  {
    path: '/campus-information',
    name: '校园资讯',
    icon: 'rocket',
    component: 'CampusInformation',
    routes: [
      {path: '/campus-information/campus-news', name: '校园新闻', component: './CampusInformation/CampusNews'},
      {path: '/campus-information/campus-food', name: '校园美食', component: './CampusInformation/CampusFood'},
      {path: '/campus-information/lost-mono', name: '失物招领', component: './CampusInformation/LostMono'},
      {component: './404'},
    ]
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'gold',
    access: 'canAdmin',
    component: 'Admin',
    routes: [
      {path: '/admin/user-manage', name: '用户管理', component: './Admin/UserManage'},
      {component: './404'},
    ],
  },
  // {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  // {path: '/', redirect: '/welcome'},
  // {component: './404'},
];
