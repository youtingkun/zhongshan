export default {
  path: '/system',
  title: '系统设置',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}/menu-manage`, title: '菜单设置', icon: 'home' },
    {
      title: '表格',
      icon: 'table',
      children: [
        { path: `${pre}table/1`, title: '表格 1' }
      ]
    },
    {
      title: 'ISSUES',
      icon: 'github',
      children: [
        { path: `${pre}issues/142`, title: '#142' }
      ]
    }
  ])('/system')
}
