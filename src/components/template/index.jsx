import React from 'react';
import Image from "next/image";

const Template = ({code='', content='', className=''}) => {
    return (
        <div className={className}>
            <Image src={'/icons/error.svg'} alt={'success'} width={20} height={20}/>

            <div className={'flex  flex-col'}>
                <p className={'text-[#1A4DC2] font-semibold'}>{code}</p>
                <p className={''}>{content}</p>
            </div>


        </div>
    );
};

export default Template;