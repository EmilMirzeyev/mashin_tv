import { Dispatch, PropsWithChildren, SetStateAction } from "react";

export interface IModal extends PropsWithChildren {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}