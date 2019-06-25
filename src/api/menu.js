import request from '@/plugin/axios'

export function getRoleMenu (data) {
  return request({
    url: '/api-web/menu/me',
    method: 'get',
    data
  })
}

export function getMenuTree (data) {
  return request({
    url: '/api-web/menu/tree',
    method: 'post',
    data
  })
}
