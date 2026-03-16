import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model contracts
 *
 */
export type contractsModel = runtime.Types.Result.DefaultSelection<Prisma.$contractsPayload>;
export type AggregateContracts = {
    _count: ContractsCountAggregateOutputType | null;
    _avg: ContractsAvgAggregateOutputType | null;
    _sum: ContractsSumAggregateOutputType | null;
    _min: ContractsMinAggregateOutputType | null;
    _max: ContractsMaxAggregateOutputType | null;
};
export type ContractsAvgAggregateOutputType = {
    total_amount: runtime.Decimal | null;
};
export type ContractsSumAggregateOutputType = {
    total_amount: runtime.Decimal | null;
};
export type ContractsMinAggregateOutputType = {
    id: string | null;
    project_id: string | null;
    freelancer_id: string | null;
    client_id: string | null;
    total_amount: runtime.Decimal | null;
    status: $Enums.contract_status | null;
    started_at: Date | null;
    completed_at: Date | null;
};
export type ContractsMaxAggregateOutputType = {
    id: string | null;
    project_id: string | null;
    freelancer_id: string | null;
    client_id: string | null;
    total_amount: runtime.Decimal | null;
    status: $Enums.contract_status | null;
    started_at: Date | null;
    completed_at: Date | null;
};
export type ContractsCountAggregateOutputType = {
    id: number;
    project_id: number;
    freelancer_id: number;
    client_id: number;
    total_amount: number;
    status: number;
    started_at: number;
    completed_at: number;
    _all: number;
};
export type ContractsAvgAggregateInputType = {
    total_amount?: true;
};
export type ContractsSumAggregateInputType = {
    total_amount?: true;
};
export type ContractsMinAggregateInputType = {
    id?: true;
    project_id?: true;
    freelancer_id?: true;
    client_id?: true;
    total_amount?: true;
    status?: true;
    started_at?: true;
    completed_at?: true;
};
export type ContractsMaxAggregateInputType = {
    id?: true;
    project_id?: true;
    freelancer_id?: true;
    client_id?: true;
    total_amount?: true;
    status?: true;
    started_at?: true;
    completed_at?: true;
};
export type ContractsCountAggregateInputType = {
    id?: true;
    project_id?: true;
    freelancer_id?: true;
    client_id?: true;
    total_amount?: true;
    status?: true;
    started_at?: true;
    completed_at?: true;
    _all?: true;
};
export type ContractsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contracts to aggregate.
     */
    where?: Prisma.contractsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: Prisma.contractsOrderByWithRelationInput | Prisma.contractsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.contractsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contracts
    **/
    _count?: true | ContractsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ContractsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ContractsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContractsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContractsMaxAggregateInputType;
};
export type GetContractsAggregateType<T extends ContractsAggregateArgs> = {
    [P in keyof T & keyof AggregateContracts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContracts[P]> : Prisma.GetScalarType<T[P], AggregateContracts[P]>;
};
export type contractsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractsWhereInput;
    orderBy?: Prisma.contractsOrderByWithAggregationInput | Prisma.contractsOrderByWithAggregationInput[];
    by: Prisma.ContractsScalarFieldEnum[] | Prisma.ContractsScalarFieldEnum;
    having?: Prisma.contractsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractsCountAggregateInputType | true;
    _avg?: ContractsAvgAggregateInputType;
    _sum?: ContractsSumAggregateInputType;
    _min?: ContractsMinAggregateInputType;
    _max?: ContractsMaxAggregateInputType;
};
export type ContractsGroupByOutputType = {
    id: string;
    project_id: string;
    freelancer_id: string;
    client_id: string;
    total_amount: runtime.Decimal;
    status: $Enums.contract_status;
    started_at: Date;
    completed_at: Date | null;
    _count: ContractsCountAggregateOutputType | null;
    _avg: ContractsAvgAggregateOutputType | null;
    _sum: ContractsSumAggregateOutputType | null;
    _min: ContractsMinAggregateOutputType | null;
    _max: ContractsMaxAggregateOutputType | null;
};
type GetContractsGroupByPayload<T extends contractsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContractsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContractsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContractsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContractsGroupByOutputType[P]>;
}>>;
export type contractsWhereInput = {
    AND?: Prisma.contractsWhereInput | Prisma.contractsWhereInput[];
    OR?: Prisma.contractsWhereInput[];
    NOT?: Prisma.contractsWhereInput | Prisma.contractsWhereInput[];
    id?: Prisma.StringFilter<"contracts"> | string;
    project_id?: Prisma.StringFilter<"contracts"> | string;
    freelancer_id?: Prisma.StringFilter<"contracts"> | string;
    client_id?: Prisma.StringFilter<"contracts"> | string;
    total_amount?: Prisma.DecimalFilter<"contracts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFilter<"contracts"> | $Enums.contract_status;
    started_at?: Prisma.DateTimeFilter<"contracts"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"contracts"> | Date | string | null;
    project?: Prisma.XOR<Prisma.ProjectsScalarRelationFilter, Prisma.projectsWhereInput>;
    freelancer?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    client?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    milestones?: Prisma.MilestonesListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
};
export type contractsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    project?: Prisma.projectsOrderByWithRelationInput;
    freelancer?: Prisma.usersOrderByWithRelationInput;
    client?: Prisma.usersOrderByWithRelationInput;
    milestones?: Prisma.milestonesOrderByRelationAggregateInput;
    reviews?: Prisma.reviewsOrderByRelationAggregateInput;
};
export type contractsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.contractsWhereInput | Prisma.contractsWhereInput[];
    OR?: Prisma.contractsWhereInput[];
    NOT?: Prisma.contractsWhereInput | Prisma.contractsWhereInput[];
    project_id?: Prisma.StringFilter<"contracts"> | string;
    freelancer_id?: Prisma.StringFilter<"contracts"> | string;
    client_id?: Prisma.StringFilter<"contracts"> | string;
    total_amount?: Prisma.DecimalFilter<"contracts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFilter<"contracts"> | $Enums.contract_status;
    started_at?: Prisma.DateTimeFilter<"contracts"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"contracts"> | Date | string | null;
    project?: Prisma.XOR<Prisma.ProjectsScalarRelationFilter, Prisma.projectsWhereInput>;
    freelancer?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    client?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    milestones?: Prisma.MilestonesListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
}, "id">;
export type contractsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.contractsCountOrderByAggregateInput;
    _avg?: Prisma.contractsAvgOrderByAggregateInput;
    _max?: Prisma.contractsMaxOrderByAggregateInput;
    _min?: Prisma.contractsMinOrderByAggregateInput;
    _sum?: Prisma.contractsSumOrderByAggregateInput;
};
export type contractsScalarWhereWithAggregatesInput = {
    AND?: Prisma.contractsScalarWhereWithAggregatesInput | Prisma.contractsScalarWhereWithAggregatesInput[];
    OR?: Prisma.contractsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contractsScalarWhereWithAggregatesInput | Prisma.contractsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"contracts"> | string;
    project_id?: Prisma.StringWithAggregatesFilter<"contracts"> | string;
    freelancer_id?: Prisma.StringWithAggregatesFilter<"contracts"> | string;
    client_id?: Prisma.StringWithAggregatesFilter<"contracts"> | string;
    total_amount?: Prisma.DecimalWithAggregatesFilter<"contracts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusWithAggregatesFilter<"contracts"> | $Enums.contract_status;
    started_at?: Prisma.DateTimeWithAggregatesFilter<"contracts"> | Date | string;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"contracts"> | Date | string | null;
};
export type contractsCreateInput = {
    id?: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    project: Prisma.projectsCreateNestedOneWithoutContractsInput;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_contractInput;
    client: Prisma.usersCreateNestedOneWithoutClient_contractInput;
    milestones?: Prisma.milestonesCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutContractInput;
};
export type contractsUncheckedCreateInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    milestones?: Prisma.milestonesUncheckedCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutContractInput;
};
export type contractsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project?: Prisma.projectsUpdateOneRequiredWithoutContractsNestedInput;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_contractNestedInput;
    client?: Prisma.usersUpdateOneRequiredWithoutClient_contractNestedInput;
    milestones?: Prisma.milestonesUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    milestones?: Prisma.milestonesUncheckedUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutContractNestedInput;
};
export type contractsCreateManyInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
};
export type contractsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContractsListRelationFilter = {
    every?: Prisma.contractsWhereInput;
    some?: Prisma.contractsWhereInput;
    none?: Prisma.contractsWhereInput;
};
export type contractsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type contractsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
};
export type contractsAvgOrderByAggregateInput = {
    total_amount?: Prisma.SortOrder;
};
export type contractsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
};
export type contractsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    project_id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    client_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
};
export type contractsSumOrderByAggregateInput = {
    total_amount?: Prisma.SortOrder;
};
export type ContractsScalarRelationFilter = {
    is?: Prisma.contractsWhereInput;
    isNot?: Prisma.contractsWhereInput;
};
export type contractsCreateNestedManyWithoutFreelancerInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutFreelancerInput, Prisma.contractsUncheckedCreateWithoutFreelancerInput> | Prisma.contractsCreateWithoutFreelancerInput[] | Prisma.contractsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutFreelancerInput | Prisma.contractsCreateOrConnectWithoutFreelancerInput[];
    createMany?: Prisma.contractsCreateManyFreelancerInputEnvelope;
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
};
export type contractsCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutClientInput, Prisma.contractsUncheckedCreateWithoutClientInput> | Prisma.contractsCreateWithoutClientInput[] | Prisma.contractsUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutClientInput | Prisma.contractsCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.contractsCreateManyClientInputEnvelope;
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
};
export type contractsUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutFreelancerInput, Prisma.contractsUncheckedCreateWithoutFreelancerInput> | Prisma.contractsCreateWithoutFreelancerInput[] | Prisma.contractsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutFreelancerInput | Prisma.contractsCreateOrConnectWithoutFreelancerInput[];
    createMany?: Prisma.contractsCreateManyFreelancerInputEnvelope;
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
};
export type contractsUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutClientInput, Prisma.contractsUncheckedCreateWithoutClientInput> | Prisma.contractsCreateWithoutClientInput[] | Prisma.contractsUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutClientInput | Prisma.contractsCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.contractsCreateManyClientInputEnvelope;
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
};
export type contractsUpdateManyWithoutFreelancerNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutFreelancerInput, Prisma.contractsUncheckedCreateWithoutFreelancerInput> | Prisma.contractsCreateWithoutFreelancerInput[] | Prisma.contractsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutFreelancerInput | Prisma.contractsCreateOrConnectWithoutFreelancerInput[];
    upsert?: Prisma.contractsUpsertWithWhereUniqueWithoutFreelancerInput | Prisma.contractsUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: Prisma.contractsCreateManyFreelancerInputEnvelope;
    set?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    disconnect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    delete?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    update?: Prisma.contractsUpdateWithWhereUniqueWithoutFreelancerInput | Prisma.contractsUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: Prisma.contractsUpdateManyWithWhereWithoutFreelancerInput | Prisma.contractsUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
};
export type contractsUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutClientInput, Prisma.contractsUncheckedCreateWithoutClientInput> | Prisma.contractsCreateWithoutClientInput[] | Prisma.contractsUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutClientInput | Prisma.contractsCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.contractsUpsertWithWhereUniqueWithoutClientInput | Prisma.contractsUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.contractsCreateManyClientInputEnvelope;
    set?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    disconnect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    delete?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    update?: Prisma.contractsUpdateWithWhereUniqueWithoutClientInput | Prisma.contractsUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.contractsUpdateManyWithWhereWithoutClientInput | Prisma.contractsUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
};
export type contractsUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutFreelancerInput, Prisma.contractsUncheckedCreateWithoutFreelancerInput> | Prisma.contractsCreateWithoutFreelancerInput[] | Prisma.contractsUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutFreelancerInput | Prisma.contractsCreateOrConnectWithoutFreelancerInput[];
    upsert?: Prisma.contractsUpsertWithWhereUniqueWithoutFreelancerInput | Prisma.contractsUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: Prisma.contractsCreateManyFreelancerInputEnvelope;
    set?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    disconnect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    delete?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    update?: Prisma.contractsUpdateWithWhereUniqueWithoutFreelancerInput | Prisma.contractsUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: Prisma.contractsUpdateManyWithWhereWithoutFreelancerInput | Prisma.contractsUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
};
export type contractsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutClientInput, Prisma.contractsUncheckedCreateWithoutClientInput> | Prisma.contractsCreateWithoutClientInput[] | Prisma.contractsUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutClientInput | Prisma.contractsCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.contractsUpsertWithWhereUniqueWithoutClientInput | Prisma.contractsUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.contractsCreateManyClientInputEnvelope;
    set?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    disconnect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    delete?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    update?: Prisma.contractsUpdateWithWhereUniqueWithoutClientInput | Prisma.contractsUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.contractsUpdateManyWithWhereWithoutClientInput | Prisma.contractsUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
};
export type contractsCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutProjectInput, Prisma.contractsUncheckedCreateWithoutProjectInput> | Prisma.contractsCreateWithoutProjectInput[] | Prisma.contractsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutProjectInput | Prisma.contractsCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.contractsCreateManyProjectInputEnvelope;
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
};
export type contractsUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutProjectInput, Prisma.contractsUncheckedCreateWithoutProjectInput> | Prisma.contractsCreateWithoutProjectInput[] | Prisma.contractsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutProjectInput | Prisma.contractsCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.contractsCreateManyProjectInputEnvelope;
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
};
export type contractsUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutProjectInput, Prisma.contractsUncheckedCreateWithoutProjectInput> | Prisma.contractsCreateWithoutProjectInput[] | Prisma.contractsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutProjectInput | Prisma.contractsCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.contractsUpsertWithWhereUniqueWithoutProjectInput | Prisma.contractsUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.contractsCreateManyProjectInputEnvelope;
    set?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    disconnect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    delete?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    update?: Prisma.contractsUpdateWithWhereUniqueWithoutProjectInput | Prisma.contractsUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.contractsUpdateManyWithWhereWithoutProjectInput | Prisma.contractsUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
};
export type contractsUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutProjectInput, Prisma.contractsUncheckedCreateWithoutProjectInput> | Prisma.contractsCreateWithoutProjectInput[] | Prisma.contractsUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutProjectInput | Prisma.contractsCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.contractsUpsertWithWhereUniqueWithoutProjectInput | Prisma.contractsUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.contractsCreateManyProjectInputEnvelope;
    set?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    disconnect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    delete?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    connect?: Prisma.contractsWhereUniqueInput | Prisma.contractsWhereUniqueInput[];
    update?: Prisma.contractsUpdateWithWhereUniqueWithoutProjectInput | Prisma.contractsUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.contractsUpdateManyWithWhereWithoutProjectInput | Prisma.contractsUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
};
export type Enumcontract_statusFieldUpdateOperationsInput = {
    set?: $Enums.contract_status;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type contractsCreateNestedOneWithoutMilestonesInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutMilestonesInput, Prisma.contractsUncheckedCreateWithoutMilestonesInput>;
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutMilestonesInput;
    connect?: Prisma.contractsWhereUniqueInput;
};
export type contractsUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutMilestonesInput, Prisma.contractsUncheckedCreateWithoutMilestonesInput>;
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutMilestonesInput;
    upsert?: Prisma.contractsUpsertWithoutMilestonesInput;
    connect?: Prisma.contractsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.contractsUpdateToOneWithWhereWithoutMilestonesInput, Prisma.contractsUpdateWithoutMilestonesInput>, Prisma.contractsUncheckedUpdateWithoutMilestonesInput>;
};
export type contractsCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutReviewsInput, Prisma.contractsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.contractsWhereUniqueInput;
};
export type contractsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.contractsCreateWithoutReviewsInput, Prisma.contractsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.contractsCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.contractsUpsertWithoutReviewsInput;
    connect?: Prisma.contractsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.contractsUpdateToOneWithWhereWithoutReviewsInput, Prisma.contractsUpdateWithoutReviewsInput>, Prisma.contractsUncheckedUpdateWithoutReviewsInput>;
};
export type contractsCreateWithoutFreelancerInput = {
    id?: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    project: Prisma.projectsCreateNestedOneWithoutContractsInput;
    client: Prisma.usersCreateNestedOneWithoutClient_contractInput;
    milestones?: Prisma.milestonesCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutContractInput;
};
export type contractsUncheckedCreateWithoutFreelancerInput = {
    id?: string;
    project_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    milestones?: Prisma.milestonesUncheckedCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutContractInput;
};
export type contractsCreateOrConnectWithoutFreelancerInput = {
    where: Prisma.contractsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contractsCreateWithoutFreelancerInput, Prisma.contractsUncheckedCreateWithoutFreelancerInput>;
};
export type contractsCreateManyFreelancerInputEnvelope = {
    data: Prisma.contractsCreateManyFreelancerInput | Prisma.contractsCreateManyFreelancerInput[];
    skipDuplicates?: boolean;
};
export type contractsCreateWithoutClientInput = {
    id?: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    project: Prisma.projectsCreateNestedOneWithoutContractsInput;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_contractInput;
    milestones?: Prisma.milestonesCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutContractInput;
};
export type contractsUncheckedCreateWithoutClientInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    milestones?: Prisma.milestonesUncheckedCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutContractInput;
};
export type contractsCreateOrConnectWithoutClientInput = {
    where: Prisma.contractsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contractsCreateWithoutClientInput, Prisma.contractsUncheckedCreateWithoutClientInput>;
};
export type contractsCreateManyClientInputEnvelope = {
    data: Prisma.contractsCreateManyClientInput | Prisma.contractsCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type contractsUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: Prisma.contractsWhereUniqueInput;
    update: Prisma.XOR<Prisma.contractsUpdateWithoutFreelancerInput, Prisma.contractsUncheckedUpdateWithoutFreelancerInput>;
    create: Prisma.XOR<Prisma.contractsCreateWithoutFreelancerInput, Prisma.contractsUncheckedCreateWithoutFreelancerInput>;
};
export type contractsUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: Prisma.contractsWhereUniqueInput;
    data: Prisma.XOR<Prisma.contractsUpdateWithoutFreelancerInput, Prisma.contractsUncheckedUpdateWithoutFreelancerInput>;
};
export type contractsUpdateManyWithWhereWithoutFreelancerInput = {
    where: Prisma.contractsScalarWhereInput;
    data: Prisma.XOR<Prisma.contractsUpdateManyMutationInput, Prisma.contractsUncheckedUpdateManyWithoutFreelancerInput>;
};
export type contractsScalarWhereInput = {
    AND?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
    OR?: Prisma.contractsScalarWhereInput[];
    NOT?: Prisma.contractsScalarWhereInput | Prisma.contractsScalarWhereInput[];
    id?: Prisma.StringFilter<"contracts"> | string;
    project_id?: Prisma.StringFilter<"contracts"> | string;
    freelancer_id?: Prisma.StringFilter<"contracts"> | string;
    client_id?: Prisma.StringFilter<"contracts"> | string;
    total_amount?: Prisma.DecimalFilter<"contracts"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFilter<"contracts"> | $Enums.contract_status;
    started_at?: Prisma.DateTimeFilter<"contracts"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"contracts"> | Date | string | null;
};
export type contractsUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.contractsWhereUniqueInput;
    update: Prisma.XOR<Prisma.contractsUpdateWithoutClientInput, Prisma.contractsUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.contractsCreateWithoutClientInput, Prisma.contractsUncheckedCreateWithoutClientInput>;
};
export type contractsUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.contractsWhereUniqueInput;
    data: Prisma.XOR<Prisma.contractsUpdateWithoutClientInput, Prisma.contractsUncheckedUpdateWithoutClientInput>;
};
export type contractsUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.contractsScalarWhereInput;
    data: Prisma.XOR<Prisma.contractsUpdateManyMutationInput, Prisma.contractsUncheckedUpdateManyWithoutClientInput>;
};
export type contractsCreateWithoutProjectInput = {
    id?: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_contractInput;
    client: Prisma.usersCreateNestedOneWithoutClient_contractInput;
    milestones?: Prisma.milestonesCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutContractInput;
};
export type contractsUncheckedCreateWithoutProjectInput = {
    id?: string;
    freelancer_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    milestones?: Prisma.milestonesUncheckedCreateNestedManyWithoutContractInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutContractInput;
};
export type contractsCreateOrConnectWithoutProjectInput = {
    where: Prisma.contractsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contractsCreateWithoutProjectInput, Prisma.contractsUncheckedCreateWithoutProjectInput>;
};
export type contractsCreateManyProjectInputEnvelope = {
    data: Prisma.contractsCreateManyProjectInput | Prisma.contractsCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type contractsUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.contractsWhereUniqueInput;
    update: Prisma.XOR<Prisma.contractsUpdateWithoutProjectInput, Prisma.contractsUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.contractsCreateWithoutProjectInput, Prisma.contractsUncheckedCreateWithoutProjectInput>;
};
export type contractsUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.contractsWhereUniqueInput;
    data: Prisma.XOR<Prisma.contractsUpdateWithoutProjectInput, Prisma.contractsUncheckedUpdateWithoutProjectInput>;
};
export type contractsUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.contractsScalarWhereInput;
    data: Prisma.XOR<Prisma.contractsUpdateManyMutationInput, Prisma.contractsUncheckedUpdateManyWithoutProjectInput>;
};
export type contractsCreateWithoutMilestonesInput = {
    id?: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    project: Prisma.projectsCreateNestedOneWithoutContractsInput;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_contractInput;
    client: Prisma.usersCreateNestedOneWithoutClient_contractInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutContractInput;
};
export type contractsUncheckedCreateWithoutMilestonesInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutContractInput;
};
export type contractsCreateOrConnectWithoutMilestonesInput = {
    where: Prisma.contractsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contractsCreateWithoutMilestonesInput, Prisma.contractsUncheckedCreateWithoutMilestonesInput>;
};
export type contractsUpsertWithoutMilestonesInput = {
    update: Prisma.XOR<Prisma.contractsUpdateWithoutMilestonesInput, Prisma.contractsUncheckedUpdateWithoutMilestonesInput>;
    create: Prisma.XOR<Prisma.contractsCreateWithoutMilestonesInput, Prisma.contractsUncheckedCreateWithoutMilestonesInput>;
    where?: Prisma.contractsWhereInput;
};
export type contractsUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: Prisma.contractsWhereInput;
    data: Prisma.XOR<Prisma.contractsUpdateWithoutMilestonesInput, Prisma.contractsUncheckedUpdateWithoutMilestonesInput>;
};
export type contractsUpdateWithoutMilestonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project?: Prisma.projectsUpdateOneRequiredWithoutContractsNestedInput;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_contractNestedInput;
    client?: Prisma.usersUpdateOneRequiredWithoutClient_contractNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateWithoutMilestonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutContractNestedInput;
};
export type contractsCreateWithoutReviewsInput = {
    id?: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    project: Prisma.projectsCreateNestedOneWithoutContractsInput;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_contractInput;
    client: Prisma.usersCreateNestedOneWithoutClient_contractInput;
    milestones?: Prisma.milestonesCreateNestedManyWithoutContractInput;
};
export type contractsUncheckedCreateWithoutReviewsInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
    milestones?: Prisma.milestonesUncheckedCreateNestedManyWithoutContractInput;
};
export type contractsCreateOrConnectWithoutReviewsInput = {
    where: Prisma.contractsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contractsCreateWithoutReviewsInput, Prisma.contractsUncheckedCreateWithoutReviewsInput>;
};
export type contractsUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.contractsUpdateWithoutReviewsInput, Prisma.contractsUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.contractsCreateWithoutReviewsInput, Prisma.contractsUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.contractsWhereInput;
};
export type contractsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.contractsWhereInput;
    data: Prisma.XOR<Prisma.contractsUpdateWithoutReviewsInput, Prisma.contractsUncheckedUpdateWithoutReviewsInput>;
};
export type contractsUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project?: Prisma.projectsUpdateOneRequiredWithoutContractsNestedInput;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_contractNestedInput;
    client?: Prisma.usersUpdateOneRequiredWithoutClient_contractNestedInput;
    milestones?: Prisma.milestonesUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    milestones?: Prisma.milestonesUncheckedUpdateManyWithoutContractNestedInput;
};
export type contractsCreateManyFreelancerInput = {
    id?: string;
    project_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
};
export type contractsCreateManyClientInput = {
    id?: string;
    project_id: string;
    freelancer_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
};
export type contractsUpdateWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project?: Prisma.projectsUpdateOneRequiredWithoutContractsNestedInput;
    client?: Prisma.usersUpdateOneRequiredWithoutClient_contractNestedInput;
    milestones?: Prisma.milestonesUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    milestones?: Prisma.milestonesUncheckedUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateManyWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractsUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project?: Prisma.projectsUpdateOneRequiredWithoutContractsNestedInput;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_contractNestedInput;
    milestones?: Prisma.milestonesUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    milestones?: Prisma.milestonesUncheckedUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    project_id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contractsCreateManyProjectInput = {
    id?: string;
    freelancer_id: string;
    client_id: string;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.contract_status;
    started_at?: Date | string;
    completed_at?: Date | string | null;
};
export type contractsUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_contractNestedInput;
    client?: Prisma.usersUpdateOneRequiredWithoutClient_contractNestedInput;
    milestones?: Prisma.milestonesUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    milestones?: Prisma.milestonesUncheckedUpdateManyWithoutContractNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutContractNestedInput;
};
export type contractsUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    client_id?: Prisma.StringFieldUpdateOperationsInput | string;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumcontract_statusFieldUpdateOperationsInput | $Enums.contract_status;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type ContractsCountOutputType
 */
