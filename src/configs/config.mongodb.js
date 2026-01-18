'use strict'

// const config={
//     app: {
//         port:3000
//     },
//     db: {
//         host: 'localhost',
//         port: 27017,
//         name: 'ERP',
//         username: 'erp_user',
//         passworld: 'erp123'
//     }
// }
const dev={
    app: {
        port:process.env.DEV_APP_PORT || 3000
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost' ,
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'erp_dev',
        username: process.env.DEV_APP_USERNAME || 'erp_user',
        password: process.env.DEV_APP_PASSWORD || 'erp123'
    }
}
const product={
    app: {
        port:process.env.PRO_APP_PORT || 3000
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'erp_product',
        username: process.env.PRO_DB_USERNAME || 'erp_user',
        password: process.env.PRO_DB_PASSWORD ||'erp123'
    }
}
const tester={
    app: {
        port: process.env.TEST_APP_PORT || 3000
    },
    db: {
        host: process.env.TEST_DB_HOST || 'localhost',
        port: process.env.TEST_DB_PORT || 27017,
        name: process.env.TEST_DB_NAME || 'erp_tester',
        username: process.env.TEST_DB_USERNAME || 'erp_user',
        password: process.env.TEST_DB_PASSWORD || 'erp123'
    }
}
const config = {dev,product,tester}
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]
