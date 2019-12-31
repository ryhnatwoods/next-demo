const Request = require('../../request');
const Logger = require('../../Logger');

export const config = Request.getApiConfig();

export default async (req, res) => {
    const getRecommendedArticalsAPI = Request("JUEJIN", "getRecommendedArticals", null);
    const result = await getRecommendedArticalsAPI({
        method: "post",
        requestData: req.body
    });
    Logger.info("getRecommendedArticals Respnse => ", Request.formatResponse(result.data))
    res.json(result.data);
}