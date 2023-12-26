const FeaturesModel = require("../models/FeaturesModel")

const saveFeature=async(req,res)=>{
try{
    let feature=await FeaturesModel.create(req,res)
    return { status: "success", message: "Profile Save Success" }
}catch(e){
        return {status:"fail", message:" there is Something Went Wrong"}

}
}

exports.module={
    saveFeature
}