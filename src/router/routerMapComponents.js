import layoutHeaderAside from '@/layout/header-aside'
export default {
  'layoutHeaderAside': layoutHeaderAside,
  'system/menu-manage': () => import(/* webpackChunkName: "system/menu-manage" */'@/views/system/menu-manage'),
  'system/role-manage': () => import(/* webpackChunkName: "system/role-manage" */'@/views/system/role-manage'),
  'system/permission-manage': () => import(/* webpackChunkName: "system/permission-manage" */'@/views/system/permission-manage'),
  'system/user-manage': () => import(/* webpackChunkName: "system/user-manage" */'@/views/system/user-manage'),
  'system/file-manage': () => import(/* webpackChunkName: "system/file-manage" */'@/views/system/file-manage'),
  'system/mail-manage': () => import(/* webpackChunkName: "system/mail-manage" */'@/views/system/mail-manage'),
  'system/log-query': () => import(/* webpackChunkName: "system/log-query" */'@/views/system/log-query'),
  'system/note-query': () => import(/* webpackChunkName: "system/note-query" */'@/views/system/note-query')
}
