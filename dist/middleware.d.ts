import { Request, Response, NextFunction } from "express";
import { role } from ".";
export declare function auth(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function roleAuth(role: role): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=middleware.d.ts.map