import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly users: "users";
    readonly services: "services";
    readonly projects: "projects";
    readonly proposals: "proposals";
    readonly contracts: "contracts";
    readonly milestones: "milestones";
    readonly reviews: "reviews";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passowrd: "passowrd";
    readonly role: "role";
    readonly bio: "bio";
    readonly skills: "skills";
    readonly hourly_rate: "hourly_rate";
    readonly profile_image: "profile_image";
    readonly created_at: "created_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const ServicesScalarFieldEnum: {
    readonly id: "id";
    readonly freelancer_id: "freelancer_id";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly pricing_type: "pricing_type";
    readonly price: "price";
    readonly delivery_days: "delivery_days";
    readonly rating: "rating";
    readonly total_reviews: "total_reviews";
    readonly created_at: "created_at";
};
export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum];
export declare const ProjectsScalarFieldEnum: {
    readonly id: "id";
    readonly client_id: "client_id";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly budget_min: "budget_min";
    readonly budget_max: "budget_max";
    readonly deadline: "deadline";
    readonly status: "status";
    readonly required_skills: "required_skills";
    readonly created_at: "created_at";
};
export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum];
export declare const ProposalsScalarFieldEnum: {
    readonly id: "id";
    readonly project_id: "project_id";
    readonly freelancer_id: "freelancer_id";
    readonly cover_letter: "cover_letter";
    readonly proposed_price: "proposed_price";
    readonly estimated_duration: "estimated_duration";
    readonly status: "status";
    readonly submitted_at: "submitted_at";
};
export type ProposalsScalarFieldEnum = (typeof ProposalsScalarFieldEnum)[keyof typeof ProposalsScalarFieldEnum];
export declare const ContractsScalarFieldEnum: {
    readonly id: "id";
    readonly project_id: "project_id";
    readonly freelancer_id: "freelancer_id";
    readonly client_id: "client_id";
    readonly total_amount: "total_amount";
    readonly status: "status";
    readonly started_at: "started_at";
    readonly completed_at: "completed_at";
};
export type ContractsScalarFieldEnum = (typeof ContractsScalarFieldEnum)[keyof typeof ContractsScalarFieldEnum];
export declare const MilestonesScalarFieldEnum: {
    readonly id: "id";
    readonly contract_id: "contract_id";
    readonly title: "title";
    readonly description: "description";
    readonly amount: "amount";
    readonly due_date: "due_date";
    readonly order_index: "order_index";
    readonly status: "status";
    readonly submitted_at: "submitted_at";
    readonly approved_at: "approved_at";
};
export type MilestonesScalarFieldEnum = (typeof MilestonesScalarFieldEnum)[keyof typeof MilestonesScalarFieldEnum];
export declare const ReviewsScalarFieldEnum: {
    readonly id: "id";
    readonly contract_id: "contract_id";
    readonly reviewer_id: "reviewer_id";
    readonly reviewee_id: "reviewee_id";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly created_at: "created_at";
};
export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map