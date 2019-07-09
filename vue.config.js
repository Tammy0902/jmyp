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
            "/yiqituan":{
                target:"http://s.h5.jumei.com",
                changeOrigin:true,
              
            },
            // "/api":{
            //     target:"https://s.h5.jumei.com",
            //     changOrigin:true,
            //     pathRewrite:{
            //         "^/api":""
            //     }
            // },
            // http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20
          
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