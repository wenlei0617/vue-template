const fs = require('fs');
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: fs.readFileSync('src/style/common.scss', 'utf-8')
            }
        }
    }
}