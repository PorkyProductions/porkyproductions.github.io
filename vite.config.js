const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                threeDPrints: resolve(__dirname, '3DPrints.html'),
                fourOhFour: resolve(__dirname, '404.html'),
                credits: resolve(__dirname, 'credits.html'),
                develop: resolve(__dirname, 'develop.html'),
                games: resolve(__dirname, 'games.html'),
                models: resolve(__dirname, 'models.html'),
                rushGameDownload: resolve(__dirname, 'rushGameDownload.html'),  
            },
        }
    }
}