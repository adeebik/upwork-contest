import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model users
 *
 */
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    hourly_rate: runtime.Decimal | null;
};
export type UsersSumAggregateOutputType = {
    hourly_rate: runtime.Decimal | null;
};
export type UsersMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passowrd: string | null;
    role: $Enums.role | null;
    bio: string | null;
    hourly_rate: runtime.Decimal | null;
    profile_image: string | null;
    created_at: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passowrd: string | null;
    role: $Enums.role | null;
    bio: string | null;
    hourly_rate: runtime.Decimal | null;
    profile_image: string | null;
    created_at: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    passowrd: number;
    role: number;
    bio: number;
    skills: number;
    hourly_rate: number;
    profile_image: number;
    created_at: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    hourly_rate?: true;
};
export type UsersSumAggregateInputType = {
    hourly_rate?: true;
};
export type UsersMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passowrd?: true;
    role?: true;
    bio?: true;
    hourly_rate?: true;
    profile_image?: true;
    created_at?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passowrd?: true;
    role?: true;
    bio?: true;
    hourly_rate?: true;
    profile_image?: true;
    created_at?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passowrd?: true;
    role?: true;
    bio?: true;
    skills?: true;
    hourly_rate?: true;
    profile_image?: true;
    created_at?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio: string | null;
    skills: runtime.JsonValue;
    hourly_rate: runtime.Decimal | null;
    profile_image: string | null;
    created_at: Date;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    id?: Prisma.StringFilter<"users"> | string;
    name?: Prisma.StringFilter<"users"> | string;
    email?: Prisma.StringFilter<"users"> | string;
    passowrd?: Prisma.StringFilter<"users"> | string;
    role?: Prisma.EnumroleFilter<"users"> | $Enums.role;
    bio?: Prisma.StringNullableFilter<"users"> | string | null;
    skills?: Prisma.JsonFilter<"users">;
    hourly_rate?: Prisma.DecimalNullableFilter<"users"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    freelance_services?: Prisma.ServicesListRelationFilter;
    client_projects?: Prisma.ProjectsListRelationFilter;
    freelance_proposals?: Prisma.ProposalsListRelationFilter;
    freelance_contract?: Prisma.ContractsListRelationFilter;
    client_contract?: Prisma.ContractsListRelationFilter;
    reviewer?: Prisma.ReviewsListRelationFilter;
    reviewee?: Prisma.ReviewsListRelationFilter;
};
export type usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passowrd?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    profile_image?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    freelance_services?: Prisma.servicesOrderByRelationAggregateInput;
    client_projects?: Prisma.projectsOrderByRelationAggregateInput;
    freelance_proposals?: Prisma.proposalsOrderByRelationAggregateInput;
    freelance_contract?: Prisma.contractsOrderByRelationAggregateInput;
    client_contract?: Prisma.contractsOrderByRelationAggregateInput;
    reviewer?: Prisma.reviewsOrderByRelationAggregateInput;
    reviewee?: Prisma.reviewsOrderByRelationAggregateInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    name?: Prisma.StringFilter<"users"> | string;
    passowrd?: Prisma.StringFilter<"users"> | string;
    role?: Prisma.EnumroleFilter<"users"> | $Enums.role;
    bio?: Prisma.StringNullableFilter<"users"> | string | null;
    skills?: Prisma.JsonFilter<"users">;
    hourly_rate?: Prisma.DecimalNullableFilter<"users"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    freelance_services?: Prisma.ServicesListRelationFilter;
    client_projects?: Prisma.ProjectsListRelationFilter;
    freelance_proposals?: Prisma.ProposalsListRelationFilter;
    freelance_contract?: Prisma.ContractsListRelationFilter;
    client_contract?: Prisma.ContractsListRelationFilter;
    reviewer?: Prisma.ReviewsListRelationFilter;
    reviewee?: Prisma.ReviewsListRelationFilter;
}, "id" | "email">;
export type usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passowrd?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    profile_image?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"users"> | string;
    name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    email?: Prisma.StringWithAggregatesFilter<"users"> | string;
    passowrd?: Prisma.StringWithAggregatesFilter<"users"> | string;
    role?: Prisma.EnumroleWithAggregatesFilter<"users"> | $Enums.role;
    bio?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    skills?: Prisma.JsonWithAggregatesFilter<"users">;
    hourly_rate?: Prisma.DecimalNullableWithAggregatesFilter<"users"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
};
export type usersCreateInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsCreateNestedManyWithoutRevieweeInput;
};
export type usersUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesUncheckedCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsUncheckedCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsUncheckedCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsUncheckedCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsUncheckedCreateNestedManyWithoutRevieweeInput;
};
export type usersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUpdateManyWithoutRevieweeNestedInput;
};
export type usersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUncheckedUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUncheckedUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUncheckedUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUncheckedUpdateManyWithoutRevieweeNestedInput;
};
export type usersCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
};
export type usersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passowrd?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    profile_image?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    hourly_rate?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passowrd?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    profile_image?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passowrd?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    hourly_rate?: Prisma.SortOrder;
    profile_image?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    hourly_rate?: Prisma.SortOrder;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type usersCreateNestedOneWithoutFreelance_servicesInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutFreelance_servicesInput, Prisma.usersUncheckedCreateWithoutFreelance_servicesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutFreelance_servicesInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutFreelance_servicesNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutFreelance_servicesInput, Prisma.usersUncheckedCreateWithoutFreelance_servicesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutFreelance_servicesInput;
    upsert?: Prisma.usersUpsertWithoutFreelance_servicesInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutFreelance_servicesInput, Prisma.usersUpdateWithoutFreelance_servicesInput>, Prisma.usersUncheckedUpdateWithoutFreelance_servicesInput>;
};
export type usersCreateNestedOneWithoutClient_projectsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutClient_projectsInput, Prisma.usersUncheckedCreateWithoutClient_projectsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutClient_projectsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutClient_projectsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutClient_projectsInput, Prisma.usersUncheckedCreateWithoutClient_projectsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutClient_projectsInput;
    upsert?: Prisma.usersUpsertWithoutClient_projectsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutClient_projectsInput, Prisma.usersUpdateWithoutClient_projectsInput>, Prisma.usersUncheckedUpdateWithoutClient_projectsInput>;
};
export type usersCreateNestedOneWithoutFreelance_proposalsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutFreelance_proposalsInput, Prisma.usersUncheckedCreateWithoutFreelance_proposalsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutFreelance_proposalsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutFreelance_proposalsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutFreelance_proposalsInput, Prisma.usersUncheckedCreateWithoutFreelance_proposalsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutFreelance_proposalsInput;
    upsert?: Prisma.usersUpsertWithoutFreelance_proposalsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutFreelance_proposalsInput, Prisma.usersUpdateWithoutFreelance_proposalsInput>, Prisma.usersUncheckedUpdateWithoutFreelance_proposalsInput>;
};
export type usersCreateNestedOneWithoutFreelance_contractInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutFreelance_contractInput, Prisma.usersUncheckedCreateWithoutFreelance_contractInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutFreelance_contractInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersCreateNestedOneWithoutClient_contractInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutClient_contractInput, Prisma.usersUncheckedCreateWithoutClient_contractInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutClient_contractInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutFreelance_contractNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutFreelance_contractInput, Prisma.usersUncheckedCreateWithoutFreelance_contractInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutFreelance_contractInput;
    upsert?: Prisma.usersUpsertWithoutFreelance_contractInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutFreelance_contractInput, Prisma.usersUpdateWithoutFreelance_contractInput>, Prisma.usersUncheckedUpdateWithoutFreelance_contractInput>;
};
export type usersUpdateOneRequiredWithoutClient_contractNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutClient_contractInput, Prisma.usersUncheckedCreateWithoutClient_contractInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutClient_contractInput;
    upsert?: Prisma.usersUpsertWithoutClient_contractInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutClient_contractInput, Prisma.usersUpdateWithoutClient_contractInput>, Prisma.usersUncheckedUpdateWithoutClient_contractInput>;
};
export type usersCreateNestedOneWithoutReviewerInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutReviewerInput, Prisma.usersUncheckedCreateWithoutReviewerInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutReviewerInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersCreateNestedOneWithoutRevieweeInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutRevieweeInput, Prisma.usersUncheckedCreateWithoutRevieweeInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutRevieweeInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutReviewerNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutReviewerInput, Prisma.usersUncheckedCreateWithoutReviewerInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutReviewerInput;
    upsert?: Prisma.usersUpsertWithoutReviewerInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutReviewerInput, Prisma.usersUpdateWithoutReviewerInput>, Prisma.usersUncheckedUpdateWithoutReviewerInput>;
};
export type usersUpdateOneRequiredWithoutRevieweeNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutRevieweeInput, Prisma.usersUncheckedCreateWithoutRevieweeInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutRevieweeInput;
    upsert?: Prisma.usersUpsertWithoutRevieweeInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutRevieweeInput, Prisma.usersUpdateWithoutRevieweeInput>, Prisma.usersUncheckedUpdateWithoutRevieweeInput>;
};
export type usersCreateWithoutFreelance_servicesInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    client_projects?: Prisma.projectsCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsCreateNestedManyWithoutRevieweeInput;
};
export type usersUncheckedCreateWithoutFreelance_servicesInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    client_projects?: Prisma.projectsUncheckedCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsUncheckedCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsUncheckedCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsUncheckedCreateNestedManyWithoutRevieweeInput;
};
export type usersCreateOrConnectWithoutFreelance_servicesInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutFreelance_servicesInput, Prisma.usersUncheckedCreateWithoutFreelance_servicesInput>;
};
export type usersUpsertWithoutFreelance_servicesInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutFreelance_servicesInput, Prisma.usersUncheckedUpdateWithoutFreelance_servicesInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutFreelance_servicesInput, Prisma.usersUncheckedCreateWithoutFreelance_servicesInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutFreelance_servicesInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutFreelance_servicesInput, Prisma.usersUncheckedUpdateWithoutFreelance_servicesInput>;
};
export type usersUpdateWithoutFreelance_servicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client_projects?: Prisma.projectsUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUpdateManyWithoutRevieweeNestedInput;
};
export type usersUncheckedUpdateWithoutFreelance_servicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client_projects?: Prisma.projectsUncheckedUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUncheckedUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUncheckedUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUncheckedUpdateManyWithoutRevieweeNestedInput;
};
export type usersCreateWithoutClient_projectsInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesCreateNestedManyWithoutFreelancerInput;
    freelance_proposals?: Prisma.proposalsCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsCreateNestedManyWithoutRevieweeInput;
};
export type usersUncheckedCreateWithoutClient_projectsInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesUncheckedCreateNestedManyWithoutFreelancerInput;
    freelance_proposals?: Prisma.proposalsUncheckedCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsUncheckedCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsUncheckedCreateNestedManyWithoutRevieweeInput;
};
export type usersCreateOrConnectWithoutClient_projectsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutClient_projectsInput, Prisma.usersUncheckedCreateWithoutClient_projectsInput>;
};
export type usersUpsertWithoutClient_projectsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutClient_projectsInput, Prisma.usersUncheckedUpdateWithoutClient_projectsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutClient_projectsInput, Prisma.usersUncheckedCreateWithoutClient_projectsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutClient_projectsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutClient_projectsInput, Prisma.usersUncheckedUpdateWithoutClient_projectsInput>;
};
export type usersUpdateWithoutClient_projectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUpdateManyWithoutFreelancerNestedInput;
    freelance_proposals?: Prisma.proposalsUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUpdateManyWithoutRevieweeNestedInput;
};
export type usersUncheckedUpdateWithoutClient_projectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUncheckedUpdateManyWithoutFreelancerNestedInput;
    freelance_proposals?: Prisma.proposalsUncheckedUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUncheckedUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUncheckedUpdateManyWithoutRevieweeNestedInput;
};
export type usersCreateWithoutFreelance_proposalsInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsCreateNestedManyWithoutClientsInput;
    freelance_contract?: Prisma.contractsCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsCreateNestedManyWithoutRevieweeInput;
};
export type usersUncheckedCreateWithoutFreelance_proposalsInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesUncheckedCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsUncheckedCreateNestedManyWithoutClientsInput;
    freelance_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsUncheckedCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsUncheckedCreateNestedManyWithoutRevieweeInput;
};
export type usersCreateOrConnectWithoutFreelance_proposalsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutFreelance_proposalsInput, Prisma.usersUncheckedCreateWithoutFreelance_proposalsInput>;
};
export type usersUpsertWithoutFreelance_proposalsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutFreelance_proposalsInput, Prisma.usersUncheckedUpdateWithoutFreelance_proposalsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutFreelance_proposalsInput, Prisma.usersUncheckedCreateWithoutFreelance_proposalsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutFreelance_proposalsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutFreelance_proposalsInput, Prisma.usersUncheckedUpdateWithoutFreelance_proposalsInput>;
};
export type usersUpdateWithoutFreelance_proposalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUpdateManyWithoutClientsNestedInput;
    freelance_contract?: Prisma.contractsUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUpdateManyWithoutRevieweeNestedInput;
};
export type usersUncheckedUpdateWithoutFreelance_proposalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUncheckedUpdateManyWithoutClientsNestedInput;
    freelance_contract?: Prisma.contractsUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUncheckedUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUncheckedUpdateManyWithoutRevieweeNestedInput;
};
export type usersCreateWithoutFreelance_contractInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsCreateNestedManyWithoutRevieweeInput;
};
export type usersUncheckedCreateWithoutFreelance_contractInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesUncheckedCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsUncheckedCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsUncheckedCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsUncheckedCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsUncheckedCreateNestedManyWithoutRevieweeInput;
};
export type usersCreateOrConnectWithoutFreelance_contractInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutFreelance_contractInput, Prisma.usersUncheckedCreateWithoutFreelance_contractInput>;
};
export type usersCreateWithoutClient_contractInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsCreateNestedManyWithoutFreelancerInput;
    reviewer?: Prisma.reviewsCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsCreateNestedManyWithoutRevieweeInput;
};
export type usersUncheckedCreateWithoutClient_contractInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesUncheckedCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsUncheckedCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsUncheckedCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewer?: Prisma.reviewsUncheckedCreateNestedManyWithoutReviewerInput;
    reviewee?: Prisma.reviewsUncheckedCreateNestedManyWithoutRevieweeInput;
};
export type usersCreateOrConnectWithoutClient_contractInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutClient_contractInput, Prisma.usersUncheckedCreateWithoutClient_contractInput>;
};
export type usersUpsertWithoutFreelance_contractInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutFreelance_contractInput, Prisma.usersUncheckedUpdateWithoutFreelance_contractInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutFreelance_contractInput, Prisma.usersUncheckedCreateWithoutFreelance_contractInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutFreelance_contractInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutFreelance_contractInput, Prisma.usersUncheckedUpdateWithoutFreelance_contractInput>;
};
export type usersUpdateWithoutFreelance_contractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUpdateManyWithoutRevieweeNestedInput;
};
export type usersUncheckedUpdateWithoutFreelance_contractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUncheckedUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUncheckedUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUncheckedUpdateManyWithoutRevieweeNestedInput;
};
export type usersUpsertWithoutClient_contractInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutClient_contractInput, Prisma.usersUncheckedUpdateWithoutClient_contractInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutClient_contractInput, Prisma.usersUncheckedCreateWithoutClient_contractInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutClient_contractInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutClient_contractInput, Prisma.usersUncheckedUpdateWithoutClient_contractInput>;
};
export type usersUpdateWithoutClient_contractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUpdateManyWithoutFreelancerNestedInput;
    reviewer?: Prisma.reviewsUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUpdateManyWithoutRevieweeNestedInput;
};
export type usersUncheckedUpdateWithoutClient_contractInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUncheckedUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUncheckedUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewer?: Prisma.reviewsUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewee?: Prisma.reviewsUncheckedUpdateManyWithoutRevieweeNestedInput;
};
export type usersCreateWithoutReviewerInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsCreateNestedManyWithoutClientInput;
    reviewee?: Prisma.reviewsCreateNestedManyWithoutRevieweeInput;
};
export type usersUncheckedCreateWithoutReviewerInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesUncheckedCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsUncheckedCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsUncheckedCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutClientInput;
    reviewee?: Prisma.reviewsUncheckedCreateNestedManyWithoutRevieweeInput;
};
export type usersCreateOrConnectWithoutReviewerInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutReviewerInput, Prisma.usersUncheckedCreateWithoutReviewerInput>;
};
export type usersCreateWithoutRevieweeInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsCreateNestedManyWithoutReviewerInput;
};
export type usersUncheckedCreateWithoutRevieweeInput = {
    id?: string;
    name: string;
    email: string;
    passowrd: string;
    role: $Enums.role;
    bio?: string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: string | null;
    created_at?: Date | string;
    freelance_services?: Prisma.servicesUncheckedCreateNestedManyWithoutFreelancerInput;
    client_projects?: Prisma.projectsUncheckedCreateNestedManyWithoutClientsInput;
    freelance_proposals?: Prisma.proposalsUncheckedCreateNestedManyWithoutFreelancerInput;
    freelance_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutFreelancerInput;
    client_contract?: Prisma.contractsUncheckedCreateNestedManyWithoutClientInput;
    reviewer?: Prisma.reviewsUncheckedCreateNestedManyWithoutReviewerInput;
};
export type usersCreateOrConnectWithoutRevieweeInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutRevieweeInput, Prisma.usersUncheckedCreateWithoutRevieweeInput>;
};
export type usersUpsertWithoutReviewerInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutReviewerInput, Prisma.usersUncheckedUpdateWithoutReviewerInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutReviewerInput, Prisma.usersUncheckedCreateWithoutReviewerInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutReviewerInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutReviewerInput, Prisma.usersUncheckedUpdateWithoutReviewerInput>;
};
export type usersUpdateWithoutReviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUpdateManyWithoutClientNestedInput;
    reviewee?: Prisma.reviewsUpdateManyWithoutRevieweeNestedInput;
};
export type usersUncheckedUpdateWithoutReviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUncheckedUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUncheckedUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUncheckedUpdateManyWithoutClientNestedInput;
    reviewee?: Prisma.reviewsUncheckedUpdateManyWithoutRevieweeNestedInput;
};
export type usersUpsertWithoutRevieweeInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutRevieweeInput, Prisma.usersUncheckedUpdateWithoutRevieweeInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutRevieweeInput, Prisma.usersUncheckedCreateWithoutRevieweeInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutRevieweeInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutRevieweeInput, Prisma.usersUncheckedUpdateWithoutRevieweeInput>;
};
export type usersUpdateWithoutRevieweeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUpdateManyWithoutReviewerNestedInput;
};
export type usersUncheckedUpdateWithoutRevieweeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passowrd?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumroleFieldUpdateOperationsInput | $Enums.role;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    hourly_rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    profile_image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    freelance_services?: Prisma.servicesUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_projects?: Prisma.projectsUncheckedUpdateManyWithoutClientsNestedInput;
    freelance_proposals?: Prisma.proposalsUncheckedUpdateManyWithoutFreelancerNestedInput;
    freelance_contract?: Prisma.contractsUncheckedUpdateManyWithoutFreelancerNestedInput;
    client_contract?: Prisma.contractsUncheckedUpdateManyWithoutClientNestedInput;
    reviewer?: Prisma.reviewsUncheckedUpdateManyWithoutReviewerNestedInput;
};
/**
 * Count Type UsersCountOutputType
 */
