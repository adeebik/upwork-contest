import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model proposals
 *
 */
export type proposalsModel = runtime.Types.Result.DefaultSelection<Prisma.$proposalsPayload>;
export type AggregateProposals = {
    _count: ProposalsCountAggregateOutputType | null;
    _avg: ProposalsAvgAggregateOutputType | null;
    _sum: ProposalsSumAggregateOutputType | null;
    _min: ProposalsMinAggregateOutputType | null;
    _max: ProposalsMaxAggregateOutputType | null;
};
export type ProposalsAvgAggregateOutputType = {
    proposed_price: runtime.Decimal | null;
    estimated_duration: number | null;
};
export type ProposalsSumAggregateOutputType = {
    proposed_price: runtime.Decimal | null;
    estimated_duration: number | null;
};
export type ProposalsMinAggregateOutputType = {
    id: string | null;
    project_id: string | null;
    freelancer_id: string | null;
    cover_letter: string | null;
    proposed_price: runtime.Decimal | null;
    estimated_duration: number | null;
    status: $Enums.proposal_status | null;
    submitted_at: Date | null;
};
export type ProposalsMaxAggregateOutputType = {
    id: string | null;
    project_id: string | null;
    freelancer_id: string | null;
    cover_letter: string | null;
    proposed_price: runtime.Decimal | null;
    estimated_duration: number | null;
    status: $Enums.proposal_status | null;
    submitted_at: Date | null;
};
export type ProposalsCountAggregateOutputType = {
    id: number;
    project_id: number;
    freelancer_id: number;
    cover_letter: number;
    proposed_price: number;
    estimated_duration: number;
    status: number;
    submitted_at: number;
    _all: number;
};
export type ProposalsAvgAggregateInputType = {
    proposed_price?: true;
    estimated_duration?: true;
};
export type ProposalsSumAggregateInputType = {
    proposed_price?: true;
    estimated_duration?: true;
};
export type ProposalsMinAggregateInputType = {
    id?: true;
    project_id?: true;
    freelancer_id?: true;
    cover_letter?: true;
    proposed_price?: true;
    estimated_duration?: true;
    status?: true;
    submitted_at?: true;
};
export type ProposalsMaxAggregateInputType = {
    id?: true;
    project_id?: true;
    freelancer_id?: true;
    cover_letter?: true;
    proposed_price?: true;
    estimated_duration?: true;
    status?: true;
    submitted_at?: true;
};
export type ProposalsCountAggregateInputType = {
    id?: true;
    project_id?: true;
    freelancer_id?: true;
    cover_letter?: true;
    proposed_price?: true;
    estimated_duration?: true;
    status?: true;
    submitted_at?: true;
    _all?: true;
};
export type ProposalsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which proposals to aggregate.
     */
    where?: Prisma.proposalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: Prisma.proposalsOrderByWithRelationInput | Prisma.proposalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.proposalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned proposals
    **/
    _count?: true | ProposalsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProposalsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProposalsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProposalsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProposalsMaxAggregateInputType;
};
export type GetProposalsAggregateType<T extends ProposalsAggregateArgs> = {
    [P in keyof T & keyof AggregateProposals]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProposals[P]> : Prisma.GetScalarType<T[P], AggregateProposals[P]>;
};
export type proposalsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.proposalsWhereInput;
    orderBy?: Prisma.proposalsOrderByWithAggregationInput | Prisma.proposalsOrderByWithAggregationInput[];
    by: Prisma.ProposalsScalarFieldEnum[] | Prisma.ProposalsScalarFieldEnum;
    having?: Prisma.proposalsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProposalsCountAggregateInputType | true;
    _avg?: ProposalsAvgAggregateInputType;
    _sum?: ProposalsSumAggregateInputType;
    _min?: ProposalsMinAggregateInputType;
    _max?: ProposalsMaxAggregateInputType;
};
export type ProposalsGroupByOutputType = {
    id: string;
    project_id: string;
    freelancer_id: string;
    cover_letter: string;
    proposed_price: runtime.Decimal;
    estimated_duration: number;
    status: $Enums.proposal_status;
    submitted_at: Date;
    _count: ProposalsCountAggregateOutputType | null;
    _avg: ProposalsAvgAggregateOutputType | null;
    _sum: ProposalsSumAggregateOutputType | null;
    _min: ProposalsMinAggregateOutputType | null;
    _max: ProposalsMaxAggregateOutputType | null;
};
type GetProposalsGroupByPayload<T extends proposalsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProposalsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProposalsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProposalsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProposalsGroupByOutputType[P]>;
}>>;
export type proposalsWhereInput = {
    AND?: Prisma.proposalsWhereInput | Prisma.proposalsWhereInput[];
    OR?: Prisma.proposalsWhereInput[];
    NOT?: Prisma.proposalsWhereInput | Prisma.proposalsWhereInput[];
    id?: Prisma.StringFilter<"proposals"> | string;
    project_id?: Prisma.StringFilter<"proposals"> | string;
    freelancer_id?: Prisma.StringFilter<"proposals"> | string;
    cover_letter?: Prisma.StringFilter<"proposals"> | string;
    proposed_price?: Prisma.DecimalFilter<"proposals"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFilter<"proposals"> | number;
    status?: Prisma.Enumproposal_statusFilter<"proposals"> | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFilter<"proposals"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectsScalarRelationFilter, Prisma.projectsWhereInput>;
    freelancer?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type proposalsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    cover_letter?: Prisma.SortOrder;
    proposed_price?: Prisma.SortOrder;
    estimated_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    project?: Prisma.projectsOrderByWithRelationInput;
    freelancer?: Prisma.usersOrderByWithRelationInput;
};
export type proposalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    freelancer_project?: Prisma.proposalsFreelancer_projectCompoundUniqueInput;
    AND?: Prisma.proposalsWhereInput | Prisma.proposalsWhereInput[];
    OR?: Prisma.proposalsWhereInput[];
    NOT?: Prisma.proposalsWhereInput | Prisma.proposalsWhereInput[];
    project_id?: Prisma.StringFilter<"proposals"> | string;
    freelancer_id?: Prisma.StringFilter<"proposals"> | string;
    cover_letter?: Prisma.StringFilter<"proposals"> | string;
    proposed_price?: Prisma.DecimalFilter<"proposals"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFilter<"proposals"> | number;
    status?: Prisma.Enumproposal_statusFilter<"proposals"> | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFilter<"proposals"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectsScalarRelationFilter, Prisma.projectsWhereInput>;
    freelancer?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "freelancer_project">;
