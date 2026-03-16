import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model users
 *
 */
export type users = Prisma.usersModel;
/**
 * Model services
 *
 */
export type services = Prisma.servicesModel;
/**
 * Model projects
 *
 */
export type projects = Prisma.projectsModel;
/**
 * Model proposals
 *
 */
export type proposals = Prisma.proposalsModel;
/**
 * Model contracts
 *
 */
export type contracts = Prisma.contractsModel;
/**
 * Model milestones
 *
 */
export type milestones = Prisma.milestonesModel;
/**
 * Model reviews
 *
 */
export type reviews = Prisma.reviewsModel;
//# sourceMappingURL=client.d.ts.map