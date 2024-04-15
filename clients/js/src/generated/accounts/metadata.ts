/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  bool,
  mapSerializer,
  option,
  publicKey as publicKeySerializer,
  string,
  struct,
  u16,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  CreatorArgs,
  Key,
  KeyArgs,
  ProgrammableConfig,
  ProgrammableConfigArgs,
  TokenStandard,
  TokenStandardArgs,
  Uses,
  UsesArgs,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getCreatorSerializer,
  getKeySerializer,
  getProgrammableConfigSerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
} from '../types';

export type Metadata = Account<MetadataAccountData>;

export type MetadataAccountData = {
  key: Key;
  updateAuthority: PublicKey;
  mint: PublicKey;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<Array<Creator>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: Option<TokenStandard>;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  programmableConfig: Option<ProgrammableConfig>;
};

export type MetadataAccountDataArgs = {
  updateAuthority: PublicKey;
  mint: PublicKey;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: OptionOrNullable<Array<CreatorArgs>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: OptionOrNullable<number>;
  tokenStandard: OptionOrNullable<TokenStandardArgs>;
  collection: OptionOrNullable<CollectionArgs>;
  uses: OptionOrNullable<UsesArgs>;
  collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
  programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
};

export function getMetadataAccountDataSerializer(): Serializer<
  MetadataAccountDataArgs,
  MetadataAccountData
> {
  return mapSerializer<MetadataAccountDataArgs, any, MetadataAccountData>(
    struct<MetadataAccountData>(
      [
        ['key', getKeySerializer()],
        ['updateAuthority', publicKeySerializer()],
        ['mint', publicKeySerializer()],
        ['name', string()],
        ['symbol', string()],
        ['uri', string()],
        ['sellerFeeBasisPoints', u16()],
        ['creators', option(array(getCreatorSerializer()))],
        ['primarySaleHappened', bool()],
        ['isMutable', bool()],
        ['editionNonce', option(u8())],
        ['tokenStandard', option(getTokenStandardSerializer())],
        ['collection', option(getCollectionSerializer())],
        ['uses', option(getUsesSerializer())],
        ['collectionDetails', option(getCollectionDetailsSerializer())],
        ['programmableConfig', option(getProgrammableConfigSerializer())],
      ],
      { description: 'MetadataAccountData' }
    ),
    (value) => ({ ...value, key: Key.MetadataV1 })
  ) as Serializer<MetadataAccountDataArgs, MetadataAccountData>;
}

export function deserializeMetadata(rawAccount: RpcAccount): Metadata {
  return deserializeAccount(rawAccount, getMetadataAccountDataSerializer());
}

export async function fetchMetadata(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<Metadata> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'Metadata');
  return deserializeMetadata(maybeAccount);
}

export async function safeFetchMetadata(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<Metadata | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists ? deserializeMetadata(maybeAccount) : null;
}

export async function fetchAllMetadata(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<Metadata[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'Metadata');
    return deserializeMetadata(maybeAccount);
  });
}

export async function safeFetchAllMetadata(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions & {
    skipCorruptedMetadata?: boolean
  }
): Promise<Metadata[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) => {
      if (!options?.skipCorruptedMetadata) {
        return deserializeMetadata(maybeAccount as RpcAccount);
      }
      try {
        // This can fail if the metadata is unexpectedly broken in very rare cases, e.g.
        // UnexpectedAccountError: The account at the provided address ['...'] is not of the expected type [MetadataAccountData]
        return deserializeMetadata(maybeAccount as RpcAccount);
      } catch {
        return null;
      }
    })
    .filter((metadata) => metadata !== null)
}

export function getMetadataGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: KeyArgs;
      updateAuthority: PublicKey;
      mint: PublicKey;
      name: string;
      symbol: string;
      uri: string;
      sellerFeeBasisPoints: number;
      creators: OptionOrNullable<Array<CreatorArgs>>;
      primarySaleHappened: boolean;
      isMutable: boolean;
      editionNonce: OptionOrNullable<number>;
      tokenStandard: OptionOrNullable<TokenStandardArgs>;
      collection: OptionOrNullable<CollectionArgs>;
      uses: OptionOrNullable<UsesArgs>;
      collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
      programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
    }>({
      key: [0, getKeySerializer()],
      updateAuthority: [1, publicKeySerializer()],
      mint: [33, publicKeySerializer()],
      name: [65, string()],
      symbol: [null, string()],
      uri: [null, string()],
      sellerFeeBasisPoints: [null, u16()],
      creators: [null, option(array(getCreatorSerializer()))],
      primarySaleHappened: [null, bool()],
      isMutable: [null, bool()],
      editionNonce: [null, option(u8())],
      tokenStandard: [null, option(getTokenStandardSerializer())],
      collection: [null, option(getCollectionSerializer())],
      uses: [null, option(getUsesSerializer())],
      collectionDetails: [null, option(getCollectionDetailsSerializer())],
      programmableConfig: [null, option(getProgrammableConfigSerializer())],
    })
    .deserializeUsing<Metadata>((account) => deserializeMetadata(account))
    .whereField('key', Key.MetadataV1);
}

export function findMetadataPda(
  context: Pick<Context, 'eddsa' | 'programs'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return context.eddsa.findPda(programId, [
    string({ size: 'variable' }).serialize('metadata'),
    publicKeySerializer().serialize(programId),
    publicKeySerializer().serialize(seeds.mint),
  ]);
}

export async function fetchMetadataFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findMetadataPda>[1],
  options?: RpcGetAccountOptions
): Promise<Metadata> {
  return fetchMetadata(context, findMetadataPda(context, seeds), options);
}

export async function safeFetchMetadataFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findMetadataPda>[1],
  options?: RpcGetAccountOptions
): Promise<Metadata | null> {
  return safeFetchMetadata(context, findMetadataPda(context, seeds), options);
}
