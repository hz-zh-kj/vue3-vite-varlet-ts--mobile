/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * 
 * @Author: 酋小怪
 * @Date: 2021-06-24 14:37:07
 * @LastEditors: 酋小怪
 * @LastEditTime: 2021-06-24 15:29:43
 * @Description: file content
 * @FilePath: \postcss.config.js
 */



module.exports = (a) => {
    console.log(a)
    return {
        plugins: {
            autoprefixer: {},
            "postcss-px-to-viewport": {
                unitToConvert: "px",
                viewportWidth: 750,
                unitPrecision: 6,
                propList: ["*"],
                viewportUnit: "vw",
                fontViewportUnit: "vw",
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: true,
                exclude: [/node_modules/],
                landscape: false
            }
        }
    }

}