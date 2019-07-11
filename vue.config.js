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
            // http://h5.jumei.com/luxury/ajaxList?page=1&card_id=1837
              // http://s.h5.jumei.com/yiqituan/ajaxDetail?item_id=ht190711p3359280t4&type=global_deal&tid=
          
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
             "/ajax_new":{
                target:"http://www.jumeiglobal.com",
                changOrigin:true,
            },
            
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