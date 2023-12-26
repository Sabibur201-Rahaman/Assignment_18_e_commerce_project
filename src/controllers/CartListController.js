const{SaveCartListService,CartListService,RemoveCartListService,UpdateCartListService}=require('../services/CartListService')

exports.CreateCartList=async(req,res)=>{
    let result=await SaveCartListService
    return res.status(200).json(result)
}

exports.SaveCartList=async(req,res)=>{
    let result=await CartListService
    return res.status(200).json(result)
}
exports.UpdateCartList=async(req,res)=>{
    let result=await UpdateCartListService
    return res.status(200).json(result)
}
exports.RemoveCartList=async(req,res)=>{
    let result=await RemoveCartListService
    return res.status(200).json(result)
}
