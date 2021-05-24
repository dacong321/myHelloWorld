let globalData = {

    key: 132,
    func1 :function(){console.log(" 我是globalData里面的Func1")},
    func2 :  ()=> {}
}
globalData.func2 = function() {
    console.log(" 我是globalData里面的Func2")
}
export default globalData;




// let a = {[propname:any]:any},




