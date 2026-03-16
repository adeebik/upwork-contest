import jwt from "jsonwebtoken";
export function auth(req, res, next) {
    const headers = req.headers.authorization;
    if (!headers || !headers.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            data: null,
            error: "UNAUTHORIZED",
        });
    }
    const token = headers.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            data: null,
            error: "UNAUTHORIZED",
        });
    }
    try {
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({
                success: false,
                data: null,
                error: "UNAUTHORIZED",
            });
        }
        req.id = verifyToken.id;
        req.role = verifyToken.role;
        next();
    }
    catch (error) {
        res.status(401).json({
            success: false,
            data: null,
            error: "UNAUTHORIZED",
        });
    }
}
export function roleAuth(role) {
    return (req, res, next) => {
        if (role !== req.role) {
            return res.status(403).json({
                success: false,
                data: null,
                error: "FORBIDDEN",
            });
        }
        next();
    };
}
//# sourceMappingURL=middleware.js.map