export type UsersCountOutputType = {
    freelance_services: number;
    client_projects: number;
    freelance_proposals: number;
    freelance_contract: number;
    client_contract: number;
    reviewer: number;
    reviewee: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    freelance_services?: boolean | UsersCountOutputTypeCountFreelance_servicesArgs;
    client_projects?: boolean | UsersCountOutputTypeCountClient_projectsArgs;
    freelance_proposals?: boolean | UsersCountOutputTypeCountFreelance_proposalsArgs;
    freelance_contract?: boolean | UsersCountOutputTypeCountFreelance_contractArgs;
    client_contract?: boolean | UsersCountOutputTypeCountClient_contractArgs;
    reviewer?: boolean | UsersCountOutputTypeCountReviewerArgs;
    reviewee?: boolean | UsersCountOutputTypeCountRevieweeArgs;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountFreelance_servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.servicesWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountClient_projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.projectsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountFreelance_proposalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.proposalsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountFreelance_contractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountClient_contractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contractsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountReviewerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountRevieweeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passowrd?: boolean;
    role?: boolean;
    bio?: boolean;
    skills?: boolean;
    hourly_rate?: boolean;
    profile_image?: boolean;
    created_at?: boolean;
    freelance_services?: boolean | Prisma.users$freelance_servicesArgs<ExtArgs>;
    client_projects?: boolean | Prisma.users$client_projectsArgs<ExtArgs>;
    freelance_proposals?: boolean | Prisma.users$freelance_proposalsArgs<ExtArgs>;
    freelance_contract?: boolean | Prisma.users$freelance_contractArgs<ExtArgs>;
    client_contract?: boolean | Prisma.users$client_contractArgs<ExtArgs>;
    reviewer?: boolean | Prisma.users$reviewerArgs<ExtArgs>;
    reviewee?: boolean | Prisma.users$revieweeArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passowrd?: boolean;
    role?: boolean;
    bio?: boolean;
    skills?: boolean;
    hourly_rate?: boolean;
    profile_image?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passowrd?: boolean;
    role?: boolean;
    bio?: boolean;
    skills?: boolean;
    hourly_rate?: boolean;
    profile_image?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passowrd?: boolean;
    role?: boolean;
    bio?: boolean;
    skills?: boolean;
    hourly_rate?: boolean;
    profile_image?: boolean;
    created_at?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "passowrd" | "role" | "bio" | "skills" | "hourly_rate" | "profile_image" | "created_at", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    freelance_services?: boolean | Prisma.users$freelance_servicesArgs<ExtArgs>;
    client_projects?: boolean | Prisma.users$client_projectsArgs<ExtArgs>;
    freelance_proposals?: boolean | Prisma.users$freelance_proposalsArgs<ExtArgs>;
    freelance_contract?: boolean | Prisma.users$freelance_contractArgs<ExtArgs>;
    client_contract?: boolean | Prisma.users$client_contractArgs<ExtArgs>;
    reviewer?: boolean | Prisma.users$reviewerArgs<ExtArgs>;
    reviewee?: boolean | Prisma.users$revieweeArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        freelance_services: Prisma.$servicesPayload<ExtArgs>[];
        client_projects: Prisma.$projectsPayload<ExtArgs>[];
        freelance_proposals: Prisma.$proposalsPayload<ExtArgs>[];
        freelance_contract: Prisma.$contractsPayload<ExtArgs>[];
        client_contract: Prisma.$contractsPayload<ExtArgs>[];
        reviewer: Prisma.$reviewsPayload<ExtArgs>[];
        reviewee: Prisma.$reviewsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        passowrd: string;
        role: $Enums.role;
        bio: string | null;
        skills: runtime.JsonValue;
        hourly_rate: runtime.Decimal | null;
        profile_image: string | null;
        created_at: Date;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     */
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the users model
     */
    readonly fields: usersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for users.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    freelance_services<T extends Prisma.users$freelance_servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$freelance_servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    client_projects<T extends Prisma.users$client_projectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$client_projectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    freelance_proposals<T extends Prisma.users$freelance_proposalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$freelance_proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proposalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    freelance_contract<T extends Prisma.users$freelance_contractArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$freelance_contractArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    client_contract<T extends Prisma.users$client_contractArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$client_contractArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviewer<T extends Prisma.users$reviewerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$reviewerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviewee<T extends Prisma.users$revieweeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$revieweeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the users model
 */
export interface usersFieldRefs {
    readonly id: Prisma.FieldRef<"users", 'String'>;
    readonly name: Prisma.FieldRef<"users", 'String'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly passowrd: Prisma.FieldRef<"users", 'String'>;
    readonly role: Prisma.FieldRef<"users", 'role'>;
    readonly bio: Prisma.FieldRef<"users", 'String'>;
    readonly skills: Prisma.FieldRef<"users", 'Json'>;
    readonly hourly_rate: Prisma.FieldRef<"users", 'Decimal'>;
    readonly profile_image: Prisma.FieldRef<"users", 'String'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
}
/**
 * users findUnique
 */
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users findUniqueOrThrow
 */
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users findFirst
 */
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users findFirstOrThrow
 */
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users findMany
 */
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users create
 */
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The data needed to create a users.
     */
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
/**
 * users createMany
 */
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * users createManyAndReturn
 */
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * The data used to create many users.
     */
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * users update
 */
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The data needed to update a users.
     */
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    /**
     * Choose, which users to update.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users updateMany
 */
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
};
/**
 * users updateManyAndReturn
 */
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * The data used to update users.
     */
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
};
/**
 * users upsert
 */
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: Prisma.usersWhereUniqueInput;
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
/**
 * users delete
 */
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter which users to delete.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users deleteMany
 */
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
};
/**
 * users.freelance_services
 */
