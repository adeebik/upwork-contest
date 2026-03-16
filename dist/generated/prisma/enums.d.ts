export declare const role: {
    readonly client: "client";
    readonly freelancer: "freelancer";
};
export type role = (typeof role)[keyof typeof role];
export declare const pricing_type: {
    readonly fixed: "fixed";
    readonly hourly: "hourly";
};
export type pricing_type = (typeof pricing_type)[keyof typeof pricing_type];
export declare const status: {
    readonly open: "open";
    readonly in_progress: "in_progress";
    readonly completed: "completed";
    readonly cancelled: "cancelled";
};
export type status = (typeof status)[keyof typeof status];
export declare const proposal_status: {
    readonly pending: "pending";
    readonly accepted: "accepted";
    readonly rejected: "rejected";
};
export type proposal_status = (typeof proposal_status)[keyof typeof proposal_status];
export declare const contract_status: {
    readonly active: "active";
    readonly completed: "completed";
    readonly cancelled: "cancelled";
};
export type contract_status = (typeof contract_status)[keyof typeof contract_status];
export declare const milestone_status: {
    readonly pending: "pending";
    readonly submitted: "submitted";
    readonly approved: "approved";
    readonly rejected: "rejected";
};
export type milestone_status = (typeof milestone_status)[keyof typeof milestone_status];
//# sourceMappingURL=enums.d.ts.map