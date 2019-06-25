export default
{
  redirect: '',
  path: '/system',
  component: '',
  children: [
    {
      redirect: 'redirect______',
      path: '/system/menu-manage',
      component: 'system/menu-manage',
      meta: 'sys_menu_settings',
      icon: 'fa fa-windows',
      id: 2,
      sort: 1,
      title: '菜单管理'
    },
    {
      redirect: null,
      path: '/system/permission-manage',
      component: 'system/permission-manage',
      meta: null,
      icon: 'fa fa-align-justify',
      id: 4,
      sort: 3,
      title: '权限管理'
    },
    {
      'redirect': null,
      'path': '/system/mail-manage',
      'component': 'system/mail-manage',
      'meta': null,
      'icon': 'fa fa-envelope-o',
      'id': 7,
      'sort': 6,
      'title': '邮件管理'
    },
    {
      'redirect': null,
      'path': '/system/log-query',
      'component': 'system/log-query',
      'meta': null,
      'icon': 'fa fa-book',
      'id': 8,
      'sort': 7,
      'title': '日志查询'
    },
    {
      'redirect': '',
      'path': '/system/menuRoute-manage',
      'component': '',
      'meta': '',
      'icon': 'fa fa-anchor',
      'id': 10,
      'sort': 9,
      'title': '路由管理'
    },
    {
      'redirect': null,
      'path': '/system/role-manage',
      'component': 'system/role-manage',
      'meta': null,
      'icon': 'fa fa-cubes',
      'id': 3,
      'sort': 2,
      'title': '角色管理'
    },
    {
      'redirect': null,
      'path': '/system/note-query',
      'component': 'system/note-query',
      'meta': null,
      'icon': 'fa fa-commenting',
      'id': 9,
      'sort': 8,
      'title': '短信查询'
    },
    {
      redirect: null,
      path: '/system/user-manage',
      component: 'system/user-manage',
      meta: null,
      icon: 'fa fa-user',
      id: 5,
      sort: 4,
      title: '用户管理'
    }
  ],
  meta: '',
  icon: 'fa fa-gears',
  id: 1,
  sort: 1,
  title: '系统设置'
}
