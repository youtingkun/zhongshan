import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/system',
  name: 'system',
  meta: { auth: true },
  redirect: { name: 'system' },
  component: layoutHeaderAside,
  children: [
    // {
    //   path: 'person-setting',
    //   name: `${pre}person-setting`,
    //   component: () => import('@/pages/system/person-setting'),
    //   meta: { ...meta, title: '个人设置' }
    // },
    // {
    //   path: 'user-manage',
    //   name: `${pre}user-manage`,
    //   component: () => import('@/pages/system/user-manage'),
    //   meta: { ...meta, title: '用户管理' }
    // },
    // {
    //   path: 'role-manage',
    //   name: `${pre}role-manage`,
    //   component: () => import('@/pages/system/role-manage'),
    //   meta: { ...meta, title: '角色管理' }
    // },
    {
      path: 'menu-manage',
      name: `system-menu-manage`,
      component: () => import('@/views/system/menu-manage'),
      meta: { ...meta, title: '菜单管理' }
    }
    // {
    //   path: 'log-manage',
    //   name: `${pre}log-manage`,
    //   component: () => import('@/pages/system/log-manage'),
    //   meta: { ...meta, title: '日志管理' }
    // },
    // {
    //   path: 'dept-manage',
    //   name: `${pre}dept-manage`,
    //   component: () => import('@/pages/system/dept-manage'),
    //   meta: { ...meta, title: '部门管理' }
    // }
  ]
}
