import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model services
 *
 */
export type servicesModel = runtime.Types.Result.DefaultSelection<Prisma.$servicesPayload>;
export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null;
    _avg: ServicesAvgAggregateOutputType | null;
    _sum: ServicesSumAggregateOutputType | null;
    _min: ServicesMinAggregateOutputType | null;
    _max: ServicesMaxAggregateOutputType | null;
};
export type ServicesAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    delivery_days: number | null;
    rating: runtime.Decimal | null;
    total_reviews: number | null;
};
export type ServicesSumAggregateOutputType = {
    price: runtime.Decimal | null;
    delivery_days: number | null;
    rating: runtime.Decimal | null;
    total_reviews: number | null;
};
export type ServicesMinAggregateOutputType = {
    id: string | null;
    freelancer_id: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    pricing_type: $Enums.pricing_type | null;
    price: runtime.Decimal | null;
    delivery_days: number | null;
    rating: runtime.Decimal | null;
    total_reviews: number | null;
    created_at: Date | null;
};
export type ServicesMaxAggregateOutputType = {
    id: string | null;
    freelancer_id: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    pricing_type: $Enums.pricing_type | null;
    price: runtime.Decimal | null;
    delivery_days: number | null;
    rating: runtime.Decimal | null;
    total_reviews: number | null;
    created_at: Date | null;
};
export type ServicesCountAggregateOutputType = {
    id: number;
    freelancer_id: number;
    title: number;
    description: number;
    category: number;
    pricing_type: number;
    price: number;
    delivery_days: number;
    rating: number;
    total_reviews: number;
    created_at: number;
    _all: number;
};
export type ServicesAvgAggregateInputType = {
    price?: true;
    delivery_days?: true;
    rating?: true;
    total_reviews?: true;
};
export type ServicesSumAggregateInputType = {
    price?: true;
    delivery_days?: true;
    rating?: true;
    total_reviews?: true;
};
export type ServicesMinAggregateInputType = {
    id?: true;
    freelancer_id?: true;
    title?: true;
    description?: true;
    category?: true;
    pricing_type?: true;
    price?: true;
    delivery_days?: true;
    rating?: true;
    total_reviews?: true;
    created_at?: true;
};
export type ServicesMaxAggregateInputType = {
    id?: true;
    freelancer_id?: true;
    title?: true;
    description?: true;
    category?: true;
    pricing_type?: true;
    price?: true;
    delivery_days?: true;
    rating?: true;
    total_reviews?: true;
    created_at?: true;
};
export type ServicesCountAggregateInputType = {
    id?: true;
    freelancer_id?: true;
    title?: true;
    description?: true;
    category?: true;
    pricing_type?: true;
    price?: true;
    delivery_days?: true;
    rating?: true;
    total_reviews?: true;
    created_at?: true;
    _all?: true;
};
export type ServicesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which services to aggregate.
     */
    where?: Prisma.servicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.servicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType;
};
export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
    [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServices[P]> : Prisma.GetScalarType<T[P], AggregateServices[P]>;
};
export type servicesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.servicesWhereInput;
    orderBy?: Prisma.servicesOrderByWithAggregationInput | Prisma.servicesOrderByWithAggregationInput[];
    by: Prisma.ServicesScalarFieldEnum[] | Prisma.ServicesScalarFieldEnum;
    having?: Prisma.servicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServicesCountAggregateInputType | true;
    _avg?: ServicesAvgAggregateInputType;
    _sum?: ServicesSumAggregateInputType;
    _min?: ServicesMinAggregateInputType;
    _max?: ServicesMaxAggregateInputType;
};
export type ServicesGroupByOutputType = {
    id: string;
    freelancer_id: string;
    title: string;
    description: string;
    category: string;
    pricing_type: $Enums.pricing_type;
    price: runtime.Decimal;
    delivery_days: number;
    rating: runtime.Decimal;
    total_reviews: number;
    created_at: Date;
    _count: ServicesCountAggregateOutputType | null;
    _avg: ServicesAvgAggregateOutputType | null;
    _sum: ServicesSumAggregateOutputType | null;
    _min: ServicesMinAggregateOutputType | null;
    _max: ServicesMaxAggregateOutputType | null;
};
type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServicesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServicesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServicesGroupByOutputType[P]>;
}>>;
export type servicesWhereInput = {
    AND?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    OR?: Prisma.servicesWhereInput[];
    NOT?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    id?: Prisma.StringFilter<"services"> | string;
    freelancer_id?: Prisma.StringFilter<"services"> | string;
    title?: Prisma.StringFilter<"services"> | string;
    description?: Prisma.StringFilter<"services"> | string;
    category?: Prisma.StringFilter<"services"> | string;
    pricing_type?: Prisma.Enumpricing_typeFilter<"services"> | $Enums.pricing_type;
    price?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFilter<"services"> | number;
    rating?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFilter<"services"> | number;
    created_at?: Prisma.DateTimeFilter<"services"> | Date | string;
    freelancer?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type servicesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    delivery_days?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    total_reviews?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    freelancer?: Prisma.usersOrderByWithRelationInput;
};
export type servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    OR?: Prisma.servicesWhereInput[];
    NOT?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    freelancer_id?: Prisma.StringFilter<"services"> | string;
    title?: Prisma.StringFilter<"services"> | string;
    description?: Prisma.StringFilter<"services"> | string;
    category?: Prisma.StringFilter<"services"> | string;
    pricing_type?: Prisma.Enumpricing_typeFilter<"services"> | $Enums.pricing_type;
    price?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFilter<"services"> | number;
    rating?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFilter<"services"> | number;
    created_at?: Prisma.DateTimeFilter<"services"> | Date | string;
    freelancer?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type servicesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    delivery_days?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    total_reviews?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.servicesCountOrderByAggregateInput;
    _avg?: Prisma.servicesAvgOrderByAggregateInput;
    _max?: Prisma.servicesMaxOrderByAggregateInput;
    _min?: Prisma.servicesMinOrderByAggregateInput;
    _sum?: Prisma.servicesSumOrderByAggregateInput;
};
export type servicesScalarWhereWithAggregatesInput = {
    AND?: Prisma.servicesScalarWhereWithAggregatesInput | Prisma.servicesScalarWhereWithAggregatesInput[];
    OR?: Prisma.servicesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.servicesScalarWhereWithAggregatesInput | Prisma.servicesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"services"> | string;
    freelancer_id?: Prisma.StringWithAggregatesFilter<"services"> | string;
    title?: Prisma.StringWithAggregatesFilter<"services"> | string;
    description?: Prisma.StringWithAggregatesFilter<"services"> | string;
    category?: Prisma.StringWithAggregatesFilter<"services"> | string;
    pricing_type?: Prisma.Enumpricing_typeWithAggregatesFilter<"services"> | $Enums.pricing_type;
    price?: Prisma.DecimalWithAggregatesFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntWithAggregatesFilter<"services"> | number;
    rating?: Prisma.DecimalWithAggregatesFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntWithAggregatesFilter<"services"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"services"> | Date | string;
};
export type servicesCreateInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    pricing_type: $Enums.pricing_type;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days: number;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: number;
    created_at?: Date | string;
    freelancer: Prisma.usersCreateNestedOneWithoutFreelance_servicesInput;
};
export type servicesUncheckedCreateInput = {
    id?: string;
    freelancer_id: string;
    title: string;
    description: string;
    category: string;
    pricing_type: $Enums.pricing_type;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days: number;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: number;
    created_at?: Date | string;
};
export type servicesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelancer?: Prisma.usersUpdateOneRequiredWithoutFreelance_servicesNestedInput;
};
export type servicesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type servicesCreateManyInput = {
    id?: string;
    freelancer_id: string;
    title: string;
    description: string;
    category: string;
    pricing_type: $Enums.pricing_type;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days: number;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: number;
    created_at?: Date | string;
};
export type servicesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type servicesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    freelancer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServicesListRelationFilter = {
    every?: Prisma.servicesWhereInput;
    some?: Prisma.servicesWhereInput;
    none?: Prisma.servicesWhereInput;
};
export type servicesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type servicesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    delivery_days?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    total_reviews?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type servicesAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    delivery_days?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    total_reviews?: Prisma.SortOrder;
};
export type servicesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    delivery_days?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    total_reviews?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type servicesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    freelancer_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    delivery_days?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    total_reviews?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type servicesSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    delivery_days?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    total_reviews?: Prisma.SortOrder;
};
export type servicesCreateNestedManyWithoutFreelancerInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutFreelancerInput, Prisma.servicesUncheckedCreateWithoutFreelancerInput> | Prisma.servicesCreateWithoutFreelancerInput[] | Prisma.servicesUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutFreelancerInput | Prisma.servicesCreateOrConnectWithoutFreelancerInput[];
    createMany?: Prisma.servicesCreateManyFreelancerInputEnvelope;
    connect?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
};
export type servicesUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutFreelancerInput, Prisma.servicesUncheckedCreateWithoutFreelancerInput> | Prisma.servicesCreateWithoutFreelancerInput[] | Prisma.servicesUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutFreelancerInput | Prisma.servicesCreateOrConnectWithoutFreelancerInput[];
    createMany?: Prisma.servicesCreateManyFreelancerInputEnvelope;
    connect?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
};
export type servicesUpdateManyWithoutFreelancerNestedInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutFreelancerInput, Prisma.servicesUncheckedCreateWithoutFreelancerInput> | Prisma.servicesCreateWithoutFreelancerInput[] | Prisma.servicesUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutFreelancerInput | Prisma.servicesCreateOrConnectWithoutFreelancerInput[];
    upsert?: Prisma.servicesUpsertWithWhereUniqueWithoutFreelancerInput | Prisma.servicesUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: Prisma.servicesCreateManyFreelancerInputEnvelope;
    set?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    disconnect?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    delete?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    connect?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    update?: Prisma.servicesUpdateWithWhereUniqueWithoutFreelancerInput | Prisma.servicesUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: Prisma.servicesUpdateManyWithWhereWithoutFreelancerInput | Prisma.servicesUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: Prisma.servicesScalarWhereInput | Prisma.servicesScalarWhereInput[];
};
export type servicesUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutFreelancerInput, Prisma.servicesUncheckedCreateWithoutFreelancerInput> | Prisma.servicesCreateWithoutFreelancerInput[] | Prisma.servicesUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutFreelancerInput | Prisma.servicesCreateOrConnectWithoutFreelancerInput[];
    upsert?: Prisma.servicesUpsertWithWhereUniqueWithoutFreelancerInput | Prisma.servicesUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: Prisma.servicesCreateManyFreelancerInputEnvelope;
    set?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    disconnect?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    delete?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    connect?: Prisma.servicesWhereUniqueInput | Prisma.servicesWhereUniqueInput[];
    update?: Prisma.servicesUpdateWithWhereUniqueWithoutFreelancerInput | Prisma.servicesUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: Prisma.servicesUpdateManyWithWhereWithoutFreelancerInput | Prisma.servicesUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: Prisma.servicesScalarWhereInput | Prisma.servicesScalarWhereInput[];
};
export type Enumpricing_typeFieldUpdateOperationsInput = {
    set?: $Enums.pricing_type;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type servicesCreateWithoutFreelancerInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    pricing_type: $Enums.pricing_type;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days: number;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: number;
    created_at?: Date | string;
};
export type servicesUncheckedCreateWithoutFreelancerInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    pricing_type: $Enums.pricing_type;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days: number;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: number;
    created_at?: Date | string;
};
export type servicesCreateOrConnectWithoutFreelancerInput = {
    where: Prisma.servicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.servicesCreateWithoutFreelancerInput, Prisma.servicesUncheckedCreateWithoutFreelancerInput>;
};
export type servicesCreateManyFreelancerInputEnvelope = {
    data: Prisma.servicesCreateManyFreelancerInput | Prisma.servicesCreateManyFreelancerInput[];
    skipDuplicates?: boolean;
};
export type servicesUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: Prisma.servicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.servicesUpdateWithoutFreelancerInput, Prisma.servicesUncheckedUpdateWithoutFreelancerInput>;
    create: Prisma.XOR<Prisma.servicesCreateWithoutFreelancerInput, Prisma.servicesUncheckedCreateWithoutFreelancerInput>;
};
export type servicesUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: Prisma.servicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.servicesUpdateWithoutFreelancerInput, Prisma.servicesUncheckedUpdateWithoutFreelancerInput>;
};
export type servicesUpdateManyWithWhereWithoutFreelancerInput = {
    where: Prisma.servicesScalarWhereInput;
    data: Prisma.XOR<Prisma.servicesUpdateManyMutationInput, Prisma.servicesUncheckedUpdateManyWithoutFreelancerInput>;
};
export type servicesScalarWhereInput = {
    AND?: Prisma.servicesScalarWhereInput | Prisma.servicesScalarWhereInput[];
    OR?: Prisma.servicesScalarWhereInput[];
    NOT?: Prisma.servicesScalarWhereInput | Prisma.servicesScalarWhereInput[];
    id?: Prisma.StringFilter<"services"> | string;
    freelancer_id?: Prisma.StringFilter<"services"> | string;
    title?: Prisma.StringFilter<"services"> | string;
    description?: Prisma.StringFilter<"services"> | string;
    category?: Prisma.StringFilter<"services"> | string;
    pricing_type?: Prisma.Enumpricing_typeFilter<"services"> | $Enums.pricing_type;
    price?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFilter<"services"> | number;
    rating?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFilter<"services"> | number;
    created_at?: Prisma.DateTimeFilter<"services"> | Date | string;
};
export type servicesCreateManyFreelancerInput = {
    id?: string;
    title: string;
    description: string;
    category: string;
    pricing_type: $Enums.pricing_type;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days: number;
    rating?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: number;
    created_at?: Date | string;
};
export type servicesUpdateWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type servicesUncheckedUpdateWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type servicesUncheckedUpdateManyWithoutFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    delivery_days?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type servicesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    freelancer_id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    pricing_type?: boolean;
    price?: boolean;
    delivery_days?: boolean;
    rating?: boolean;
    total_reviews?: boolean;
    created_at?: boolean;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["services"]>;
