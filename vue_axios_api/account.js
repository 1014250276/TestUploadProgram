import request from './request' //引入axios的封装方法

export const getAdminList = (params) => {
 return request('get', '/api/v1.0/admin/list', params) //登陆管理员获取自身信息
}

export const register = (params) => {
 return request('post', '/api/v1.0/admin/register', params) //添加管理员
}

export const deleteAdmin = (id, params) => {
 return request('delete', `/api/v1.0/admin/${id}`, params) //更新管理员信息
}

// 作者：fantasy酱
// 链接：https://juejin.cn/post/6844903712016564231
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。