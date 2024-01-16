import $ from "jquery";
import { add, subtract } from "./modules/math";

const item1 = 400;
const item2 = 600;
const coupon = 300;
const price = subtract(add(item1, item2), coupon);
$("body").text(price);
