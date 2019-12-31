const Request = require('../../request');
const Logger = require('../../Logger');
const cors = require('micro-cors')()
export const config = Request.getApiConfig();

export default cors(async (req, res) => {
    // const {
    //   query: { pid },
    // } = req

    const getHighscoreGithubAPI = Request("JUEJIN", "getHighscoreGithub", null);
    const result = await getHighscoreGithubAPI({
        method: "post",
        requestData: req.body
    });
    Logger.info("getHighscoreGithub Respnse => ", Request.formatResponse(result.data))
    res.json(result.data);
})