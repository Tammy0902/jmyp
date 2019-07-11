const Mock = require("mockjs");

const data = Mock.mock({
    "code":200,
    "errMsg":"",
    "abc|5":[
        {
            "id|+1":1,
            "username":"@cname(5,6)",
            "userPic":"@image('100x100', '#50B347', '#FFF', '头像')",
            "tel":/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
            "address":"@county(true)",
            "evaluate":"@cparagraph(2)",
            "pwd":/^[\w_-]{6,16}$/
        }
    ]
})



Mock.mock( /\/goods\/getgoods/, "get", (options)=>{
    console.log(options)
    return data;
})



Mock.mock( /\/goods\/goodsDetails/, "post", (options)=>{
    console.log(options)
    return data;
})