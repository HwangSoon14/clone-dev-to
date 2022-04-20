class QueryMethod {
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
        this.method = this.method.skip(skip).limit(limit)
		return this;
	}
    sort(){
        const type = this.query.sort || "";
        this.method = this.method.sort({createdAt: type})
        return this;
    }
}
module.exports = QueryMethod;
 