/**
 * @description 用户路由文档
 * @author yq
 * @date 2017/5/1 下午2:24
 */
/**
 * @apiDefine user 账户
 */

/**
 * @api {post} /v1/users/register 注册
 * @apiVersion 1.0.0
 * @apiName register
 * @apiGroup user
 *
 * @apiParam {String} username 账号
 * @apiParam {String} password 密码的md5密文
 *
 * @apiExample {bash} 请求样例：
 *    curl -d 'username=test&password=e10adc3949ba59abbe56e057f20f883e'
 *    https://www.dlkj.com/v1/users/register
 *
 * @apiSuccess {Number} code 代码
 * @apiSuccess {String} msg 提示内容
 *
 *
 * @apiSuccessExample 正常响应：
 *    HTTP/1.1 200 OK
 *    {
 *       "code": 0,
 *       "msg": "成功"
 *    }
 *
 * @apiErrorExample 错误响应：
 *    HTTP/1.1 200
 *    {
 *       "code": 1100,
 *       "msg": "用户不存在",
 *    }
 */


/**
 * @api {post} /v1/users/login 登录
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup user
 *
 * @apiParam {String} username 账号
 * @apiParam {String} password 密码的md5密文
 *
 * @apiExample {bash} 请求样例：
 *    curl -d 'username=test&password=e10adc3949ba59abbe56e057f20f883e'
 *    https://www.dlkj.com/v1/users/login
 *
 * @apiSuccess {Number} code 代码
 * @apiSuccess {String} msg 提示内容
 * @apiSuccess {Object} data 返回用户信息
 * @apiSuccess {String} data.id 用户id
 * @apiSuccess {String} data.username 用户名
 * @apiSuccess {String} data.token 用户token
 *
 *
 * @apiSuccessExample 正常响应：
 *    HTTP/1.1 200 OK
 *    {
 *       "code": 0,
 *       "msg": "http 测试接口",
 *       "data": {
 *         "id": "e10adc3949ba59abbe56e057",
 *         "username": "test",
 *       }
 *    }
 *
 * @apiErrorExample 错误响应：
 *    HTTP/1.1 200
 *    {
 *       "code": 1102,
 *       "msg": "用户名或密码不正确",
 *    }
 */
