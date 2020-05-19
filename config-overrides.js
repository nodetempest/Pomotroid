const path = require("path")
const { override, addWebpackAlias } = require("customize-cra")

const resolvePath = src => path.resolve(__dirname, src)

module.exports = override(
    addWebpackAlias({
        "@assets": resolvePath("src/assets"),
        "@constants": resolvePath("src/constants"),
        "@layouts": resolvePath("src/layouts"),
        "@pages": resolvePath("src/pages"),
        "@routing": resolvePath("src/routing"),
        "@state": resolvePath("src/state"),
        "@styled": resolvePath("src/styled"),
        "@utils": resolvePath("src/utils"),
    })
)
