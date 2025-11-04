import AISearchScreen from "../screens/ai/AISearchScreen";
import BusinessCardShareScreen from "../screens/card/BusinessCardShareScreen";
import CreateProductScreen from "../screens/product/CreateProductScreen";
import HomeFeedScreen from "../screens/home/HomeFeedScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import MyProductsScreen from "../screens/product/MyProductsScreen";
import NotFoundScreen from "../screens/common/NotFoundScreen";
import ProductDetailsScreen from "../screens/product/ProductDetailsScreen";
import { ROUTES } from "../constants/routes";
import RegisterScreen from "../screens/auth/RegisterScreen";

export const screensMap = {
  // Auth Stack
  [ROUTES.Login]: LoginScreen,
  [ROUTES.Register]: RegisterScreen,

  // Home Stack
  [ROUTES.HomeFeed]: HomeFeedScreen,
  [ROUTES.ProductDetails]: ProductDetailsScreen,

  // Product Management
  [ROUTES.CreateProduct]: CreateProductScreen,
  [ROUTES.MyProducts]: MyProductsScreen,

  // Utility
  [ROUTES.AISearch]: AISearchScreen,
  [ROUTES.BusinessCardShare]: BusinessCardShareScreen,

  // Common
  NotFound: NotFoundScreen,
};
