const express=require('express');
const ProductController=require('../controllers/ProductController')
const UserController=require('../controllers/UserController')
const AuthVerification=require('../middlewares/AuthVerification')
const WishListController=require("../controllers/WishListController")
const CartListController=require("../controllers/CartListController")


const router=express.Router();



// Product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySmilier/:CategoryID',ProductController.ProductListBySmilier)
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)



//user

router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin)
router.get('/UserLogout',AuthVerification,UserController.UserLogout)
router.post('/CreateProfile',UserController.CreateProfile)
router.patch('/UpdateProfile/:id',UserController.UpdateProfile)
router.get('/ReadProfile/:id',UserController.ReadProfile)

//wish
router.post('/SaveWishList',WishListController.SaveWishList)
router.post('/RemoveWishList',WishListController.RemoveWishList)
router.get('/WishList',WishListController.WishList)

//Cart
router.post('/CreateCartList',CartListController.CreateCartList)
router.get('/SaveCartList',CartListController.SaveCartList)
router.post('/RemoveCartList',CartListController.RemoveCartList)
router.post('/UpdateCartList/cartId',CartListController.UpdateCartList)


module.exports=router;