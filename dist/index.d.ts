import React from 'react';

export interface taskObj {

    title: string;

    done: boolean;

}

export interface taskBoxProps {

    tasks: taskObj[];

    theme: "primary" | "secondary" | "default" | undefined;

}

declare const CheckboxList: React.FC<taskBoxProps>;

export default CheckboxList;

