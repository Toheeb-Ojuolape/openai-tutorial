const NodeCache = require("node-cache")
import handleErrors from "../utils/handleErrors";
import handleSuccess from "../utils/handleSuccess";

export const myCache = new NodeCache({ stdTTL: 10000});

export const nodeCachedData = async (req:any, res:any, next:any) => {
    try { 
      const cachedData = myCache.get(req.originalUrl)
      if (cachedData) {
        res.status(200).json(
        handleSuccess(cachedData)
      )
      } else {
        next();
      }
    } catch (error:any) {
      res.status(404).json(handleErrors({
        message:"Something went wrong while caching"
      }));
    }
  }