export type ContractsCountOutputType = {
    milestones: number;
    reviews: number;
};
export type ContractsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    milestones?: boolean | ContractsCountOutputTypeCountMilestonesArgs;
    reviews?: boolean | ContractsCountOutputTypeCountReviewsArgs;
};
/**
 * ContractsCountOutputType without action
 */
export type ContractsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractsCountOutputType
     */
    select?: Prisma.ContractsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ContractsCountOutputType without action
 */
export type ContractsCountOutputTypeCountMilestonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestonesWhereInput;
};
/**
 * ContractsCountOutputType without action
 */
export type ContractsCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type contractsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    client_id?: boolean;
    total_amount?: boolean;
    status?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    milestones?: boolean | Prisma.contracts$milestonesArgs<ExtArgs>;
    reviews?: boolean | Prisma.contracts$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContractsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contracts"]>;
export type contractsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    client_id?: boolean;
    total_amount?: boolean;
    status?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contracts"]>;
export type contractsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    client_id?: boolean;
    total_amount?: boolean;
    status?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contracts"]>;
export type contractsSelectScalar = {
    id?: boolean;
    project_id?: boolean;
    freelancer_id?: boolean;
    client_id?: boolean;
    total_amount?: boolean;
    status?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
};
export type contractsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "project_id" | "freelancer_id" | "client_id" | "total_amount" | "status" | "started_at" | "completed_at", ExtArgs["result"]["contracts"]>;
export type contractsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    milestones?: boolean | Prisma.contracts$milestonesArgs<ExtArgs>;
    reviews?: boolean | Prisma.contracts$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContractsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type contractsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type contractsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.projectsDefaultArgs<ExtArgs>;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $contractsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contracts";
    objects: {
        project: Prisma.$projectsPayload<ExtArgs>;
        freelancer: Prisma.$usersPayload<ExtArgs>;
        client: Prisma.$usersPayload<ExtArgs>;
        milestones: Prisma.$milestonesPayload<ExtArgs>[];
        reviews: Prisma.$reviewsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        project_id: string;
        freelancer_id: string;
        client_id: string;
        total_amount: runtime.Decimal;
        status: $Enums.contract_status;
        started_at: Date;
        completed_at: Date | null;
    }, ExtArgs["result"]["contracts"]>;
    composites: {};
};
export type contractsGetPayload<S extends boolean | null | undefined | contractsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contractsPayload, S>;
export type contractsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contractsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContractsCountAggregateInputType | true;
};
export interface contractsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contracts'];
        meta: {
            name: 'contracts';
        };
    };
    /**
     * Find zero or one Contracts that matches the filter.
     * @param {contractsFindUniqueArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contractsFindUniqueArgs>(args: Prisma.SelectSubset<T, contractsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Contracts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contractsFindUniqueOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contractsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contractsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsFindFirstArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contractsFindFirstArgs>(args?: Prisma.SelectSubset<T, contractsFindFirstArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contracts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsFindFirstOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contractsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contractsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contracts.findMany()
     *
     * // Get first 10 Contracts
     * const contracts = await prisma.contracts.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contractsWithIdOnly = await prisma.contracts.findMany({ select: { id: true } })
     *
     */
    findMany<T extends contractsFindManyArgs>(args?: Prisma.SelectSubset<T, contractsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Contracts.
     * @param {contractsCreateArgs} args - Arguments to create a Contracts.
     * @example
     * // Create one Contracts
     * const Contracts = await prisma.contracts.create({
     *   data: {
     *     // ... data to create a Contracts
     *   }
     * })
     *
     */
    create<T extends contractsCreateArgs>(args: Prisma.SelectSubset<T, contractsCreateArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Contracts.
     * @param {contractsCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contracts = await prisma.contracts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends contractsCreateManyArgs>(args?: Prisma.SelectSubset<T, contractsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {contractsCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contracts = await prisma.contracts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Contracts and only return the `id`
     * const contractsWithIdOnly = await prisma.contracts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends contractsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, contractsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Contracts.
     * @param {contractsDeleteArgs} args - Arguments to delete one Contracts.
     * @example
     * // Delete one Contracts
     * const Contracts = await prisma.contracts.delete({
     *   where: {
     *     // ... filter to delete one Contracts
     *   }
     * })
     *
     */
    delete<T extends contractsDeleteArgs>(args: Prisma.SelectSubset<T, contractsDeleteArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Contracts.
     * @param {contractsUpdateArgs} args - Arguments to update one Contracts.
     * @example
     * // Update one Contracts
     * const contracts = await prisma.contracts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends contractsUpdateArgs>(args: Prisma.SelectSubset<T, contractsUpdateArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Contracts.
     * @param {contractsDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contracts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends contractsDeleteManyArgs>(args?: Prisma.SelectSubset<T, contractsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contracts = await prisma.contracts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends contractsUpdateManyArgs>(args: Prisma.SelectSubset<T, contractsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {contractsUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contracts = await prisma.contracts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Contracts and only return the `id`
     * const contractsWithIdOnly = await prisma.contracts.updateManyAndReturn({
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
    updateManyAndReturn<T extends contractsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, contractsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Contracts.
     * @param {contractsUpsertArgs} args - Arguments to update or create a Contracts.
     * @example
     * // Update or create a Contracts
     * const contracts = await prisma.contracts.upsert({
     *   create: {
     *     // ... data to create a Contracts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contracts we want to update
     *   }
     * })
     */
    upsert<T extends contractsUpsertArgs>(args: Prisma.SelectSubset<T, contractsUpsertArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contracts.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends contractsCountArgs>(args?: Prisma.Subset<T, contractsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContractsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractsAggregateArgs>(args: Prisma.Subset<T, ContractsAggregateArgs>): Prisma.PrismaPromise<GetContractsAggregateType<T>>;
    /**
     * Group by Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends contractsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contractsGroupByArgs['orderBy'];
    } : {
        orderBy?: contractsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contractsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the contracts model
     */
    readonly fields: contractsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for contracts.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__contractsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.projectsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.projectsDefaultArgs<ExtArgs>>): Prisma.Prisma__projectsClient<runtime.Types.Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    freelancer<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    client<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    milestones<T extends Prisma.contracts$milestonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contracts$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.contracts$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contracts$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the contracts model
 */
export interface contractsFieldRefs {
    readonly id: Prisma.FieldRef<"contracts", 'String'>;
    readonly project_id: Prisma.FieldRef<"contracts", 'String'>;
    readonly freelancer_id: Prisma.FieldRef<"contracts", 'String'>;
    readonly client_id: Prisma.FieldRef<"contracts", 'String'>;
    readonly total_amount: Prisma.FieldRef<"contracts", 'Decimal'>;
    readonly status: Prisma.FieldRef<"contracts", 'contract_status'>;
    readonly started_at: Prisma.FieldRef<"contracts", 'DateTime'>;
    readonly completed_at: Prisma.FieldRef<"contracts", 'DateTime'>;
}
/**
 * contracts findUnique
 */
export type contractsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * Filter, which contracts to fetch.
     */
    where: Prisma.contractsWhereUniqueInput;
};
/**
 * contracts findUniqueOrThrow
 */
export type contractsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * Filter, which contracts to fetch.
     */
    where: Prisma.contractsWhereUniqueInput;
};
/**
 * contracts findFirst
 */
export type contractsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * Filter, which contracts to fetch.
     */
    where?: Prisma.contractsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: Prisma.contractsOrderByWithRelationInput | Prisma.contractsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contracts.
     */
    cursor?: Prisma.contractsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contracts.
     */
    distinct?: Prisma.ContractsScalarFieldEnum | Prisma.ContractsScalarFieldEnum[];
};
/**
 * contracts findFirstOrThrow
 */
export type contractsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * Filter, which contracts to fetch.
     */
    where?: Prisma.contractsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: Prisma.contractsOrderByWithRelationInput | Prisma.contractsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contracts.
     */
    cursor?: Prisma.contractsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contracts.
     */
    distinct?: Prisma.ContractsScalarFieldEnum | Prisma.ContractsScalarFieldEnum[];
};
/**
 * contracts findMany
 */
export type contractsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * Filter, which contracts to fetch.
     */
    where?: Prisma.contractsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contracts to fetch.
     */
    orderBy?: Prisma.contractsOrderByWithRelationInput | Prisma.contractsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contracts.
     */
    cursor?: Prisma.contractsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contracts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contracts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contracts.
     */
    distinct?: Prisma.ContractsScalarFieldEnum | Prisma.ContractsScalarFieldEnum[];
};
/**
 * contracts create
 */
export type contractsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * The data needed to create a contracts.
     */
    data: Prisma.XOR<Prisma.contractsCreateInput, Prisma.contractsUncheckedCreateInput>;
};
/**
 * contracts createMany
 */
export type contractsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many contracts.
     */
    data: Prisma.contractsCreateManyInput | Prisma.contractsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * contracts createManyAndReturn
 */
export type contractsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * The data used to create many contracts.
     */
    data: Prisma.contractsCreateManyInput | Prisma.contractsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * contracts update
 */
export type contractsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * The data needed to update a contracts.
     */
    data: Prisma.XOR<Prisma.contractsUpdateInput, Prisma.contractsUncheckedUpdateInput>;
    /**
     * Choose, which contracts to update.
     */
    where: Prisma.contractsWhereUniqueInput;
};
/**
 * contracts updateMany
 */
export type contractsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update contracts.
     */
    data: Prisma.XOR<Prisma.contractsUpdateManyMutationInput, Prisma.contractsUncheckedUpdateManyInput>;
    /**
     * Filter which contracts to update
     */
    where?: Prisma.contractsWhereInput;
    /**
     * Limit how many contracts to update.
     */
    limit?: number;
};
/**
 * contracts updateManyAndReturn
 */
export type contractsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * The data used to update contracts.
     */
    data: Prisma.XOR<Prisma.contractsUpdateManyMutationInput, Prisma.contractsUncheckedUpdateManyInput>;
    /**
     * Filter which contracts to update
     */
    where?: Prisma.contractsWhereInput;
    /**
     * Limit how many contracts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * contracts upsert
 */
export type contractsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * The filter to search for the contracts to update in case it exists.
     */
    where: Prisma.contractsWhereUniqueInput;
    /**
     * In case the contracts found by the `where` argument doesn't exist, create a new contracts with this data.
     */
    create: Prisma.XOR<Prisma.contractsCreateInput, Prisma.contractsUncheckedCreateInput>;
    /**
     * In case the contracts was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.contractsUpdateInput, Prisma.contractsUncheckedUpdateInput>;
};
/**
 * contracts delete
 */
export type contractsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
    /**
     * Filter which contracts to delete.
     */
    where: Prisma.contractsWhereUniqueInput;
};
/**
 * contracts deleteMany
 */
export type contractsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contracts to delete
     */
    where?: Prisma.contractsWhereInput;
    /**
     * Limit how many contracts to delete.
     */
    limit?: number;
};
/**
 * contracts.milestones
 */
export type contracts$milestonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: Prisma.milestonesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the milestones
     */
    omit?: Prisma.milestonesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.milestonesInclude<ExtArgs> | null;
    where?: Prisma.milestonesWhereInput;
    orderBy?: Prisma.milestonesOrderByWithRelationInput | Prisma.milestonesOrderByWithRelationInput[];
    cursor?: Prisma.milestonesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MilestonesScalarFieldEnum | Prisma.MilestonesScalarFieldEnum[];
};
/**
 * contracts.reviews
 */
export type contracts$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reviews
     */
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
/**
 * contracts without action
 */
export type contractsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contracts
     */
    select?: Prisma.contractsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contracts
     */
    omit?: Prisma.contractsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contractsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=contracts.d.ts.map