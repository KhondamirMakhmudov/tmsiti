import React from 'react';
import {Checkbox} from "pretty-checkbox-react";
const CheckboxTemplate = ({children}) => {
    return (
        <div className={'flex items-center gap-x-[10px]'}>
            <Checkbox/>
            <p className={'text-[#fff] text-sm font-semibold'}>{children}</p>
        </div>

    );
};

export default CheckboxTemplate;