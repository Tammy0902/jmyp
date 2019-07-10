const path =require("path");


module.exports = {
    devServer:{ 
        open:true,
        proxy:{
            "/test":{
                target:"http://h5.jumei.com",
                changeOrigin:true,
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
                target:"https://m.douyu.com",
                changeOrigin:true,
                pathRewrite:{
                "^/abc":""
            },
            "/yiqituan":{
                target:"http://s.h5.jumei.com",
                changeOrigin:true,
              
            },
            
            "/getlist":{
                target:"m.zhe800.com.cn",
                changeOrigin:true,
                // http://apiv2.pinduoduo.com/api/fiora/subject/goods?subject_id=5576&page=1&size=3
            //     http://m.zhe800.com.cn/getlist?page=1
            },
            "/jm":{
                target:"http://s.h5.jumei.com",
                changOrigin:true,
                ws: false, 
                pathRewrite:{
                    "^/jm":""
                }
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