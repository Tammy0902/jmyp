export default{
    path:"/mine",
    component:()=>import("views/mine"),
    name:"mine",
    meta:{
        flag:true,
        AuthToken: window.sessionStorage.getItem("item")
    },
    beforeEnter: (to, from, next) => {
        if(to.path=="/mine" && to.meta.AuthToken){
            next("/already");
        }else {
            next();
        }
    }    
}