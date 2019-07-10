export default{
    path:"/detail/:id",
    component:()=>import("common/detail"), 
    name:"detail",
    props:true,//路由解耦 
}