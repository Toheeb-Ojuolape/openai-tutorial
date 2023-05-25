import handleErrors from "../utils/handleErrors";
import handleSuccess from "../utils/handleSuccess";
import { Configuration, OpenAIApi } from "openai"
import { myCache } from "../middleware/nodeCache";

export const getquotes_get = async (req: any, res: any) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAPI_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:req.query.prompt,
      temperature: 0.9,
      max_tokens: 100,
    })
    myCache.set(req.originalUrl,response.data.choices,86400)
    res.status(200).json(handleSuccess(response.data.choices))
  } catch (error) {
    res.status(400).json(handleErrors(error));
  }
};