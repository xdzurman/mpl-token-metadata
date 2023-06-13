/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { findAssociatedTokenPda } from '@metaplex-foundation/mpl-toolbox';
import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  resolveAuthorizationRulesProgram,
  resolveMasterEdition,
  resolveTokenRecord,
} from '../../hooked';
import { findMetadataPda, findTokenRecordPda } from '../accounts';
import { PickPartial, addAccountMeta, addObjectProperty } from '../shared';
import { TokenStandardArgs } from '../types';

// Accounts.
export type RevokeLockedTransferV1InstructionAccounts = {
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
export type RevokeLockedTransferV1InstructionData = {
  discriminator: number;
  revokeLockedTransferV1Discriminator: number;
};

export type RevokeLockedTransferV1InstructionDataArgs = {};

export function getRevokeLockedTransferV1InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  RevokeLockedTransferV1InstructionDataArgs,
  RevokeLockedTransferV1InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    RevokeLockedTransferV1InstructionDataArgs,
    any,
    RevokeLockedTransferV1InstructionData
  >(
    s.struct<RevokeLockedTransferV1InstructionData>(
      [
        ['discriminator', s.u8()],
        ['revokeLockedTransferV1Discriminator', s.u8()],
      ],
      { description: 'RevokeLockedTransferV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 45,
      revokeLockedTransferV1Discriminator: 7,
    })
  ) as Serializer<
    RevokeLockedTransferV1InstructionDataArgs,
    RevokeLockedTransferV1InstructionData
  >;
}

// Extra Args.
export type RevokeLockedTransferV1InstructionExtraArgs = {
  tokenStandard: TokenStandardArgs;
  tokenOwner: PublicKey;
};

// Args.
export type RevokeLockedTransferV1InstructionArgs = PickPartial<
  RevokeLockedTransferV1InstructionExtraArgs,
  'tokenOwner'
>;

// Instruction.
export function revokeLockedTransferV1(
  context: Pick<
    Context,
    'serializer' | 'programs' | 'eddsa' | 'identity' | 'payer'
  >,
  input: RevokeLockedTransferV1InstructionAccounts &
    RevokeLockedTransferV1InstructionArgs
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
    resolvingArgs,
    'tokenOwner',
    input.tokenOwner ?? context.identity.publicKey
  );
  addObjectProperty(
    resolvedAccounts,
    'token',
    input.token
      ? ([input.token, true] as const)
      : ([
          findAssociatedTokenPda(context, {
            mint: publicKey(input.mint, false),
            owner: resolvingArgs.tokenOwner,
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'delegateRecord',
    input.delegateRecord
      ? ([input.delegateRecord, true] as const)
      : ([
          findTokenRecordPda(context, {
            mint: publicKey(input.mint, false),
            token: publicKey(resolvedAccounts.token[0], false),
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
    'authority',
    input.authority
      ? ([input.authority, false] as const)
      : ([context.identity, false] as const)
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
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
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
  const data = getRevokeLockedTransferV1InstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
