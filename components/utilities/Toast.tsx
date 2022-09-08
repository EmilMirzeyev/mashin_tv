import React from "react";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { EToast } from "../../enums/e_toast";
import toast_store from "../../store/toast_store";

const Toast = observer(() => {
  const { toastList } = toast_store

  return (
    <div className="fixed bottom-5 right-5 w-4/5 min-h-[42px] max-w-[400px] flex flex-d flex-col-reverse items-end z-50">
      {toastList.map((toast) => {
        const isSuccess = toast.type == EToast.success;
        const isError = toast.type == EToast.error;
        const successClass = "border-success [&>div]:bg-success";
        const errorClass = "border-error [&>div]:bg-error";
        const infoClass = "border-info [&>div]:bg-info";

        return (
          <div
            key={toast.id}
            className={[
              "relative flex w-full mt-4 h-full pl-4 border rounded-lg overflow-hidden animate-toast bg-navy",
              isSuccess ? successClass : isError ? errorClass : infoClass,
            ].join(" ")}
          >
            <div className="min-w-[50px] min-h-[50px] max-h-[50px] flex justify-center items-center my-3 mr-4 rounded-lg">
              {/* <Image
                src={
                  isSuccess
                    ? "/vectors/check.svg"
                    : isError
                    ? "/vectors/error.svg"
                    : "/vectors/info.svg"
                }
                width={36}
                height={36}
                alt={"toast type"}
              /> */}
            </div>
            <p className="py-3 text-base text-black">{toast.message}</p>
          </div>
        );
      })}
    </div>
  );
});

export default Toast;