export type servicesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    freelancer_id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    pricing_type?: boolean;
    price?: boolean;
    delivery_days?: boolean;
    rating?: boolean;
    total_reviews?: boolean;
    created_at?: boolean;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["services"]>;
export type servicesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    freelancer_id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    pricing_type?: boolean;
    price?: boolean;
    delivery_days?: boolean;
    rating?: boolean;
    total_reviews?: boolean;
    created_at?: boolean;
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["services"]>;
export type servicesSelectScalar = {
    id?: boolean;
    freelancer_id?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    pricing_type?: boolean;
    price?: boolean;
    delivery_days?: boolean;
    rating?: boolean;
    total_reviews?: boolean;
    created_at?: boolean;
};
export type servicesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "freelancer_id" | "title" | "description" | "category" | "pricing_type" | "price" | "delivery_days" | "rating" | "total_reviews" | "created_at", ExtArgs["result"]["services"]>;
export type servicesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type servicesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type servicesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    freelancer?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $servicesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "services";
    objects: {
        freelancer: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        freelancer_id: string;
        title: string;
        description: string;
        category: string;
        pricing_type: $Enums.pricing_type;
        price: runtime.Decimal;
        delivery_days: number;
        rating: runtime.Decimal;
        total_reviews: number;
        created_at: Date;
    }, ExtArgs["result"]["services"]>;
    composites: {};
};
export type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$servicesPayload, S>;
export type servicesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServicesCountAggregateInputType | true;
};
export interface servicesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['services'];
        meta: {
            name: 'services';
        };
    };
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicesFindUniqueArgs>(args: Prisma.SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicesFindFirstArgs>(args?: Prisma.SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     *
     */
    findMany<T extends servicesFindManyArgs>(args?: Prisma.SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     *
     */
    create<T extends servicesCreateArgs>(args: Prisma.SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Services.
     * @param {servicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends servicesCreateManyArgs>(args?: Prisma.SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Services and returns the data saved in the database.
     * @param {servicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     *
     */
    delete<T extends servicesDeleteArgs>(args: Prisma.SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends servicesUpdateArgs>(args: Prisma.SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends servicesDeleteManyArgs>(args?: Prisma.SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends servicesUpdateManyArgs>(args: Prisma.SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {servicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
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
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends servicesUpsertArgs>(args: Prisma.SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(args?: Prisma.Subset<T, servicesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServicesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Prisma.Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>;
    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends servicesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: servicesGroupByArgs['orderBy'];
    } : {
        orderBy?: servicesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the services model
     */
    readonly fields: servicesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for services.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__servicesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the services model
 */
export interface servicesFieldRefs {
    readonly id: Prisma.FieldRef<"services", 'String'>;
    readonly freelancer_id: Prisma.FieldRef<"services", 'String'>;
    readonly title: Prisma.FieldRef<"services", 'String'>;
    readonly description: Prisma.FieldRef<"services", 'String'>;
    readonly category: Prisma.FieldRef<"services", 'String'>;
    readonly pricing_type: Prisma.FieldRef<"services", 'pricing_type'>;
    readonly price: Prisma.FieldRef<"services", 'Decimal'>;
    readonly delivery_days: Prisma.FieldRef<"services", 'Int'>;
    readonly rating: Prisma.FieldRef<"services", 'Decimal'>;
    readonly total_reviews: Prisma.FieldRef<"services", 'Int'>;
    readonly created_at: Prisma.FieldRef<"services", 'DateTime'>;
}
/**
 * services findUnique
 */
export type servicesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * Filter, which services to fetch.
     */
    where: Prisma.servicesWhereUniqueInput;
};
/**
 * services findUniqueOrThrow
 */
export type servicesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * Filter, which services to fetch.
     */
    where: Prisma.servicesWhereUniqueInput;
};
/**
 * services findFirst
 */
export type servicesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * Filter, which services to fetch.
     */
    where?: Prisma.servicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: Prisma.servicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: Prisma.ServicesScalarFieldEnum | Prisma.ServicesScalarFieldEnum[];
};
/**
 * services findFirstOrThrow
 */
export type servicesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * Filter, which services to fetch.
     */
    where?: Prisma.servicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: Prisma.servicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: Prisma.ServicesScalarFieldEnum | Prisma.ServicesScalarFieldEnum[];
};
/**
 * services findMany
 */
export type servicesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * Filter, which services to fetch.
     */
    where?: Prisma.servicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing services.
     */
    cursor?: Prisma.servicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: Prisma.ServicesScalarFieldEnum | Prisma.ServicesScalarFieldEnum[];
};
/**
 * services create
 */
export type servicesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * The data needed to create a services.
     */
    data: Prisma.XOR<Prisma.servicesCreateInput, Prisma.servicesUncheckedCreateInput>;
};
/**
 * services createMany
 */
export type servicesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: Prisma.servicesCreateManyInput | Prisma.servicesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * services createManyAndReturn
 */
export type servicesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * The data used to create many services.
     */
    data: Prisma.servicesCreateManyInput | Prisma.servicesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * services update
 */
export type servicesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * The data needed to update a services.
     */
    data: Prisma.XOR<Prisma.servicesUpdateInput, Prisma.servicesUncheckedUpdateInput>;
    /**
     * Choose, which services to update.
     */
    where: Prisma.servicesWhereUniqueInput;
};
/**
 * services updateMany
 */
export type servicesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: Prisma.XOR<Prisma.servicesUpdateManyMutationInput, Prisma.servicesUncheckedUpdateManyInput>;
    /**
     * Filter which services to update
     */
    where?: Prisma.servicesWhereInput;
    /**
     * Limit how many services to update.
     */
    limit?: number;
};
/**
 * services updateManyAndReturn
 */
export type servicesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * The data used to update services.
     */
    data: Prisma.XOR<Prisma.servicesUpdateManyMutationInput, Prisma.servicesUncheckedUpdateManyInput>;
    /**
     * Filter which services to update
     */
    where?: Prisma.servicesWhereInput;
    /**
     * Limit how many services to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * services upsert
 */
export type servicesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: Prisma.servicesWhereUniqueInput;
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: Prisma.XOR<Prisma.servicesCreateInput, Prisma.servicesUncheckedCreateInput>;
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.servicesUpdateInput, Prisma.servicesUncheckedUpdateInput>;
};
/**
 * services delete
 */
export type servicesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
    /**
     * Filter which services to delete.
     */
    where: Prisma.servicesWhereUniqueInput;
};
/**
 * services deleteMany
 */
export type servicesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: Prisma.servicesWhereInput;
    /**
     * Limit how many services to delete.
     */
    limit?: number;
};
/**
 * services without action
 */
export type servicesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: Prisma.servicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the services
     */
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.servicesInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=services.d.ts.map