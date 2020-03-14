const PROXY_CONFIG = [
    {
        context: [
            "/beers"
        ],
        target: "https://api.punkapi.com/v2",
        secure: false
    }
]

module.exports = PROXY_CONFIG;