const { Router } = require("express");
const router = Router();
import { getquotes_get } from "../controller/controller";
import { nodeCachedData } from "../middleware/nodeCache";

router.get("/ai-quotes", nodeCachedData, getquotes_get);


export default router