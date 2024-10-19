import { ReactNode } from "react";

//components / reusableComponents/ formLayout
export type formLayoutProps = {
    children: React.ReactNode;
    title?: String;
};

//components / reusableComponents/ mainPageCard
export type MainCardProps = {
    children: React.ReactNode;
};
export type Mainlist = {
    children?: React.ReactNode;
    title?: String;
};


//components / reusableComponents/ inputComponnent
export type customInputProps = {
    label: string;
   icon?: ReactNode
    type: string;
    placeholder: string;
    name?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    required?: boolean;
    disabled?: boolean;
};
//components / reusableComponents/ NumberInput

export type customNumbersInputProps = {
    value: string;

    onChange: (value: string) => void;
    required?: boolean;
};

//components / reusableComponents/ customSelect
export type customSelectProps = {
    options: { value: any; label: string }[];
    label?: string;
    onChange: (value: number) => void; // Add this prop
};
export type customAnySelectProps = {
    label?: string;
    type: string;
    id?: string;
    onChange: (value: number) => void; // Add this prop
};
export type ModalProps = {
    children: React.ReactNode;
    title?: string;
    openCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
    resetEditData?: React.Dispatch<React.SetStateAction<[]>>;
};
