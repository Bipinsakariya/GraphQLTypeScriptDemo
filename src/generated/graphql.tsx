import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddPaymentMethodDto = {
  cardToken: Scalars['String'];
  cardName: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  postal_code: Scalars['String'];
  state: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  is_deleted: Scalars['Boolean'];
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  showSegments?: Maybe<Array<ShowSegment>>;
  userBrandRoles?: Maybe<Array<UserBrandRole>>;
  ownerUser: User;
};

export type CancelOrderOutputDto = {
  __typename?: 'CancelOrderOutputDto';
  msg: Scalars['String'];
};

export type CardDetailsDto = {
  __typename?: 'CardDetailsDto';
  id: Scalars['String'];
  expMonth: Scalars['String'];
  expYear: Scalars['String'];
  dynamicLast4?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  last4: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type CheckOutOrderDto = {
  showSegmentId: Scalars['String'];
  qty?: Maybe<Scalars['Float']>;
  paymentMethodId?: Maybe<Scalars['String']>;
  addressId?: Maybe<Scalars['String']>;
  skuId?: Maybe<Scalars['String']>;
};

export type CheckoutOrderOutputDto = {
  __typename?: 'CheckoutOrderOutputDto';
  id: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  user: User;
  chargeId: Scalars['String'];
};

export type ConsumerLead = {
  __typename?: 'ConsumerLead';
  id: Scalars['String'];
  email: Scalars['String'];
  submitted_timestamp: Scalars['DateTime'];
};

export type CreateAddressDto = {
  userId: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type CreateBrandDto = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type CreateLineItemsDto = {
  orderId: Scalars['String'];
  skuId: Scalars['String'];
  unitPrice: Scalars['Float'];
  qty: Scalars['Float'];
};

export type CreateOrderDto = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type CreateProductDto = {
  showSegmentId?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Scalars['String'];
  variantData: CreateVariantDto;
};

export type CreateShowDto = {
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
};

export type CreateShowSegmentDto = {
  showId: Scalars['String'];
  brandId: Scalars['String'];
  title: Scalars['String'];
  productsIds: Array<Scalars['String']>;
};

export type CreateShowWithSegmentDto = {
  brandId: Scalars['String'];
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  showSegment: ShowSegmentDto;
};

export type CreateShowYourStyleEntryDto = {
  videoId: Scalars['String'];
};

export type CreateSkuDto = {
  variantId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  COGS: Scalars['String'];
  friendlyName: Scalars['String'];
  stock: Scalars['Float'];
  unitPrice: Scalars['Float'];
};

export type CreateUserBrandRoleDto = {
  brandId: Scalars['String'];
  userId: Scalars['String'];
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
  admin: Scalars['Boolean'];
};

export type CreateUserShowRoleDto = {
  showId: Scalars['String'];
  userId: Scalars['String'];
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
  admin: Scalars['Boolean'];
  streamTo: Scalars['Boolean'];
};

export type CreateVariantDto = {
  productId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Scalars['String'];
  skuData: CreateSkuDto;
};


export type DeactivateShowYourStyleEntryDto = {
  videoId: Scalars['String'];
};

export type DefaultAddressOutputDto = {
  __typename?: 'DefaultAddressOutputDto';
  msg: Scalars['String'];
};

export type DefaultPaymentMethodOutputDto = {
  __typename?: 'DefaultPaymentMethodOutputDto';
  msg: Scalars['String'];
};

export type DeleteAddessOutputDto = {
  __typename?: 'DeleteAddessOutputDto';
  msg: Scalars['String'];
};

export type DeletePaymentMethodOutputDto = {
  __typename?: 'DeletePaymentMethodOutputDto';
  msg: Scalars['String'];
};

export type GetPaymentMethodOutputDto = {
  __typename?: 'GetPaymentMethodOutputDto';
  id: Scalars['String'];
  card: CardDetailsDto;
  timestamp: Scalars['DateTime'];
  isDeleted: Scalars['Boolean'];
  paymentMethodId: Scalars['String'];
  cardName?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type LineItem = {
  __typename?: 'LineItem';
  id: Scalars['String'];
  unitPrice: Scalars['Float'];
  qty: Scalars['Float'];
  order: Order;
  sku: Sku;
  brand: Brand;
  showSegment: ShowSegment;
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
  id: Scalars['String'];
  timestamp: Scalars['DateTime'];
  message: Scalars['String'];
  alias: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress: Address;
  deleteAddress: DeleteAddessOutputDto;
  addDefaultAddress: DefaultAddressOutputDto;
  addBrand: Brand;
  updateBrand: Brand;
  addConsumerLead: ConsumerLead;
  add_message: MessageEntity;
  addLineItems: LineItem;
  updateLineItems: LineItem;
  addOrder: Order;
  updateOrder: Order;
  checkOutOrder: CheckoutOrderOutputDto;
  cancelOrder: CancelOrderOutputDto;
  addProduct: Product;
  update_product: Product;
  addVariant: Variant;
  updateVariant: Variant;
  addSku: Sku;
  updateSku: Sku;
  add_payment: Payment;
  addShow: Show;
  addShowWithSegment: Show;
  create_or_update_show_stream: Show;
  updateShow: Show;
  addShowSegment: ShowSegment;
  updateShowSegment: ShowSegment;
  addShowYourStyleEntry: ShowYourStyleEntry;
  deactivateVideo: ShowYourStyleEntry;
  addShowYourStyleVote: ShowYourStyleVote;
  addShowYourStyleViewRecord: ShowYourStyleViewRecord;
  add_user: Scalars['String'];
  update_user: User;
  add_userbrandrole: UserBrandRole;
  update_userbrandrole: UserBrandRole;
  add_usershowrole: UserShowRole;
  update_usershowrole: UserShowRole;
  addPaymentMethod: GetPaymentMethodOutputDto;
  deletePaymentMethod: DeletePaymentMethodOutputDto;
  setDefaultPaymentMethod: DefaultPaymentMethodOutputDto;
};


export type MutationAddAddressArgs = {
  data: CreateAddressDto;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['String'];
};


export type MutationAddDefaultAddressArgs = {
  id: Scalars['String'];
};


export type MutationAddBrandArgs = {
  data: CreateBrandDto;
};


export type MutationUpdateBrandArgs = {
  data: UpdateBrandDto;
};


export type MutationAddConsumerLeadArgs = {
  email: Scalars['String'];
};


export type MutationAdd_MessageArgs = {
  message: Scalars['String'];
  showId: Scalars['String'];
};


export type MutationAddLineItemsArgs = {
  data: CreateLineItemsDto;
};


export type MutationUpdateLineItemsArgs = {
  data: UpdateLineItemsDto;
};


export type MutationAddOrderArgs = {
  data: CreateOrderDto;
};


export type MutationUpdateOrderArgs = {
  data: UpdateorderDto;
};


export type MutationCheckOutOrderArgs = {
  data: CheckOutOrderDto;
};


export type MutationCancelOrderArgs = {
  id: Scalars['String'];
};


export type MutationAddProductArgs = {
  data: CreateProductDto;
};


export type MutationUpdate_ProductArgs = {
  data: UpdateProductDto;
};


export type MutationAddVariantArgs = {
  data: CreateVariantDto;
};


export type MutationUpdateVariantArgs = {
  data: UpdateVariantDto;
};


export type MutationAddSkuArgs = {
  data: CreateSkuDto;
};


export type MutationUpdateSkuArgs = {
  data: UpdateSkuDto;
};


export type MutationAdd_PaymentArgs = {
  quantity: Scalars['String'];
  productId: Scalars['String'];
};


export type MutationAddShowArgs = {
  data: CreateShowDto;
};


export type MutationAddShowWithSegmentArgs = {
  data: CreateShowWithSegmentDto;
};


export type MutationCreate_Or_Update_Show_StreamArgs = {
  id: Scalars['String'];
};


export type MutationUpdateShowArgs = {
  data: UpdateShowDto;
};


export type MutationAddShowSegmentArgs = {
  data: CreateShowSegmentDto;
};


export type MutationUpdateShowSegmentArgs = {
  data: UpdateShowSegmentDto;
};


export type MutationAddShowYourStyleEntryArgs = {
  data: CreateShowYourStyleEntryDto;
};


export type MutationDeactivateVideoArgs = {
  data: DeactivateShowYourStyleEntryDto;
};


export type MutationAddShowYourStyleVoteArgs = {
  entryId: Scalars['String'];
  viewDuration: Scalars['Float'];
  vote: Scalars['Float'];
};


export type MutationAddShowYourStyleViewRecordArgs = {
  entryId: Scalars['String'];
};


export type MutationAdd_UserArgs = {
  phone: Scalars['String'];
};


export type MutationUpdate_UserArgs = {
  file?: Maybe<Scalars['Upload']>;
  user: UpdateUserEntityDto;
};


export type MutationAdd_UserbrandroleArgs = {
  data: CreateUserBrandRoleDto;
};


export type MutationUpdate_UserbrandroleArgs = {
  data: UpdateUserBrandRoleDto;
};


export type MutationAdd_UsershowroleArgs = {
  data: CreateUserShowRoleDto;
};


export type MutationUpdate_UsershowroleArgs = {
  data: UpdateUserShowRoleDto;
};


export type MutationAddPaymentMethodArgs = {
  addPaymentDetails: AddPaymentMethodDto;
};


export type MutationDeletePaymentMethodArgs = {
  id: Scalars['String'];
};


export type MutationSetDefaultPaymentMethodArgs = {
  id: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  /** the user which JWT was used to place the order */
  user: User;
  lineItems?: Maybe<Array<LineItem>>;
  refundId?: Maybe<Scalars['String']>;
  refundDate?: Maybe<Scalars['DateTime']>;
  chargeId?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
};

export type PaginationQueryDto = {
  limit: Scalars['Float'];
  offset: Scalars['Float'];
};

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['String'];
  product: Product;
  user: User;
  quantity: Scalars['Float'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['ID'];
  timestamp: Scalars['DateTime'];
  paymentMethodId: Scalars['String'];
  cardName: Scalars['String'];
  is_deleted: Scalars['Boolean'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  user: User;
  showSegments?: Maybe<Array<ShowSegment>>;
  brand?: Maybe<Brand>;
  variants?: Maybe<Array<Variant>>;
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses: Array<Address>;
  brand?: Maybe<Brand>;
  brands: Array<Brand>;
  my_brands: Array<Brand>;
  consumerLead?: Maybe<ConsumerLead>;
  consumerLeads: Array<ConsumerLead>;
  messageEntity?: Maybe<MessageEntity>;
  messageEntities: Array<MessageEntity>;
  lineItem?: Maybe<LineItem>;
  lineItems: Array<LineItem>;
  orderLineItems: Array<LineItem>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  myOrders: Array<Order>;
  brandOrders: Array<Order>;
  trackOrder: TrackOrderOutputDto;
  product?: Maybe<Product>;
  products: Array<Product>;
  myProducts: Array<Product>;
  brandProducts: Array<Product>;
  showProducts: Array<Product>;
  variant?: Maybe<Variant>;
  variants: Array<Variant>;
  brandVariants: Array<Variant>;
  sku?: Maybe<Sku>;
  skus: Array<Sku>;
  variantSkus: Array<Sku>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  show?: Maybe<Show>;
  shows: Array<Show>;
  myShows: Array<Show>;
  brandShows: Array<Show>;
  activeShows: Array<Show>;
  showSegment?: Maybe<ShowSegment>;
  showSegments: Array<ShowSegment>;
  showSegmentByBrandAndShow: Array<ShowSegment>;
  showYourStyleEntry?: Maybe<ShowYourStyleEntry>;
  getRandomShowYourStyleEntry?: Maybe<ShowYourStyleEntry>;
  showYourStyleEntries: Array<ShowYourStyleEntry>;
  showYourStyleVote?: Maybe<ShowYourStyleVote>;
  showYourStyleVotes: Array<ShowYourStyleVote>;
  showYourStyleViewRecord?: Maybe<ShowYourStyleViewRecord>;
  showYourStyleViewRecords: Array<ShowYourStyleViewRecord>;
  user?: Maybe<User>;
  users: Array<User>;
  verify_code: User;
  userbrandrole?: Maybe<UserBrandRole>;
  userbrandroles: Array<UserBrandRole>;
  my_userbrandroles: Array<UserBrandRole>;
  usershowrole?: Maybe<UserShowRole>;
  usershowroles: Array<UserShowRole>;
  my_usershowroles: Array<UserShowRole>;
  paymentMethods: Array<GetPaymentMethodOutputDto>;
};


export type QueryAddressArgs = {
  addressId: Scalars['String'];
};


export type QueryBrandArgs = {
  brandId: Scalars['String'];
};


export type QueryBrandsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryMy_BrandsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryConsumerLeadArgs = {
  consumerLeadId: Scalars['String'];
};


export type QueryConsumerLeadsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryMessageEntityArgs = {
  messageEntityId: Scalars['String'];
};


export type QueryLineItemArgs = {
  lineitemsId: Scalars['String'];
};


export type QueryLineItemsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryOrderLineItemsArgs = {
  paginationQuery: PaginationQueryDto;
  orderId: Scalars['String'];
};


export type QueryOrderArgs = {
  orderId: Scalars['String'];
};


export type QueryOrdersArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryMyOrdersArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryBrandOrdersArgs = {
  brandId: Scalars['String'];
  paginationQuery: PaginationQueryDto;
};


export type QueryTrackOrderArgs = {
  id: Scalars['String'];
};


export type QueryProductArgs = {
  productId: Scalars['String'];
};


export type QueryProductsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryMyProductsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryBrandProductsArgs = {
  paginationQuery: PaginationQueryDto;
  brandId: Scalars['String'];
};


export type QueryShowProductsArgs = {
  paginationQuery: PaginationQueryDto;
  showId: Scalars['String'];
};


export type QueryVariantArgs = {
  variantId: Scalars['String'];
};


export type QueryVariantsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryBrandVariantsArgs = {
  paginationQuery: PaginationQueryDto;
  productId: Scalars['String'];
};


export type QuerySkuArgs = {
  skuId: Scalars['String'];
};


export type QuerySkusArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryVariantSkusArgs = {
  paginationQuery: PaginationQueryDto;
  variantId: Scalars['String'];
};


export type QueryPaymentArgs = {
  PaymentId: Scalars['String'];
};


export type QueryShowArgs = {
  showId: Scalars['String'];
};


export type QueryMyShowsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryBrandShowsArgs = {
  paginationQuery: PaginationQueryDto;
  brandId: Scalars['String'];
};


export type QueryShowSegmentArgs = {
  showsegmentId: Scalars['String'];
};


export type QueryShowSegmentByBrandAndShowArgs = {
  showId: Scalars['String'];
  brandId: Scalars['String'];
};


export type QueryShowYourStyleEntryArgs = {
  showId: Scalars['String'];
};


export type QueryShowYourStyleEntriesArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryShowYourStyleVoteArgs = {
  showId: Scalars['String'];
};


export type QueryShowYourStyleVotesArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryShowYourStyleViewRecordArgs = {
  showId: Scalars['String'];
};


export type QueryShowYourStyleViewRecordsArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryVerify_CodeArgs = {
  code: Scalars['String'];
  phone: Scalars['String'];
};


export type QueryUserbrandroleArgs = {
  userbrandroleId: Scalars['String'];
};


export type QueryUserbrandrolesArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryMy_UserbrandrolesArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryUsershowroleArgs = {
  usershowroleId: Scalars['String'];
};


export type QueryUsershowrolesArgs = {
  paginationQuery: PaginationQueryDto;
};


export type QueryMy_UsershowrolesArgs = {
  paginationQuery: PaginationQueryDto;
};

export type Show = {
  __typename?: 'Show';
  id: Scalars['ID'];
  title: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  start_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  chatMessages?: Maybe<Array<MessageEntity>>;
  showSegments?: Maybe<Array<ShowSegment>>;
  userShowRoles?: Maybe<Array<UserShowRole>>;
  videoUrl?: Maybe<Scalars['String']>;
  owner_user: User;
  is_broadcasting: Scalars['Boolean'];
};

export type ShowSegment = {
  __typename?: 'ShowSegment';
  id: Scalars['String'];
  title: Scalars['String'];
  brand: Brand;
  show: Show;
  ownerUser: User;
  products: Array<Product>;
  lineItems?: Maybe<Array<LineItem>>;
};

export type ShowSegmentDto = {
  title: Scalars['String'];
  productsIds: Array<Scalars['String']>;
};

export type ShowYourStyleEntry = {
  __typename?: 'ShowYourStyleEntry';
  id: Scalars['String'];
  user: User;
  video_id: Scalars['String'];
  entry_timestamp: Scalars['DateTime'];
  video_url?: Maybe<Scalars['String']>;
  is_viewable: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  json_data?: Maybe<Scalars['String']>;
  urls?: Maybe<Scalars['String']>;
  inactive_date?: Maybe<Scalars['DateTime']>;
};

export type ShowYourStyleViewRecord = {
  __typename?: 'ShowYourStyleViewRecord';
  id: Scalars['String'];
  entry: ShowYourStyleEntry;
  user: User;
  view_time: Scalars['DateTime'];
};

export type ShowYourStyleVote = {
  __typename?: 'ShowYourStyleVote';
  id: Scalars['String'];
  entry: ShowYourStyleEntry;
  user: User;
  vote: Scalars['Float'];
  view_duration: Scalars['Float'];
};

export type Sku = {
  __typename?: 'Sku';
  id: Scalars['String'];
  name: Scalars['String'];
  friendlyName: Scalars['String'];
  COGS: Scalars['String'];
  stock: Scalars['Float'];
  variant: Variant;
  skus?: Maybe<Array<LineItem>>;
  stripeSkuId?: Maybe<Scalars['String']>;
  unitPrice: Scalars['Float'];
};

export type TrackOrderOutputDto = {
  __typename?: 'TrackOrderOutputDto';
  id: Scalars['String'];
  trackingId: Scalars['String'];
};

export type UpdateBrandDto = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateLineItemsDto = {
  id: Scalars['String'];
};

export type UpdateProductDto = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateShowDto = {
  id: Scalars['String'];
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
};

export type UpdateShowSegmentDto = {
  id: Scalars['String'];
  title: Scalars['String'];
  productsIds: Array<Scalars['String']>;
};

export type UpdateSkuDto = {
  id: Scalars['String'];
  name: Scalars['String'];
  friendlyName: Scalars['String'];
  COGS: Scalars['String'];
  stock: Scalars['Float'];
  unitPrice: Scalars['Float'];
};

export type UpdateUserBrandRoleDto = {
  id: Scalars['String'];
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
  admin: Scalars['Boolean'];
};

/** DTO to update a User, this is only the fields possible for the user to self-update */
export type UpdateUserEntityDto = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  webUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  profileText?: Maybe<Scalars['String']>;
  fbUrl?: Maybe<Scalars['String']>;
};

export type UpdateUserShowRoleDto = {
  id: Scalars['String'];
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
  admin: Scalars['Boolean'];
  stream_to: Scalars['Boolean'];
};

export type UpdateVariantDto = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateorderDto = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  trackingId?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  verificationCodeTimeSent: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  profileUrl?: Maybe<Scalars['String']>;
  /** Gets the stripe customer ID, automatically creating one if it doesn't exist */
  stripeCustomerId: Scalars['String'];
  defaultAddress?: Maybe<Address>;
  lastname?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  defaultPaymentMethod?: Maybe<PaymentMethod>;
  profileText?: Maybe<Scalars['String']>;
  webUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  fbUrl?: Maybe<Scalars['String']>;
};

export type UserBrandRole = {
  __typename?: 'UserBrandRole';
  id: Scalars['String'];
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
  admin: Scalars['Boolean'];
  user: User;
  brand: Brand;
};

export type UserShowRole = {
  __typename?: 'UserShowRole';
  id: Scalars['String'];
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
  admin: Scalars['Boolean'];
  stream_to: Scalars['Boolean'];
  user: User;
  show: Show;
};

export type Variant = {
  __typename?: 'Variant';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  product: Product;
  skus?: Maybe<Array<Sku>>;
};

export type AddPaymentMethodMutationVariables = Exact<{
  paymentMethod: AddPaymentMethodDto;
}>;


export type AddPaymentMethodMutation = (
  { __typename?: 'Mutation' }
  & { addPaymentMethod: (
    { __typename?: 'GetPaymentMethodOutputDto' }
    & Pick<GetPaymentMethodOutputDto, 'id' | 'paymentMethodId' | 'timestamp' | 'cardName'>
    & { card: (
      { __typename?: 'CardDetailsDto' }
      & Pick<CardDetailsDto, 'id' | 'expMonth' | 'expYear' | 'dynamicLast4' | 'brand' | 'last4' | 'name'>
    ) }
  ) }
);

export type GetShowsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShowsQuery = (
  { __typename?: 'Query' }
  & { shows: Array<(
    { __typename?: 'Show' }
    & Pick<Show, 'id' | 'title' | 'image_url' | 'start_date' | 'end_date' | 'videoUrl' | 'is_broadcasting'>
    & { showSegments?: Maybe<Array<(
      { __typename?: 'ShowSegment' }
      & Pick<ShowSegment, 'id' | 'title'>
    )>>, userShowRoles?: Maybe<Array<(
      { __typename?: 'UserShowRole' }
      & Pick<UserShowRole, 'id' | 'admin'>
    )>>, chatMessages?: Maybe<Array<(
      { __typename?: 'MessageEntity' }
      & Pick<MessageEntity, 'id' | 'message' | 'alias'>
    )>> }
  )> }
);


export const AddPaymentMethodDocument = gql`
    mutation AddPaymentMethod($paymentMethod: AddPaymentMethodDto!) {
  addPaymentMethod(addPaymentDetails: $paymentMethod) {
    id
    paymentMethodId
    timestamp
    cardName
    card {
      id
      expMonth
      expYear
      dynamicLast4
      brand
      last4
      name
    }
  }
}
    `;
export type AddPaymentMethodMutationFn = Apollo.MutationFunction<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>;

/**
 * __useAddPaymentMethodMutation__
 *
 * To run a mutation, you first call `useAddPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPaymentMethodMutation, { data, loading, error }] = useAddPaymentMethodMutation({
 *   variables: {
 *      paymentMethod: // value for 'paymentMethod'
 *   },
 * });
 */
export function useAddPaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>(AddPaymentMethodDocument, options);
      }
export type AddPaymentMethodMutationHookResult = ReturnType<typeof useAddPaymentMethodMutation>;
export type AddPaymentMethodMutationResult = Apollo.MutationResult<AddPaymentMethodMutation>;
export type AddPaymentMethodMutationOptions = Apollo.BaseMutationOptions<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>;
export const GetShowsDocument = gql`
    query GetShows {
  shows {
    id
    title
    image_url
    start_date
    end_date
    showSegments {
      id
      title
    }
    userShowRoles {
      id
      admin
    }
    videoUrl
    is_broadcasting
    chatMessages {
      id
      message
      alias
    }
  }
}
    `;

/**
 * __useGetShowsQuery__
 *
 * To run a query within a React component, call `useGetShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShowsQuery(baseOptions?: Apollo.QueryHookOptions<GetShowsQuery, GetShowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShowsQuery, GetShowsQueryVariables>(GetShowsDocument, options);
      }
export function useGetShowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShowsQuery, GetShowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShowsQuery, GetShowsQueryVariables>(GetShowsDocument, options);
        }
export type GetShowsQueryHookResult = ReturnType<typeof useGetShowsQuery>;
export type GetShowsLazyQueryHookResult = ReturnType<typeof useGetShowsLazyQuery>;
export type GetShowsQueryResult = Apollo.QueryResult<GetShowsQuery, GetShowsQueryVariables>;