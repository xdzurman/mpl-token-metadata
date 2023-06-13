/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Option,
  Pda,
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  none,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  resolveAuthorizationRulesProgram,
  resolveMasterEdition,
  resolveTokenRecord,
} from '../../hooked';
import { findMetadataDelegateRecordPda, findMetadataPda } from '../accounts';
import { PickPartial, addAccountMeta, addObjectProperty } from '../shared';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  MetadataDelegateRole,
  TokenStandardArgs,
  getAuthorizationDataSerializer,
} from '../types';

// Accounts.
export type DelegateCollectionItemV1InstructionAccounts = {
  /** Delegate record account */
  delegateRecord?: PublicKey | Pda;
  /** Owner of the delegated account */
  delegate: PublicKey | Pda;
  /** Metadata account */
  metadata?: PublicKey | Pda;
  /** Master Edition account */
  masterEdition?: PublicKey | Pda;
  /** Token record account */
  tokenRecord?: PublicKey | Pda;
  /** Mint of metadata */
  mint: PublicKey | Pda;
  /** Token account of mint */
  token?: PublicKey | Pda;
  /** Update authority or token owner */
  authority?: Signer;
  /** Payer */
  payer?: Signer;
  /** System Program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type DelegateCollectionItemV1InstructionData = {
  discriminator: number;
  delegateCollectionItemV1Discriminator: number;
  authorizationData: Option<AuthorizationData>;
};

export type DelegateCollectionItemV1InstructionDataArgs = {
  authorizationData?: Option<AuthorizationDataArgs>;
};

export function getDelegateCollectionItemV1InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DelegateCollectionItemV1InstructionDataArgs,
  DelegateCollectionItemV1InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DelegateCollectionItemV1InstructionDataArgs,
    any,
    DelegateCollectionItemV1InstructionData
  >(
    s.struct<DelegateCollectionItemV1InstructionData>(
      [
        ['discriminator', s.u8()],
        ['delegateCollectionItemV1Discriminator', s.u8()],
        [
          'authorizationData',
          s.option(getAuthorizationDataSerializer(context)),
        ],
      ],
      { description: 'DelegateCollectionItemV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 44,
      delegateCollectionItemV1Discriminator: 11,
      authorizationData: value.authorizationData ?? none(),
    })
  ) as Serializer<
    DelegateCollectionItemV1InstructionDataArgs,
    DelegateCollectionItemV1InstructionData
  >;
}

// Extra Args.
export type DelegateCollectionItemV1InstructionExtraArgs = {
  tokenStandard: TokenStandardArgs;
  updateAuthority: PublicKey;
};

// Args.
export type DelegateCollectionItemV1InstructionArgs = PickPartial<
  DelegateCollectionItemV1InstructionDataArgs &
    DelegateCollectionItemV1InstructionExtraArgs,
  'updateAuthority'
>;

// Instruction.
export function delegateCollectionItemV1(
  context: Pick<
    Context,
    'serializer' | 'programs' | 'eddsa' | 'identity' | 'payer'
  >,
  input: DelegateCollectionItemV1InstructionAccounts &
    DelegateCollectionItemV1InstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    delegate: [input.delegate, false] as const,
    mint: [input.mint, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'authority',
    input.authority
      ? ([input.authority, false] as const)
      : ([context.identity, false] as const)
  );
  addObjectProperty(
    resolvingArgs,
    'updateAuthority',
    input.updateAuthority ?? publicKey(resolvedAccounts.authority[0], false)
  );
  addObjectProperty(
    resolvedAccounts,
    'delegateRecord',
    input.delegateRecord
      ? ([input.delegateRecord, true] as const)
      : ([
          findMetadataDelegateRecordPda(context, {
            mint: publicKey(input.mint, false),
            delegateRole: MetadataDelegateRole.CollectionItem,
            updateAuthority: resolvingArgs.updateAuthority,
            delegate: publicKey(input.delegate, false),
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'metadata',
    input.metadata
      ? ([input.metadata, true] as const)
      : ([
          findMetadataPda(context, { mint: publicKey(input.mint, false) }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'masterEdition',
    input.masterEdition
      ? ([input.masterEdition, false] as const)
      : resolveMasterEdition(
          context,
          { ...input, ...resolvedAccounts },
          { ...input, ...resolvingArgs },
          programId,
          false
        )
  );
  addObjectProperty(
    resolvedAccounts,
    'token',
    input.token ? ([input.token, true] as const) : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenRecord',
    input.tokenRecord
      ? ([input.tokenRecord, true] as const)
      : resolveTokenRecord(
          context,
          { ...input, ...resolvedAccounts },
          { ...input, ...resolvingArgs },
          programId,
          true
        )
  );
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'sysvarInstructions',
    input.sysvarInstructions
      ? ([input.sysvarInstructions, false] as const)
      : ([
          publicKey('Sysvar1nstructions1111111111111111111111111'),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'splTokenProgram',
    input.splTokenProgram
      ? ([input.splTokenProgram, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRules',
    input.authorizationRules
      ? ([input.authorizationRules, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'authorizationRulesProgram',
    input.authorizationRulesProgram
      ? ([input.authorizationRulesProgram, false] as const)
      : resolveAuthorizationRulesProgram(
          context,
          { ...input, ...resolvedAccounts },
          { ...input, ...resolvingArgs },
          programId,
          false
        )
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.delegateRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.delegate, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.token, false);
  addAccountMeta(keys, signers, resolvedAccounts.authority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);
  addAccountMeta(keys, signers, resolvedAccounts.splTokenProgram, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.authorizationRulesProgram,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.authorizationRules, false);

  // Data.
  const data =
    getDelegateCollectionItemV1InstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