export type proposalsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    cover_letter?: Prisma.SortOrder;
    proposed_price?: Prisma.SortOrder;
    estimated_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    _count?: Prisma.proposalsCountOrderByAggregateInput;
    _avg?: Prisma.proposalsAvgOrderByAggregateInput;
    _max?: Prisma.proposalsMaxOrderByAggregateInput;
    _min?: Prisma.proposalsMinOrderByAggregateInput;
    _sum?: Prisma.proposalsSumOrderByAggregateInput;
};
export type proposalsScalarWhereWithAggregatesInput = {
    AND?: Prisma.proposalsScalarWhereWithAggregatesInput | Prisma.proposalsScalarWhereWithAggregatesInput[];
    OR?: Prisma.proposalsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.proposalsScalarWhereWithAggregatesInput | Prisma.proposalsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"proposals"> | string;
    project_id?: Prisma.StringWithAggregatesFilter<"proposals"> | string;
    freelancer_id?: Prisma.StringWithAggregatesFilter<"proposals"> | string;
    cover_letter?: Prisma.StringWithAggregatesFilter<"proposals"> | string;
    proposed_price?: Prisma.DecimalWithAggregatesFilter<"proposals"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntWithAggregatesFilter<"proposals"> | number;
    status?: Prisma.Enumproposal_statusWithAggregatesFilter<"proposals"> | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeWithAggregatesFilter<"proposals"> | Date | string;
};
export type proposalsCreateInput = {
    id?: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
    project: Prisma.projectsCreateNestedOneWithoutProposalsInput;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_proposalsInput;
};
export type proposalsUncheckedCreateInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
};
export type proposalsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.projectsUpdateOneRequiredWithoutProposalsNestedInput;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_proposalsNestedInput;
};
export type proposalsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type proposalsCreateManyInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
};
export type proposalsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type proposalsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProposalsListRelationFilter = {
    every?: Prisma.proposalsWhereInput;
    some?: Prisma.proposalsWhereInput;
    none?: Prisma.proposalsWhereInput;
};
export type proposalsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type proposalsFreelancer_projectCompoundUniqueInput = {
    project_id: string;
    freelancer_id: string;
};
export type proposalsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    cover_letter?: Prisma.SortOrder;
    proposed_price?: Prisma.SortOrder;
    estimated_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type proposalsAvgOrderByAggregateInput = {
    proposed_price?: Prisma.SortOrder;
    estimated_duration?: Prisma.SortOrder;
};
export type proposalsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    cover_letter?: Prisma.SortOrder;
    proposed_price?: Prisma.SortOrder;
    estimated_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type proposalsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    cover_letter?: Prisma.SortOrder;
    proposed_price?: Prisma.SortOrder;
    estimated_duration?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
};
export type proposalsSumOrderByAggregateInput = {
    proposed_price?: Prisma.SortOrder;
    estimated_duration?: Prisma.SortOrder;
};
export type proposalsCreateNestedManyWithoutFreelancerInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutFreelancerInput, Prisma.proposalsUncheckedCreateWithoutFreelancerInput> | Prisma.proposalsCreateWithoutFreelancerInput[] | Prisma.proposalsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutFreelancerInput | Prisma.proposalsCreateOrConnectWithoutFreelancerInput[];
    createMany?: Prisma.proposalsCreateManyFreelancerInputEnvelope;
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
};
export type proposalsUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutFreelancerInput, Prisma.proposalsUncheckedCreateWithoutFreelancerInput> | Prisma.proposalsCreateWithoutFreelancerInput[] | Prisma.proposalsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutFreelancerInput | Prisma.proposalsCreateOrConnectWithoutFreelancerInput[];
    createMany?: Prisma.proposalsCreateManyFreelancerInputEnvelope;
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
};
export type proposalsUpdateManyWithoutFreelancerNestedInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutFreelancerInput, Prisma.proposalsUncheckedCreateWithoutFreelancerInput> | Prisma.proposalsCreateWithoutFreelancerInput[] | Prisma.proposalsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutFreelancerInput | Prisma.proposalsCreateOrConnectWithoutFreelancerInput[];
    upsert?: Prisma.proposalsUpsertWithWhereUniqueWithoutFreelancerInput | Prisma.proposalsUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: Prisma.proposalsCreateManyFreelancerInputEnvelope;
    set?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    disconnect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    delete?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    update?: Prisma.proposalsUpdateWithWhereUniqueWithoutFreelancerInput | Prisma.proposalsUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: Prisma.proposalsUpdateManyWithWhereWithoutFreelancerInput | Prisma.proposalsUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: Prisma.proposalsScalarWhereInput | Prisma.proposalsScalarWhereInput[];
};
export type proposalsUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutFreelancerInput, Prisma.proposalsUncheckedCreateWithoutFreelancerInput> | Prisma.proposalsCreateWithoutFreelancerInput[] | Prisma.proposalsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutFreelancerInput | Prisma.proposalsCreateOrConnectWithoutFreelancerInput[];
    upsert?: Prisma.proposalsUpsertWithWhereUniqueWithoutFreelancerInput | Prisma.proposalsUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: Prisma.proposalsCreateManyFreelancerInputEnvelope;
    set?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    disconnect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    delete?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    update?: Prisma.proposalsUpdateWithWhereUniqueWithoutFreelancerInput | Prisma.proposalsUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: Prisma.proposalsUpdateManyWithWhereWithoutFreelancerInput | Prisma.proposalsUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: Prisma.proposalsScalarWhereInput | Prisma.proposalsScalarWhereInput[];
};
export type proposalsCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutProjectInput, Prisma.proposalsUncheckedCreateWithoutProjectInput> | Prisma.proposalsCreateWithoutProjectInput[] | Prisma.proposalsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutProjectInput | Prisma.proposalsCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.proposalsCreateManyProjectInputEnvelope;
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
};
export type proposalsUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutProjectInput, Prisma.proposalsUncheckedCreateWithoutProjectInput> | Prisma.proposalsCreateWithoutProjectInput[] | Prisma.proposalsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutProjectInput | Prisma.proposalsCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.proposalsCreateManyProjectInputEnvelope;
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
};
export type proposalsUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutProjectInput, Prisma.proposalsUncheckedCreateWithoutProjectInput> | Prisma.proposalsCreateWithoutProjectInput[] | Prisma.proposalsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutProjectInput | Prisma.proposalsCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.proposalsUpsertWithWhereUniqueWithoutProjectInput | Prisma.proposalsUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.proposalsCreateManyProjectInputEnvelope;
    set?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    disconnect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    delete?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    update?: Prisma.proposalsUpdateWithWhereUniqueWithoutProjectInput | Prisma.proposalsUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.proposalsUpdateManyWithWhereWithoutProjectInput | Prisma.proposalsUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.proposalsScalarWhereInput | Prisma.proposalsScalarWhereInput[];
};
export type proposalsUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.proposalsCreateWithoutProjectInput, Prisma.proposalsUncheckedCreateWithoutProjectInput> | Prisma.proposalsCreateWithoutProjectInput[] | Prisma.proposalsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.proposalsCreateOrConnectWithoutProjectInput | Prisma.proposalsCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.proposalsUpsertWithWhereUniqueWithoutProjectInput | Prisma.proposalsUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.proposalsCreateManyProjectInputEnvelope;
    set?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    disconnect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    delete?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    connect?: Prisma.proposalsWhereUniqueInput | Prisma.proposalsWhereUniqueInput[];
    update?: Prisma.proposalsUpdateWithWhereUniqueWithoutProjectInput | Prisma.proposalsUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.proposalsUpdateManyWithWhereWithoutProjectInput | Prisma.proposalsUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.proposalsScalarWhereInput | Prisma.proposalsScalarWhereInput[];
};
export type Enumproposal_statusFieldUpdateOperationsInput = {
    set?: $Enums.proposal_status;
};
export type proposalsCreateWithoutFreelancerInput = {
    id?: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
    project: Prisma.projectsCreateNestedOneWithoutProposalsInput;
};
export type proposalsUncheckedCreateWithoutFreelancerInput = {
    id?: string;
    project_id: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
};
export type proposalsCreateOrConnectWithoutFreelancerInput = {
    where: Prisma.proposalsWhereUniqueInput;
    create: Prisma.XOR<Prisma.proposalsCreateWithoutFreelancerInput, Prisma.proposalsUncheckedCreateWithoutFreelancerInput>;
};
export type proposalsCreateManyFreelancerInputEnvelope = {
    data: Prisma.proposalsCreateManyFreelancerInput | Prisma.proposalsCreateManyFreelancerInput[];
    skipDuplicates?: boolean;
};
export type proposalsUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: Prisma.proposalsWhereUniqueInput;
    update: Prisma.XOR<Prisma.proposalsUpdateWithoutFreelancerInput, Prisma.proposalsUncheckedUpdateWithoutFreelancerInput>;
    create: Prisma.XOR<Prisma.proposalsCreateWithoutFreelancerInput, Prisma.proposalsUncheckedCreateWithoutFreelancerInput>;
};
export type proposalsUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: Prisma.proposalsWhereUniqueInput;
    data: Prisma.XOR<Prisma.proposalsUpdateWithoutFreelancerInput, Prisma.proposalsUncheckedUpdateWithoutFreelancerInput>;
};
export type proposalsUpdateManyWithWhereWithoutFreelancerInput = {
    where: Prisma.proposalsScalarWhereInput;
    data: Prisma.XOR<Prisma.proposalsUpdateManyMutationInput, Prisma.proposalsUncheckedUpdateManyWithoutFreelancerInput>;
};
export type proposalsScalarWhereInput = {
    AND?: Prisma.proposalsScalarWhereInput | Prisma.proposalsScalarWhereInput[];
    OR?: Prisma.proposalsScalarWhereInput[];
    NOT?: Prisma.proposalsScalarWhereInput | Prisma.proposalsScalarWhereInput[];
    id?: Prisma.StringFilter<"proposals"> | string;
    project_id?: Prisma.StringFilter<"proposals"> | string;
    freelancer_id?: Prisma.StringFilter<"proposals"> | string;
    cover_letter?: Prisma.StringFilter<"proposals"> | string;
    proposed_price?: Prisma.DecimalFilter<"proposals"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFilter<"proposals"> | number;
    status?: Prisma.Enumproposal_statusFilter<"proposals"> | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFilter<"proposals"> | Date | string;
};
export type proposalsCreateWithoutProjectInput = {
    id?: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_proposalsInput;
};
export type proposalsUncheckedCreateWithoutProjectInput = {
    id?: string;
    freelancer_id: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
};
export type proposalsCreateOrConnectWithoutProjectInput = {
    where: Prisma.proposalsWhereUniqueInput;
    create: Prisma.XOR<Prisma.proposalsCreateWithoutProjectInput, Prisma.proposalsUncheckedCreateWithoutProjectInput>;
};
export type proposalsCreateManyProjectInputEnvelope = {
    data: Prisma.proposalsCreateManyProjectInput | Prisma.proposalsCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type proposalsUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.proposalsWhereUniqueInput;
    update: Prisma.XOR<Prisma.proposalsUpdateWithoutProjectInput, Prisma.proposalsUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.proposalsCreateWithoutProjectInput, Prisma.proposalsUncheckedCreateWithoutProjectInput>;
};
export type proposalsUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.proposalsWhereUniqueInput;
    data: Prisma.XOR<Prisma.proposalsUpdateWithoutProjectInput, Prisma.proposalsUncheckedUpdateWithoutProjectInput>;
};
export type proposalsUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.proposalsScalarWhereInput;
    data: Prisma.XOR<Prisma.proposalsUpdateManyMutationInput, Prisma.proposalsUncheckedUpdateManyWithoutProjectInput>;
};
export type proposalsCreateManyFreelancerInput = {
    id?: string;
    project_id: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
};
export type proposalsUpdateWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.projectsUpdateOneRequiredWithoutProposalsNestedInput;
};
export type proposalsUncheckedUpdateWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type proposalsUncheckedUpdateManyWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type proposalsCreateManyProjectInput = {
    id?: string;
    freelancer_id: string;
    cover_letter: string;
    proposed_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration: number;
    status?: $Enums.proposal_status;
    submitted_at?: Date | string;
};
export type proposalsUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_proposalsNestedInput;
};
export type proposalsUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type proposalsUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cover_letter?: Prisma.StringFieldUpdateOperationsInput | string;
    proposed_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estimated_duration?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumproposal_statusFieldUpdateOperationsInput | $Enums.proposal_status;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type proposalsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    cover_letter?: boolean;
    proposed_price?: boolean;
    estimated_duration?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposals"]>;
