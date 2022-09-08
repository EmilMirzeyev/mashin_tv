import { makeAutoObservable } from "mobx";
import { EToast } from "../enums/e_toast";
import { ToastList } from "../types/i_toastlist";

class ToastStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _toastList: ToastList[] = [];

  get toastList(): ToastList[] {
    return this._toastList;
  }

  successToast(message: string) {
    this.show(message, EToast.success);
  }

  errorToast(message: string) {
    this.show(message, EToast.error);
  }

  infoToast(message: string) {
    this.show(message, EToast.info);
  }

  private show(message: string, type: EToast) {
    const d = Date.now();
    this._toastList.push({ id: d, message: message, type: type });

    setTimeout(() => {
      for (let i = 0; i < this._toastList.length; i++) {
        if (this._toastList[i].id === d) {
          this._toastList.splice(i, 1);
        }
      }
    }, 3000);
  }
}

export default new ToastStore();
