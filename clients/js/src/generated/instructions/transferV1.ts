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
  resolveDestinationTokenRecord,
  resolveMasterEditionForProgrammables,
  resolveTokenRecord,
} from '../../hooked';
import { findMetadataPda } from '../accounts';
import { addAccountMeta, addObjectProperty } from '../shared';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  TokenStandardArgs,
  getAuthorizationDataSerializer,
} from '../types';

// Accounts.
export type TransferV1InstructionAccounts = {
  /** Token account */
  token?: PublicKey | Pda;
  /** Token account owner */
  tokenOwner?: PublicKey | Pda;
  /** Destination token account */
  destinationToken?: PublicKey | Pda;
  /** Destination token account owner */
  destinationOwner: PublicKey | Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey | Pda;
  /** Edition of token asset */
  edition?: PublicKey | Pda;
  /** Owner token record account */
  tokenRecord?: PublicKey | Pda;
  /** Destination token record account */
  destinationTokenRecord?: PublicKey | Pda;
  /** Transfer authority (token owner or delegate) */
  authority?: Signer;
  /** Payer */
  payer?: Signer;
  /** System Program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
  /** SPL Associated Token Account program */
  splAtaProgram?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type TransferV1InstructionData = {
  discriminator: number;
  transferV1Discriminator: number;
  amount: bigint;
  authorizationData: Option<AuthorizationData>;
};

export type TransferV1InstructionDataArgs = {
  amount?: number | bigint;
  authorizationData?: Option<AuthorizationDataArgs>;
};

export function getTransferV1InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TransferV1InstructionDataArgs, TransferV1InstructionData> {
  const s = context.serializer;
  return mapSerializer<
    TransferV1InstructionDataArgs,
    any,
    TransferV1InstructionData
  >(
    s.struct<TransferV1InstructionData>(
      [
        ['discriminator', s.u8()],
        ['transferV1Discriminator', s.u8()],
        ['amount', s.u64()],
        [
          'authorizationData',
          s.option(getAuthorizationDataSerializer(context)),
        ],
      ],
      { description: 'TransferV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 49,
      transferV1Discriminator: 0,
      amount: value.amount ?? 1,
      authorizationData: value.authorizationData ?? none(),
    })
  ) as Serializer<TransferV1InstructionDataArgs, TransferV1InstructionData>;
}

// Extra Args.
export type TransferV1InstructionExtraArgs = {
  tokenStandard: TokenStandardArgs;
};

// Args.
export type TransferV1InstructionArgs = TransferV1InstructionDataArgs &
  TransferV1InstructionExtraArgs;

// Instruction.
export function transferV1(
  context: Pick<
    Context,
    'serializer' | 'programs' | 'eddsa' | 'identity' | 'payer'
  >,
  input: TransferV1InstructionAccounts & TransferV1InstructionArgs
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
    destinationOwner: [input.destinationOwner, false] as const,
    mint: [input.mint, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'tokenOwner',
    input.tokenOwner
      ? ([input.tokenOwner, false] as const)
      : ([context.identity.publicKey, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'token',
    input.token
      ? ([input.token, true] as const)
      : ([
          findAssociatedTokenPda(context, {
            mint: publicKey(input.mint, false),
            owner: publicKey(resolvedAccounts.tokenOwner[0], false),
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'destinationToken',
    input.destinationToken
      ? ([input.destinationToken, true] as const)
      : ([
          findAssociatedTokenPda(context, {
            mint: publicKey(input.mint, false),
            owner: publicKey(input.destinationOwner, false),
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
    'edition',
    input.edition
      ? ([input.edition, false] as const)
      : resolveMasterEditionForProgrammables(
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
    'destinationTokenRecord',
    input.destinationTokenRecord
      ? ([input.destinationTokenRecord, true] as const)
      : resolveDestinationTokenRecord(
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
    'splAtaProgram',
    input.splAtaProgram
      ? ([input.splAtaProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splAssociatedToken',
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
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
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.token, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenOwner, false);
  addAccountMeta(keys, signers, resolvedAccounts.destinationToken, false);
  addAccountMeta(keys, signers, resolvedAccounts.destinationOwner, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.edition, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.destinationTokenRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.authority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);
  addAccountMeta(keys, signers, resolvedAccounts.splTokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.splAtaProgram, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.authorizationRulesProgram,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.authorizationRules, false);

  // Data.
  const data =
    getTransferV1InstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
