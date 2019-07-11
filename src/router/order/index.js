export default{
    path:"/order",
    component:()=>import("views/order"),
    name:"order",
    meta:{
        AuthToken: window.sessionStorage.getItem("item")
    }
    
    
}