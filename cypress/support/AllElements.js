import { Home } from "./pageObjects/homePage";
import { Shop } from "./pageObjects/ShopPage";
export let AllElements= new Map([
    ...Home,
    ...Shop
]);