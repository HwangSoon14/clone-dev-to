export class QueryMethod {
	query = {};
	method = null;
	constructor(query, method) {
		this.query = query;
		this.method = method;
	}
	pagination() {
		const limit = this.query.limit || 0;
		const page = this.query.page || 0;
		const skip = (page - 1) * limit;
		this.method = this.method.skip(skip).limit(limit);
		return this;
	}
	sort() {
		const type = this.query.sort || '';
		this.method = this.method.sort({ createdAt: type });
		return this;
	}
	populate(path, select) {
		this.method = this.method.populate({
			path,
			select,
		});
		return this;
	}
	filter() {
		const queryObj = {...this.query};
		console.log(queryObj)
		
		const excludeFields = ['page', 'sort', 'limit'];
		excludeFields.forEach(x => delete(queryObj[x]));
		if(queryObj.q) {
			console.log("hehe")
			this.method.find({title: {$regex: queryObj.q}});
		}
        this.method.find();
        return this;
	}
}