export type proposalsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    cover_letter?: boolean;
    proposed_price?: boolean;
    estimated_duration?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposals"]>;
export type proposalsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    cover_letter?: boolean;
    proposed_price?: boolean;
    estimated_duration?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proposals"]>;
export type proposalsSelectScalar = {
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    cover_letter?: boolean;
    proposed_price?: boolean;
    estimated_duration?: boolean;
    status?: boolean;
    submitted_at?: boolean;
};
export type proposalsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "project_id" | "freelancer_id" | "cover_letter" | "proposed_price" | "estimated_duration" | "status" | "submitted_at", ExtArgs["result"]["proposals"]>;
export type proposalsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type proposalsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type proposalsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $proposalsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "proposals";
    objects: {
        project: Prisma.$projectsPayload<ExtArgs>;
        freelancer: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        project_id: string;
        freelancer_id: string;
        cover_letter: string;
        proposed_price: runtime.Decimal;
        estimated_duration: number;
        status: $Enums.proposal_status;
        submitted_at: Date;
    }, ExtArgs["result"]["proposals"]>;
    composites: {};
};
export type proposalsGetPayload<S extends boolean | null | undefined | proposalsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$proposalsPayload, S>;
export type proposalsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<proposalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProposalsCountAggregateInputType | true;
};
export interface proposalsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['proposals'];
        meta: {
            name: 'proposals';
        };
    };
    /**
     * Find zero or one Proposals that matches the filter.
     * @param {proposalsFindUniqueArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proposalsFindUniqueArgs>(args: Prisma.SelectSubset<T, proposalsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Proposals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proposalsFindUniqueOrThrowArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proposalsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, proposalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsFindFirstArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proposalsFindFirstArgs>(args?: Prisma.SelectSubset<T, proposalsFindFirstArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proposals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsFindFirstOrThrowArgs} args - Arguments to find a Proposals
     * @example
     * // Get one Proposals
     * const proposals = await prisma.proposals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proposalsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, proposalsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposals.findMany()
     *
     * // Get first 10 Proposals
     * const proposals = await prisma.proposals.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proposalsWithIdOnly = await prisma.proposals.findMany({ select: { id: true } })
     *
     */
    findMany<T extends proposalsFindManyArgs>(args?: Prisma.SelectSubset<T, proposalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Proposals.
     * @param {proposalsCreateArgs} args - Arguments to create a Proposals.
     * @example
     * // Create one Proposals
     * const Proposals = await prisma.proposals.create({
     *   data: {
     *     // ... data to create a Proposals
     *   }
     * })
     *
     */
    create<T extends proposalsCreateArgs>(args: Prisma.SelectSubset<T, proposalsCreateArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Proposals.
     * @param {proposalsCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposals = await prisma.proposals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends proposalsCreateManyArgs>(args?: Prisma.SelectSubset<T, proposalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {proposalsCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposals = await prisma.proposals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Proposals and only return the `id`
     * const proposalsWithIdOnly = await prisma.proposals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends proposalsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, proposalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Proposals.
     * @param {proposalsDeleteArgs} args - Arguments to delete one Proposals.
     * @example
     * // Delete one Proposals
     * const Proposals = await prisma.proposals.delete({
     *   where: {
     *     // ... filter to delete one Proposals
     *   }
     * })
     *
     */
    delete<T extends proposalsDeleteArgs>(args: Prisma.SelectSubset<T, proposalsDeleteArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Proposals.
     * @param {proposalsUpdateArgs} args - Arguments to update one Proposals.
     * @example
     * // Update one Proposals
     * const proposals = await prisma.proposals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends proposalsUpdateArgs>(args: Prisma.SelectSubset<T, proposalsUpdateArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Proposals.
     * @param {proposalsDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends proposalsDeleteManyArgs>(args?: Prisma.SelectSubset<T, proposalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposals = await prisma.proposals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends proposalsUpdateManyArgs>(args: Prisma.SelectSubset<T, proposalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {proposalsUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposals = await prisma.proposals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Proposals and only return the `id`
     * const proposalsWithIdOnly = await prisma.proposals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends proposalsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, proposalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Proposals.
     * @param {proposalsUpsertArgs} args - Arguments to update or create a Proposals.
     * @example
     * // Update or create a Proposals
     * const proposals = await prisma.proposals.upsert({
     *   create: {
     *     // ... data to create a Proposals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposals we want to update
     *   }
     * })
     */
    upsert<T extends proposalsUpsertArgs>(args: Prisma.SelectSubset<T, proposalsUpsertArgs<ExtArgs>>): Prisma.Prisma__proposalsClient<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposals.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends proposalsCountArgs>(args?: Prisma.Subset<T, proposalsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProposalsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalsAggregateArgs>(args: Prisma.Subset<T, ProposalsAggregateArgs>): Prisma.PrismaPromise<GetProposalsAggregateType<T>>;
    /**
     * Group by Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends proposalsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: proposalsGroupByArgs['orderBy'];
    } : {
        orderBy?: proposalsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, proposalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the proposals model
     */
    readonly fields: proposalsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for proposals.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__proposalsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.projectsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.projectsDefaultArgs<ExtArgs>>): Prisma.Prisma__projectsClient<runtime.Types.Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    freelancer<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the proposals model
 */
export interface proposalsFieldRefs {
    readonly id: Prisma.FieldRef<"proposals", 'String'>;
    readonly project_id: Prisma.FieldRef<"proposals", 'String'>;
    readonly freelancer_id: Prisma.FieldRef<"proposals", 'String'>;
    readonly cover_letter: Prisma.FieldRef<"proposals", 'String'>;
    readonly proposed_price: Prisma.FieldRef<"proposals", 'Decimal'>;
    readonly estimated_duration: Prisma.FieldRef<"proposals", 'Int'>;
    readonly status: Prisma.FieldRef<"proposals", 'proposal_status'>;
    readonly submitted_at: Prisma.FieldRef<"proposals", 'DateTime'>;
}
/**
 * proposals findUnique
 */
export type proposalsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * Filter, which proposals to fetch.
     */
    where: Prisma.proposalsWhereUniqueInput;
};
/**
 * proposals findUniqueOrThrow
 */
export type proposalsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * Filter, which proposals to fetch.
     */
    where: Prisma.proposalsWhereUniqueInput;
};
/**
 * proposals findFirst
 */
export type proposalsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * Filter, which proposals to fetch.
     */
    where?: Prisma.proposalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: Prisma.proposalsOrderByWithRelationInput | Prisma.proposalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proposals.
     */
    cursor?: Prisma.proposalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proposals.
     */
    distinct?: Prisma.ProposalsScalarFieldEnum | Prisma.ProposalsScalarFieldEnum[];
};
/**
 * proposals findFirstOrThrow
 */
export type proposalsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * Filter, which proposals to fetch.
     */
    where?: Prisma.proposalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: Prisma.proposalsOrderByWithRelationInput | Prisma.proposalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proposals.
     */
    cursor?: Prisma.proposalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proposals.
     */
    distinct?: Prisma.ProposalsScalarFieldEnum | Prisma.ProposalsScalarFieldEnum[];
};
/**
 * proposals findMany
 */
export type proposalsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * Filter, which proposals to fetch.
     */
    where?: Prisma.proposalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proposals to fetch.
     */
    orderBy?: Prisma.proposalsOrderByWithRelationInput | Prisma.proposalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing proposals.
     */
    cursor?: Prisma.proposalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proposals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proposals.
     */
    distinct?: Prisma.ProposalsScalarFieldEnum | Prisma.ProposalsScalarFieldEnum[];
};
/**
 * proposals create
 */
export type proposalsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * The data needed to create a proposals.
     */
    data: Prisma.XOR<Prisma.proposalsCreateInput, Prisma.proposalsUncheckedCreateInput>;
};
/**
 * proposals createMany
 */
export type proposalsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many proposals.
     */
    data: Prisma.proposalsCreateManyInput | Prisma.proposalsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * proposals createManyAndReturn
 */
export type proposalsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * The data used to create many proposals.
     */
    data: Prisma.proposalsCreateManyInput | Prisma.proposalsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * proposals update
 */
export type proposalsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * The data needed to update a proposals.
     */
    data: Prisma.XOR<Prisma.proposalsUpdateInput, Prisma.proposalsUncheckedUpdateInput>;
    /**
     * Choose, which proposals to update.
     */
    where: Prisma.proposalsWhereUniqueInput;
};
/**
 * proposals updateMany
 */
export type proposalsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update proposals.
     */
    data: Prisma.XOR<Prisma.proposalsUpdateManyMutationInput, Prisma.proposalsUncheckedUpdateManyInput>;
    /**
     * Filter which proposals to update
     */
    where?: Prisma.proposalsWhereInput;
    /**
     * Limit how many proposals to update.
     */
    limit?: number;
};
/**
 * proposals updateManyAndReturn
 */
export type proposalsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * The data used to update proposals.
     */
    data: Prisma.XOR<Prisma.proposalsUpdateManyMutationInput, Prisma.proposalsUncheckedUpdateManyInput>;
    /**
     * Filter which proposals to update
     */
    where?: Prisma.proposalsWhereInput;
    /**
     * Limit how many proposals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * proposals upsert
 */
export type proposalsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * The filter to search for the proposals to update in case it exists.
     */
    where: Prisma.proposalsWhereUniqueInput;
    /**
     * In case the proposals found by the `where` argument doesn't exist, create a new proposals with this data.
     */
    create: Prisma.XOR<Prisma.proposalsCreateInput, Prisma.proposalsUncheckedCreateInput>;
    /**
     * In case the proposals was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.proposalsUpdateInput, Prisma.proposalsUncheckedUpdateInput>;
};
/**
 * proposals delete
 */
export type proposalsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
    /**
     * Filter which proposals to delete.
     */
    where: Prisma.proposalsWhereUniqueInput;
};
/**
 * proposals deleteMany
 */
export type proposalsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which proposals to delete
     */
    where?: Prisma.proposalsWhereInput;
    /**
     * Limit how many proposals to delete.
     */
    limit?: number;
};
/**
 * proposals without action
 */
export type proposalsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposals
     */
    select?: Prisma.proposalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proposals
     */
    omit?: Prisma.proposalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proposalsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=proposals.d.ts.map