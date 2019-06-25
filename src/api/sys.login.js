import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: 'sys/login',
    method: 'post',
    data
  })
}
