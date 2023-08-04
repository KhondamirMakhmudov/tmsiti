import RSelect, {components} from 'react-select';
import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import clsx from "clsx";


const DropdownIndicator = props => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image width={24} height={24} src={'/icons/arrow-down-dark.svg'} alt={'arrow'}/>
            </components.DropdownIndicator>
        )
    );
};

const customStyles = (sm = false) => ({
    control: (base, state, error) => ({
        display: 'flex',
        borderRadius: '5px',
        paddingLeft: '13px',
        color: '#001A57',
        background: '#fff',
        width: '270px',
        maxWidth: '270px',
        height: '48px',
        maxHeight: '50px',
        fontSize: '14px',
    }),
    indicatorSeparator: (base, state) => ({

        display: 'none'
    })
});




const Select = ({
                    name='',defaultValue = null, sm = false, label = '', getValue = () => {
    }, options = [],
                    placeholder = '',isClearable=false
                }) => {
    const {t} = useTranslation()
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    useEffect(() => {
        getValue(selectedOption)
    }, [selectedOption])


    return (
        <div className={clsx({'flex items-center max-h-[48px] max-w-[330px] w-[330px] ': sm})}>
            <label className={clsx('mb-2 inline-block ', {'text-sm': sm})} htmlFor={label}>{label}</label>
            <RSelect
                isClearable={isClearable}
                name={name}
                defaultValue={defaultValue}
                clearIndicator={true}
                styles={customStyles(sm)}
                id={label}
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={placeholder}
                noOptionsMessage={()=> {"No Options"}}
            />
        </div>
    );
};

export default Select;