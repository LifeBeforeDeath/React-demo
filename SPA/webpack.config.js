const path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/ts/index.ts',
    output:{
        path:path.join(__dirname,'public/dist/js'),
        filename:'[name].bundle.js',
        clean:true
    },
    module:{
        // the loaders are applied on the matched files from bottom to top (sass-loader, css-loader, style-loader)
        // sass-loader converts scss -> css
        // css-loader, style-loader read the generated css, and create a function that can be called on page page load to inject this css onto the page, and set up the function be called when the page loads
        rules:[
            {
                test:/\.s?css$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            }  
        ]
    },
    resolve: {
        extensions: [ '.ts' ]
    }
}