import TagModel from '../models/TagModel.js'
import { QueryMethod } from '../Utils/QueryMethod.js';
const tagCtrl = {
	getAllTag: async (req, res, next) => {
		try {                
            const queryMethod = new QueryMethod(req.query, TagModel.find({}, {})).sort().filter();
                    const data = await queryMethod.method;
                    res.status(200).json(data);
                } catch (error) {
                    next(error);
                }
	},
   
	
};
export default tagCtrl;