export type users$freelance_servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.servicesWhereInput;
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    cursor?: Prisma.servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicesScalarFieldEnum | Prisma.ServicesScalarFieldEnum[];
};
/**
 * users.client_projects
 */
export type users$client_projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: Prisma.projectsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the projects
     */
    omit?: Prisma.projectsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.projectsInclude<ExtArgs> | null;
    where?: Prisma.projectsWhereInput;
    orderBy?: Prisma.projectsOrderByWithRelationInput | Prisma.projectsOrderByWithRelationInput[];
    cursor?: Prisma.projectsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectsScalarFieldEnum | Prisma.ProjectsScalarFieldEnum[];
};
/**
 * users.freelance_proposals
 */
export type users$freelance_proposalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.proposalsWhereInput;
    orderBy?: Prisma.proposalsOrderByWithRelationInput | Prisma.proposalsOrderByWithRelationInput[];
    cursor?: Prisma.proposalsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProposalsScalarFieldEnum | Prisma.ProposalsScalarFieldEnum[];
};
/**
 * users.freelance_contract
 */
export type users$freelance_contractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.contractsWhereInput;
    orderBy?: Prisma.contractsOrderByWithRelationInput | Prisma.contractsOrderByWithRelationInput[];
    cursor?: Prisma.contractsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractsScalarFieldEnum | Prisma.ContractsScalarFieldEnum[];
};
/**
 * users.client_contract
 */
export type users$client_contractArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.contractsWhereInput;
    orderBy?: Prisma.contractsOrderByWithRelationInput | Prisma.contractsOrderByWithRelationInput[];
    cursor?: Prisma.contractsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContractsScalarFieldEnum | Prisma.ContractsScalarFieldEnum[];
};
/**
 * users.reviewer
 */
export type users$reviewerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * users.reviewee
 */
export type users$revieweeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * users without action
 */
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=users.d.ts.map