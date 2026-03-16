import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model milestones
 *
 */
export type milestonesModel = runtime.Types.Result.DefaultSelection<Prisma.$milestonesPayload>;
export type AggregateMilestones = {
    _count: MilestonesCountAggregateOutputType | null;
    _avg: MilestonesAvgAggregateOutputType | null;
    _sum: MilestonesSumAggregateOutputType | null;
    _min: MilestonesMinAggregateOutputType | null;
    _max: MilestonesMaxAggregateOutputType | null;
};
export type MilestonesAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
    order_index: number | null;
};
export type MilestonesSumAggregateOutputType = {
    amount: runtime.Decimal | null;
    order_index: number | null;
};
export type MilestonesMinAggregateOutputType = {
    id: string | null;
    contract_id: string | null;
    title: string | null;
    description: string | null;
    amount: runtime.Decimal | null;
    due_date: Date | null;
    order_index: number | null;
    status: $Enums.milestone_status | null;
    submitted_at: Date | null;
    approved_at: Date | null;
};
export type MilestonesMaxAggregateOutputType = {
    id: string | null;
    contract_id: string | null;
    title: string | null;
    description: string | null;
    amount: runtime.Decimal | null;
    due_date: Date | null;
    order_index: number | null;
    status: $Enums.milestone_status | null;
    submitted_at: Date | null;
    approved_at: Date | null;
};
export type MilestonesCountAggregateOutputType = {
    id: number;
    contract_id: number;
    title: number;
    description: number;
    amount: number;
    due_date: number;
    order_index: number;
    status: number;
    submitted_at: number;
    approved_at: number;
    _all: number;
};
export type MilestonesAvgAggregateInputType = {
    amount?: true;
    order_index?: true;
};
export type MilestonesSumAggregateInputType = {
    amount?: true;
    order_index?: true;
};
export type MilestonesMinAggregateInputType = {
    id?: true;
    contract_id?: true;
    title?: true;
    description?: true;
    amount?: true;
    due_date?: true;
    order_index?: true;
    status?: true;
    submitted_at?: true;
    approved_at?: true;
};
export type MilestonesMaxAggregateInputType = {
    id?: true;
    contract_id?: true;
    title?: true;
    description?: true;
    amount?: true;
    due_date?: true;
    order_index?: true;
    status?: true;
    submitted_at?: true;
    approved_at?: true;
};
export type MilestonesCountAggregateInputType = {
    id?: true;
    contract_id?: true;
    title?: true;
    description?: true;
    amount?: true;
    due_date?: true;
    order_index?: true;
    status?: true;
    submitted_at?: true;
    approved_at?: true;
    _all?: true;
};
export type MilestonesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which milestones to aggregate.
     */
    where?: Prisma.milestonesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of milestones to fetch.
     */
    orderBy?: Prisma.milestonesOrderByWithRelationInput | Prisma.milestonesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.milestonesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` milestones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned milestones
    **/
    _count?: true | MilestonesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MilestonesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MilestonesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MilestonesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MilestonesMaxAggregateInputType;
};
export type GetMilestonesAggregateType<T extends MilestonesAggregateArgs> = {
    [P in keyof T & keyof AggregateMilestones]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMilestones[P]> : Prisma.GetScalarType<T[P], AggregateMilestones[P]>;
};
export type milestonesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestonesWhereInput;
    orderBy?: Prisma.milestonesOrderByWithAggregationInput | Prisma.milestonesOrderByWithAggregationInput[];
    by: Prisma.MilestonesScalarFieldEnum[] | Prisma.MilestonesScalarFieldEnum;
    having?: Prisma.milestonesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MilestonesCountAggregateInputType | true;
    _avg?: MilestonesAvgAggregateInputType;
    _sum?: MilestonesSumAggregateInputType;
    _min?: MilestonesMinAggregateInputType;
    _max?: MilestonesMaxAggregateInputType;
};
export type MilestonesGroupByOutputType = {
    id: string;
    contract_id: string;
    title: string;
    description: string | null;
    amount: runtime.Decimal;
    due_date: Date;
    order_index: number;
    status: $Enums.milestone_status;
    submitted_at: Date | null;
    approved_at: Date | null;
    _count: MilestonesCountAggregateOutputType | null;
    _avg: MilestonesAvgAggregateOutputType | null;
    _sum: MilestonesSumAggregateOutputType | null;
    _min: MilestonesMinAggregateOutputType | null;
    _max: MilestonesMaxAggregateOutputType | null;
};
type GetMilestonesGroupByPayload<T extends milestonesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MilestonesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MilestonesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MilestonesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MilestonesGroupByOutputType[P]>;
}>>;
export type milestonesWhereInput = {
    AND?: Prisma.milestonesWhereInput | Prisma.milestonesWhereInput[];
    OR?: Prisma.milestonesWhereInput[];
    NOT?: Prisma.milestonesWhereInput | Prisma.milestonesWhereInput[];
    id?: Prisma.StringFilter<"milestones"> | string;
    contract_id?: Prisma.StringFilter<"milestones"> | string;
    title?: Prisma.StringFilter<"milestones"> | string;
    description?: Prisma.StringNullableFilter<"milestones"> | string | null;
    amount?: Prisma.DecimalFilter<"milestones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFilter<"milestones"> | Date | string;
    order_index?: Prisma.IntFilter<"milestones"> | number;
    status?: Prisma.Enummilestone_statusFilter<"milestones"> | $Enums.milestone_status;
    submitted_at?: Prisma.DateTimeNullableFilter<"milestones"> | Date | string | null;
    approved_at?: Prisma.DateTimeNullableFilter<"milestones"> | Date | string | null;
    contract?: Prisma.XOR<Prisma.ContractsScalarRelationFilter, Prisma.contractsWhereInput>;
};
export type milestonesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contract_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    approved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    contract?: Prisma.contractsOrderByWithRelationInput;
};
export type milestonesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    contract_id_order_index?: Prisma.milestonesContract_idOrder_indexCompoundUniqueInput;
    AND?: Prisma.milestonesWhereInput | Prisma.milestonesWhereInput[];
    OR?: Prisma.milestonesWhereInput[];
    NOT?: Prisma.milestonesWhereInput | Prisma.milestonesWhereInput[];
    contract_id?: Prisma.StringFilter<"milestones"> | string;
    title?: Prisma.StringFilter<"milestones"> | string;
    description?: Prisma.StringNullableFilter<"milestones"> | string | null;
    amount?: Prisma.DecimalFilter<"milestones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFilter<"milestones"> | Date | string;
    order_index?: Prisma.IntFilter<"milestones"> | number;
    status?: Prisma.Enummilestone_statusFilter<"milestones"> | $Enums.milestone_status;
    submitted_at?: Prisma.DateTimeNullableFilter<"milestones"> | Date | string | null;
    approved_at?: Prisma.DateTimeNullableFilter<"milestones"> | Date | string | null;
    contract?: Prisma.XOR<Prisma.ContractsScalarRelationFilter, Prisma.contractsWhereInput>;
}, "id" | "contract_id_order_index">;
export type milestonesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contract_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    approved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.milestonesCountOrderByAggregateInput;
    _avg?: Prisma.milestonesAvgOrderByAggregateInput;
    _max?: Prisma.milestonesMaxOrderByAggregateInput;
    _min?: Prisma.milestonesMinOrderByAggregateInput;
    _sum?: Prisma.milestonesSumOrderByAggregateInput;
};
export type milestonesScalarWhereWithAggregatesInput = {
    AND?: Prisma.milestonesScalarWhereWithAggregatesInput | Prisma.milestonesScalarWhereWithAggregatesInput[];
    OR?: Prisma.milestonesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.milestonesScalarWhereWithAggregatesInput | Prisma.milestonesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"milestones"> | string;
    contract_id?: Prisma.StringWithAggregatesFilter<"milestones"> | string;
    title?: Prisma.StringWithAggregatesFilter<"milestones"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"milestones"> | string | null;
    amount?: Prisma.DecimalWithAggregatesFilter<"milestones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeWithAggregatesFilter<"milestones"> | Date | string;
    order_index?: Prisma.IntWithAggregatesFilter<"milestones"> | number;
    status?: Prisma.Enummilestone_statusWithAggregatesFilter<"milestones"> | $Enums.milestone_status;
    submitted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"milestones"> | Date | string | null;
    approved_at?: Prisma.DateTimeNullableWithAggregatesFilter<"milestones"> | Date | string | null;
};
export type milestonesCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date: Date | string;
    order_index: number;
    status?: $Enums.milestone_status;
    submitted_at?: Date | string | null;
    approved_at?: Date | string | null;
    contract: Prisma.contractsCreateNestedOneWithoutMilestonesInput;
};
export type milestonesUncheckedCreateInput = {
    id?: string;
    contract_id: string;
    title: string;
    description?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date: Date | string;
    order_index: number;
    status?: $Enums.milestone_status;
    submitted_at?: Date | string | null;
    approved_at?: Date | string | null;
};
export type milestonesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_index?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contract?: Prisma.contractsUpdateOneRequiredWithoutMilestonesNestedInput;
};
export type milestonesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contract_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_index?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type milestonesCreateManyInput = {
    id?: string;
    contract_id: string;
    title: string;
    description?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date: Date | string;
    order_index: number;
    status?: $Enums.milestone_status;
    submitted_at?: Date | string | null;
    approved_at?: Date | string | null;
};
export type milestonesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_index?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type milestonesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contract_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_index?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MilestonesListRelationFilter = {
    every?: Prisma.milestonesWhereInput;
    some?: Prisma.milestonesWhereInput;
    none?: Prisma.milestonesWhereInput;
};
export type milestonesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type milestonesContract_idOrder_indexCompoundUniqueInput = {
    contract_id: string;
    order_index: number;
};
export type milestonesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contract_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    approved_at?: Prisma.SortOrder;
};
export type milestonesAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
};
export type milestonesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contract_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    approved_at?: Prisma.SortOrder;
};
export type milestonesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contract_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    approved_at?: Prisma.SortOrder;
};
export type milestonesSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
};
export type milestonesCreateNestedManyWithoutContractInput = {
    create?: Prisma.XOR<Prisma.milestonesCreateWithoutContractInput, Prisma.milestonesUncheckedCreateWithoutContractInput> | Prisma.milestonesCreateWithoutContractInput[] | Prisma.milestonesUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.milestonesCreateOrConnectWithoutContractInput | Prisma.milestonesCreateOrConnectWithoutContractInput[];
    createMany?: Prisma.milestonesCreateManyContractInputEnvelope;
    connect?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
};
export type milestonesUncheckedCreateNestedManyWithoutContractInput = {
    create?: Prisma.XOR<Prisma.milestonesCreateWithoutContractInput, Prisma.milestonesUncheckedCreateWithoutContractInput> | Prisma.milestonesCreateWithoutContractInput[] | Prisma.milestonesUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.milestonesCreateOrConnectWithoutContractInput | Prisma.milestonesCreateOrConnectWithoutContractInput[];
    createMany?: Prisma.milestonesCreateManyContractInputEnvelope;
    connect?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
};
export type milestonesUpdateManyWithoutContractNestedInput = {
    create?: Prisma.XOR<Prisma.milestonesCreateWithoutContractInput, Prisma.milestonesUncheckedCreateWithoutContractInput> | Prisma.milestonesCreateWithoutContractInput[] | Prisma.milestonesUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.milestonesCreateOrConnectWithoutContractInput | Prisma.milestonesCreateOrConnectWithoutContractInput[];
    upsert?: Prisma.milestonesUpsertWithWhereUniqueWithoutContractInput | Prisma.milestonesUpsertWithWhereUniqueWithoutContractInput[];
    createMany?: Prisma.milestonesCreateManyContractInputEnvelope;
    set?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    disconnect?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    delete?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    connect?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    update?: Prisma.milestonesUpdateWithWhereUniqueWithoutContractInput | Prisma.milestonesUpdateWithWhereUniqueWithoutContractInput[];
    updateMany?: Prisma.milestonesUpdateManyWithWhereWithoutContractInput | Prisma.milestonesUpdateManyWithWhereWithoutContractInput[];
    deleteMany?: Prisma.milestonesScalarWhereInput | Prisma.milestonesScalarWhereInput[];
};
export type milestonesUncheckedUpdateManyWithoutContractNestedInput = {
    create?: Prisma.XOR<Prisma.milestonesCreateWithoutContractInput, Prisma.milestonesUncheckedCreateWithoutContractInput> | Prisma.milestonesCreateWithoutContractInput[] | Prisma.milestonesUncheckedCreateWithoutContractInput[];
    connectOrCreate?: Prisma.milestonesCreateOrConnectWithoutContractInput | Prisma.milestonesCreateOrConnectWithoutContractInput[];
    upsert?: Prisma.milestonesUpsertWithWhereUniqueWithoutContractInput | Prisma.milestonesUpsertWithWhereUniqueWithoutContractInput[];
    createMany?: Prisma.milestonesCreateManyContractInputEnvelope;
    set?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    disconnect?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    delete?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    connect?: Prisma.milestonesWhereUniqueInput | Prisma.milestonesWhereUniqueInput[];
    update?: Prisma.milestonesUpdateWithWhereUniqueWithoutContractInput | Prisma.milestonesUpdateWithWhereUniqueWithoutContractInput[];
    updateMany?: Prisma.milestonesUpdateManyWithWhereWithoutContractInput | Prisma.milestonesUpdateManyWithWhereWithoutContractInput[];
    deleteMany?: Prisma.milestonesScalarWhereInput | Prisma.milestonesScalarWhereInput[];
};
export type Enummilestone_statusFieldUpdateOperationsInput = {
    set?: $Enums.milestone_status;
};
export type milestonesCreateWithoutContractInput = {
    id?: string;
    title: string;
    description?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date: Date | string;
    order_index: number;
    status?: $Enums.milestone_status;
    submitted_at?: Date | string | null;
    approved_at?: Date | string | null;
};
export type milestonesUncheckedCreateWithoutContractInput = {
    id?: string;
    title: string;
    description?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date: Date | string;
    order_index: number;
    status?: $Enums.milestone_status;
    submitted_at?: Date | string | null;
    approved_at?: Date | string | null;
};
export type milestonesCreateOrConnectWithoutContractInput = {
    where: Prisma.milestonesWhereUniqueInput;
    create: Prisma.XOR<Prisma.milestonesCreateWithoutContractInput, Prisma.milestonesUncheckedCreateWithoutContractInput>;
};
export type milestonesCreateManyContractInputEnvelope = {
    data: Prisma.milestonesCreateManyContractInput | Prisma.milestonesCreateManyContractInput[];
    skipDuplicates?: boolean;
};
export type milestonesUpsertWithWhereUniqueWithoutContractInput = {
    where: Prisma.milestonesWhereUniqueInput;
    update: Prisma.XOR<Prisma.milestonesUpdateWithoutContractInput, Prisma.milestonesUncheckedUpdateWithoutContractInput>;
    create: Prisma.XOR<Prisma.milestonesCreateWithoutContractInput, Prisma.milestonesUncheckedCreateWithoutContractInput>;
};
export type milestonesUpdateWithWhereUniqueWithoutContractInput = {
    where: Prisma.milestonesWhereUniqueInput;
    data: Prisma.XOR<Prisma.milestonesUpdateWithoutContractInput, Prisma.milestonesUncheckedUpdateWithoutContractInput>;
};
export type milestonesUpdateManyWithWhereWithoutContractInput = {
    where: Prisma.milestonesScalarWhereInput;
    data: Prisma.XOR<Prisma.milestonesUpdateManyMutationInput, Prisma.milestonesUncheckedUpdateManyWithoutContractInput>;
};
export type milestonesScalarWhereInput = {
    AND?: Prisma.milestonesScalarWhereInput | Prisma.milestonesScalarWhereInput[];
    OR?: Prisma.milestonesScalarWhereInput[];
    NOT?: Prisma.milestonesScalarWhereInput | Prisma.milestonesScalarWhereInput[];
    id?: Prisma.StringFilter<"milestones"> | string;
    contract_id?: Prisma.StringFilter<"milestones"> | string;
    title?: Prisma.StringFilter<"milestones"> | string;
    description?: Prisma.StringNullableFilter<"milestones"> | string | null;
    amount?: Prisma.DecimalFilter<"milestones"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFilter<"milestones"> | Date | string;
    order_index?: Prisma.IntFilter<"milestones"> | number;
    status?: Prisma.Enummilestone_statusFilter<"milestones"> | $Enums.milestone_status;
    submitted_at?: Prisma.DateTimeNullableFilter<"milestones"> | Date | string | null;
    approved_at?: Prisma.DateTimeNullableFilter<"milestones"> | Date | string | null;
};
export type milestonesCreateManyContractInput = {
    id?: string;
    title: string;
    description?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date: Date | string;
    order_index: number;
    status?: $Enums.milestone_status;
    submitted_at?: Date | string | null;
    approved_at?: Date | string | null;
};
export type milestonesUpdateWithoutContractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_index?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type milestonesUncheckedUpdateWithoutContractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_index?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type milestonesUncheckedUpdateManyWithoutContractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    due_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order_index?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enummilestone_statusFieldUpdateOperationsInput | $Enums.milestone_status;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type milestonesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contract_id?: boolean;
    title?: boolean;
    description?: boolean;
    amount?: boolean;
    due_date?: boolean;
    order_index?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    approved_at?: boolean;
    contract?: boolean | Prisma.contractsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestones"]>;
export type milestonesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contract_id?: boolean;
    title?: boolean;
    description?: boolean;
    amount?: boolean;
    due_date?: boolean;
    order_index?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    approved_at?: boolean;
    contract?: boolean | Prisma.contractsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestones"]>;
export type milestonesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contract_id?: boolean;
    title?: boolean;
    description?: boolean;
    amount?: boolean;
    due_date?: boolean;
    order_index?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    approved_at?: boolean;
    contract?: boolean | Prisma.contractsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestones"]>;
export type milestonesSelectScalar = {
    id?: boolean;
    contract_id?: boolean;
    title?: boolean;
    description?: boolean;
    amount?: boolean;
    due_date?: boolean;
    order_index?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    approved_at?: boolean;
};
export type milestonesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contract_id" | "title" | "description" | "amount" | "due_date" | "order_index" | "status" | "submitted_at" | "approved_at", ExtArgs["result"]["milestones"]>;
export type milestonesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contract?: boolean | Prisma.contractsDefaultArgs<ExtArgs>;
};
export type milestonesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contract?: boolean | Prisma.contractsDefaultArgs<ExtArgs>;
};
export type milestonesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contract?: boolean | Prisma.contractsDefaultArgs<ExtArgs>;
};
export type $milestonesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "milestones";
    objects: {
        contract: Prisma.$contractsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contract_id: string;
        title: string;
        description: string | null;
        amount: runtime.Decimal;
        due_date: Date;
        order_index: number;
        status: $Enums.milestone_status;
        submitted_at: Date | null;
        approved_at: Date | null;
    }, ExtArgs["result"]["milestones"]>;
    composites: {};
};
export type milestonesGetPayload<S extends boolean | null | undefined | milestonesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$milestonesPayload, S>;
export type milestonesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<milestonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MilestonesCountAggregateInputType | true;
};
export interface milestonesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['milestones'];
        meta: {
            name: 'milestones';
        };
    };
    /**
     * Find zero or one Milestones that matches the filter.
     * @param {milestonesFindUniqueArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends milestonesFindUniqueArgs>(args: Prisma.SelectSubset<T, milestonesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Milestones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {milestonesFindUniqueOrThrowArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends milestonesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, milestonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesFindFirstArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends milestonesFindFirstArgs>(args?: Prisma.SelectSubset<T, milestonesFindFirstArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Milestones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesFindFirstOrThrowArgs} args - Arguments to find a Milestones
     * @example
     * // Get one Milestones
     * const milestones = await prisma.milestones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends milestonesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, milestonesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestones.findMany()
     *
     * // Get first 10 Milestones
     * const milestones = await prisma.milestones.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const milestonesWithIdOnly = await prisma.milestones.findMany({ select: { id: true } })
     *
     */
    findMany<T extends milestonesFindManyArgs>(args?: Prisma.SelectSubset<T, milestonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Milestones.
     * @param {milestonesCreateArgs} args - Arguments to create a Milestones.
     * @example
     * // Create one Milestones
     * const Milestones = await prisma.milestones.create({
     *   data: {
     *     // ... data to create a Milestones
     *   }
     * })
     *
     */
    create<T extends milestonesCreateArgs>(args: Prisma.SelectSubset<T, milestonesCreateArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Milestones.
     * @param {milestonesCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestones = await prisma.milestones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends milestonesCreateManyArgs>(args?: Prisma.SelectSubset<T, milestonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {milestonesCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestones = await prisma.milestones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Milestones and only return the `id`
     * const milestonesWithIdOnly = await prisma.milestones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends milestonesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, milestonesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Milestones.
     * @param {milestonesDeleteArgs} args - Arguments to delete one Milestones.
     * @example
     * // Delete one Milestones
     * const Milestones = await prisma.milestones.delete({
     *   where: {
     *     // ... filter to delete one Milestones
     *   }
     * })
     *
     */
    delete<T extends milestonesDeleteArgs>(args: Prisma.SelectSubset<T, milestonesDeleteArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Milestones.
     * @param {milestonesUpdateArgs} args - Arguments to update one Milestones.
     * @example
     * // Update one Milestones
     * const milestones = await prisma.milestones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends milestonesUpdateArgs>(args: Prisma.SelectSubset<T, milestonesUpdateArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Milestones.
     * @param {milestonesDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends milestonesDeleteManyArgs>(args?: Prisma.SelectSubset<T, milestonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestones = await prisma.milestones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends milestonesUpdateManyArgs>(args: Prisma.SelectSubset<T, milestonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {milestonesUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestones = await prisma.milestones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Milestones and only return the `id`
     * const milestonesWithIdOnly = await prisma.milestones.updateManyAndReturn({
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
    updateManyAndReturn<T extends milestonesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, milestonesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Milestones.
     * @param {milestonesUpsertArgs} args - Arguments to update or create a Milestones.
     * @example
     * // Update or create a Milestones
     * const milestones = await prisma.milestones.upsert({
     *   create: {
     *     // ... data to create a Milestones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestones we want to update
     *   }
     * })
     */
    upsert<T extends milestonesUpsertArgs>(args: Prisma.SelectSubset<T, milestonesUpsertArgs<ExtArgs>>): Prisma.Prisma__milestonesClient<runtime.Types.Result.GetResult<Prisma.$milestonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestones.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends milestonesCountArgs>(args?: Prisma.Subset<T, milestonesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MilestonesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestonesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestonesAggregateArgs>(args: Prisma.Subset<T, MilestonesAggregateArgs>): Prisma.PrismaPromise<GetMilestonesAggregateType<T>>;
    /**
     * Group by Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {milestonesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends milestonesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: milestonesGroupByArgs['orderBy'];
    } : {
        orderBy?: milestonesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, milestonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the milestones model
     */
    readonly fields: milestonesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for milestones.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__milestonesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contract<T extends Prisma.contractsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contractsDefaultArgs<ExtArgs>>): Prisma.Prisma__contractsClient<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the milestones model
 */
export interface milestonesFieldRefs {
    readonly id: Prisma.FieldRef<"milestones", 'String'>;
    readonly contract_id: Prisma.FieldRef<"milestones", 'String'>;
    readonly title: Prisma.FieldRef<"milestones", 'String'>;
    readonly description: Prisma.FieldRef<"milestones", 'String'>;
    readonly amount: Prisma.FieldRef<"milestones", 'Decimal'>;
    readonly due_date: Prisma.FieldRef<"milestones", 'DateTime'>;
    readonly order_index: Prisma.FieldRef<"milestones", 'Int'>;
    readonly status: Prisma.FieldRef<"milestones", 'milestone_status'>;
    readonly submitted_at: Prisma.FieldRef<"milestones", 'DateTime'>;
    readonly approved_at: Prisma.FieldRef<"milestones", 'DateTime'>;
}
/**
 * milestones findUnique
 */
export type milestonesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which milestones to fetch.
     */
    where: Prisma.milestonesWhereUniqueInput;
};
/**
 * milestones findUniqueOrThrow
 */
export type milestonesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which milestones to fetch.
     */
    where: Prisma.milestonesWhereUniqueInput;
};
/**
 * milestones findFirst
 */
export type milestonesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which milestones to fetch.
     */
    where?: Prisma.milestonesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of milestones to fetch.
     */
    orderBy?: Prisma.milestonesOrderByWithRelationInput | Prisma.milestonesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for milestones.
     */
    cursor?: Prisma.milestonesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` milestones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of milestones.
     */
    distinct?: Prisma.MilestonesScalarFieldEnum | Prisma.MilestonesScalarFieldEnum[];
};
/**
 * milestones findFirstOrThrow
 */
