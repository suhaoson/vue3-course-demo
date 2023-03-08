import type { Store } from "pinia";

export interface IAdress {
  text: string;
}

export interface MyState {
  text: string;
}

export interface MyStoreGetters {}

export interface MyStoreActions {}

export type MyStore = Store<
  "my-store",
  MyState,
  MyStoreGetters,
  MyStoreActions
>;
