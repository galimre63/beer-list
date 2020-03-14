const PROXY_CONFIG = [
    {
        context: [
            "/beerpage"
        ],
        target: "https://api.punkapi.com/v2",
        secure: false
    }
]

module.exports = PROXY_CONFIG;