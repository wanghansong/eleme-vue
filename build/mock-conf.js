/**
 * mock配置
 */
exports.before = function (app) {
    app.get('/api/seller', function (req, res) {
    // 服务端收到请求后返回给客户端一个json数据
    res.json({
        // 当我们数据正常时，我们通过传递errno字符为0表示数据正常
        errno: 0,
        // 返回json中的卖家数据
        data: sellerData
    })
    })
    app.get('/api/goods', function (req, res) {
    res.json({
        errno: 0,
        data: goodsData
    })
    })
    app.get('/api/ratings', function (rea, res) {
    res.json({
        errno: 0,
        data: ratingsData
    })
    })
}