import URL_API from '@/const/url/url-api';
/**
 * 获取商家信息
 * @param {*} page
 * @param {*} count
 * @param {*} filters
 */
export function getSellerData() {
    const { $http } = window;
    return $http.post(
        URL_API.SELLER_INFO
    );
}