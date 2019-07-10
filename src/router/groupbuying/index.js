/* const router = new Router({
    mode:"hash", //hash路由就是路由的路径上会有一个#
    //类似于webpack中的rules  路由的配置规则  一个对象就是一个路由的配置
    routes:[
        {
            path:"/groupbuying",
            component:()=>import("views/groupbuying"),
            name:"groupbuying"
        },
        {
            path:"/detail/:id",
            component:()=>import("common/detail"), 
            name:"detail",
            props:true,//路由解耦  
            // children:[
            //     {
            //         path:"one",
            //         component:One
            //     }
            // ],
            // name:"home",
            meta:{              
                flag:true,
                AuthToken: true
            }
        },
      ]
})
export default router;*/

export default{
    path:"/groupbuying",
    component:()=>import("views/groupbuying"),
    name:"groupbuying",
    meta:{
        flag:true
    }
}
