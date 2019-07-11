export default{
    path:"/shoppingcart",
    component:()=>import("views/shoppingcart"),
    name:"shoppingcart",
    beforeRouteLeave: (to, from, next) => {
        if(to.path=="/order" && to.meta.AuthToken){
            next();
        }else {
            next("/login");
        }
    }    
}