const PROXY_CONFIG = [
    {
        context: [
            "/my",
            "/many",
            "/endpoints",
            "/i",
            "/need",
            "/to",
            "/proxy"
        ],
        target: "https://api.punkapi.com/v2",
        secure: false
    }
]

module.exports = PROXY_CONFIG;