module.exports = {
    parser: 'sugarss',
    map: false,
    from: '/src/app.sass',
    to: '/dist/css/app.css',
    plugins: [
        require('autoprefixer')({ cascade: true })
    ]
}