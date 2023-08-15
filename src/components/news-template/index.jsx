import React from 'react';

const NewsTemplate = ({imgUrl, dateTime, title, description}) => {
    const date = new Date(dateTime).toISOString().split('T')[0].replaceAll('-', '.');


    return (
        <>
            <div className={'flex gap-x-[30px]'}>
                <img src={`${imgUrl}`} alt={'news-img'} className={'w-[330px] h-[189px]'}/>
                <div>
                    <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>{date}</p>
                    <h2 className={'text-xl font-bold'}>{title}</h2>
                    <p className={'text-[#A9AFC5] mt-[10px] '}>{description}</p>

                </div>
            </div>

            <div className={'w-full h-[1px] bg-[#001A57] my-[30px]'}></div>
        </>
    );
};

export default NewsTemplate;