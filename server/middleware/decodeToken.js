import jwt from 'jsonwebtoken';

export default function DecodeToken (req, res, next) {
    const {userId} = jwt.decode(req.header("Authorization"), process.env.GENERATE_AC_TOKEN)
    req.userId = userId
    next()
};