export type milestonesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which milestones to fetch.
     */
    where?: Prisma.milestonesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of milestones to fetch.
     */
    orderBy?: Prisma.milestonesOrderByWithRelationInput | Prisma.milestonesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for milestones.
     */
    cursor?: Prisma.milestonesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` milestones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of milestones.
     */
    distinct?: Prisma.MilestonesScalarFieldEnum | Prisma.MilestonesScalarFieldEnum[];
};
/**
 * milestones findMany
 */
export type milestonesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which milestones to fetch.
     */
    where?: Prisma.milestonesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of milestones to fetch.
     */
    orderBy?: Prisma.milestonesOrderByWithRelationInput | Prisma.milestonesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing milestones.
     */
    cursor?: Prisma.milestonesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` milestones from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` milestones.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of milestones.
     */
    distinct?: Prisma.MilestonesScalarFieldEnum | Prisma.MilestonesScalarFieldEnum[];
};
/**
 * milestones create
 */
export type milestonesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a milestones.
     */
    data: Prisma.XOR<Prisma.milestonesCreateInput, Prisma.milestonesUncheckedCreateInput>;
};
/**
 * milestones createMany
 */
export type milestonesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many milestones.
     */
    data: Prisma.milestonesCreateManyInput | Prisma.milestonesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * milestones createManyAndReturn
 */
export type milestonesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: Prisma.milestonesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the milestones
     */
    omit?: Prisma.milestonesOmit<ExtArgs> | null;
    /**
     * The data used to create many milestones.
     */
    data: Prisma.milestonesCreateManyInput | Prisma.milestonesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.milestonesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * milestones update
 */
export type milestonesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a milestones.
     */
    data: Prisma.XOR<Prisma.milestonesUpdateInput, Prisma.milestonesUncheckedUpdateInput>;
    /**
     * Choose, which milestones to update.
     */
    where: Prisma.milestonesWhereUniqueInput;
};
/**
 * milestones updateMany
 */
export type milestonesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update milestones.
     */
    data: Prisma.XOR<Prisma.milestonesUpdateManyMutationInput, Prisma.milestonesUncheckedUpdateManyInput>;
    /**
     * Filter which milestones to update
     */
    where?: Prisma.milestonesWhereInput;
    /**
     * Limit how many milestones to update.
     */
    limit?: number;
};
/**
 * milestones updateManyAndReturn
 */
export type milestonesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the milestones
     */
    select?: Prisma.milestonesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the milestones
     */
    omit?: Prisma.milestonesOmit<ExtArgs> | null;
    /**
     * The data used to update milestones.
     */
    data: Prisma.XOR<Prisma.milestonesUpdateManyMutationInput, Prisma.milestonesUncheckedUpdateManyInput>;
    /**
     * Filter which milestones to update
     */
    where?: Prisma.milestonesWhereInput;
    /**
     * Limit how many milestones to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.milestonesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * milestones upsert
 */
export type milestonesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the milestones to update in case it exists.
     */
    where: Prisma.milestonesWhereUniqueInput;
    /**
     * In case the milestones found by the `where` argument doesn't exist, create a new milestones with this data.
     */
    create: Prisma.XOR<Prisma.milestonesCreateInput, Prisma.milestonesUncheckedCreateInput>;
    /**
     * In case the milestones was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.milestonesUpdateInput, Prisma.milestonesUncheckedUpdateInput>;
};
/**
 * milestones delete
 */
export type milestonesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which milestones to delete.
     */
    where: Prisma.milestonesWhereUniqueInput;
};
/**
 * milestones deleteMany
 */
export type milestonesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which milestones to delete
     */
    where?: Prisma.milestonesWhereInput;
    /**
     * Limit how many milestones to delete.
     */
    limit?: number;
};
/**
 * milestones without action
 */
export type milestonesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=milestones.d.ts.map