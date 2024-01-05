import { makeAutoObservable } from "mobx";

class AppStore {
  file?: File;

  constructor() {
    makeAutoObservable(this);
  }

  setFile(file: File | undefined) {
    this.file = file;
  }
}

const appStore = new AppStore();

export default function useAppStore() {
  return appStore;
}
