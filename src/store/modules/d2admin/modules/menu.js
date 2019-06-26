// 设置文件
import setting from '@/setting.js'
import * as menuServer from '@api/menu'
import * as menu from '@/menu'
import routes from '@/router/routes'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router'
import mainRouter from '@/router/mainRouter.js'
import routerMapComponents from '@/router/routerMapComponents'
import routerMenu from '@/router/routerMenu'
// import main from '@/router/modules/main'
import layoutHeaderAside from '@/layout/header-aside'

const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    aside: [],
    // 侧边栏收缩
    asideCollapse: setting.menu.asideCollapse,
    roleMenu: '',
    routes: routes,
    addRouters: []
  },
  actions: {
    getRoleMenu ({ state, commit, dispatch }) {
      menuServer.getRoleMenu().then(async res => {
        localStorage.setItem('roleMenu', JSON.stringify(res.data))
        localStorage.setItem('headerMenu', JSON.stringify(res.data))
        localStorage.setItem('asideMenu', JSON.stringify(res.data))
        commit('headerSet', res.data)
        await dispatch('generateRouter', res.data)
      })
    },

    // 动态生成路由
    generateRouter ({ state, dispatch, commit }, data) {
      // 遍历拿到子节点
      const getLastNode = function (data) {
        data.forEach(element => {
          if (element.children) {
            getLastNode(element.children)
          } else {
            mainRouter[0].children.push(element)
          }
        })
      }
      getLastNode(data)
      // 生成路由
      const formatRoutes = function (data) {
        data.forEach(element => {
          if (element.children) {
            formatRoutes(element.children)
          } else {
            element.component = _import(element.component)
            element.name = element.title
            element.meta = { title: element.title }
          }
        })
      }
      formatRoutes(mainRouter[0].children)

      // 添加路由
      router.addRoutes(mainRouter)

      commit('d2admin/page/init', [...routes, ...mainRouter], { root: true })
    },
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} state vuex state
     * @param {Boolean} collapse is collapse
     */
    asideCollapseSet ({ state, dispatch }, collapse) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = collapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 切换侧边栏展开和收缩
     * @param {Object} state vuex state
     */
    asideCollapseToggle ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = !state.asideCollapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 从持久化数据读取侧边栏展开或者收缩
     * @param {Object} state vuex state
     */
    asideCollapseLoad ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          defaultValue: setting.menu.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    }
  },
  mutations: {
    /**
     * @description 设置顶栏菜单
     * @param {Object} state vuex state
     * @param {Array} menu menu setting
     */
    headerSet (state, menu) {
      // store 赋值
      state.header = menu
    },
    /**
     * @description 设置侧边栏菜单
     * @param {Object} state vuex state
     * @param {Array} menu menu setting
     */
    asideSet (state, menu) {
      // store 赋值
      state.aside = menu
    },
    /**
     * @deprecated 设置全部菜单
     * @param {*} state
     * @param {*} menu
     */
    setRoleMenu (state, menu) {
      state.RoleMenu = menu
    }
  }
}
