import type { KeyLabel } from './key-label.type';
import type { NestedKeyOf } from './nested-key-of.type';

export type TableHeaderKeyLabel<Data extends object[]> = KeyLabel<
  NestedKeyOf<Data extends Array<infer U> ? U : never> | 'action'
>;
