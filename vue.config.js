const path =require("path");


module.exports = {
    devServer:{
        open:true,
        proxy:{
            "/test":{
                target:"http://h5.jumei.com",
                changOrigin:true,
                pathRewrite:{
                    "^/test":""
                }
            },
            "/api":{
                target:"https://s.h5.jumei.com",
                changOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            },
            "/abc":{
                      //https://m.douyu.com/api/cate/recList?cid=&ct=
                target:"https://m.douyu.com",
                changeOrigin:true,
                pathRewrite:{
                "^/abc":""
            }
        }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
            "@":path.resolve(__dirname,"./src"),
            "api":path.resolve(__dirname,"./src/api"),
            "common":path.resolve(__dirname,"./src/common"),
            "components":path.resolve(__dirname,"./src/components"),
            "router":path.resolve(__dirname,"./src/router"),
            "store":path.resolve(__dirname,"./src/store"),
            "utils":path.resolve(__dirname,"./src/utils"),
            "views":path.resolve(__dirname,"./src/views"),
        }
        }
    }
}