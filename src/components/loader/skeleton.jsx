import React from 'react';
import Skeleton from '@mui/material/Skeleton'

const SkeletonLoader = () => {
    return (
        <>
            <div className={'flex gap-x-[30px]'}>
                <Skeleton animation="wave" variant="rectangular" width={361} height={180} />

                <div>
                    <Skeleton className={"mb-[20px]"} animation={"wave"} variant={"rectangular"} width={280} height={15}/>

                    <Skeleton animation={"wave"} variant={"rectangular"} width={1080} height={25}/>

                    <Skeleton className={"mt-[10px]"} animation={"wave"} variant={"rectangular"} width={1080} height={20}/>
                </div>
            </div>

            <div className={'w-full h-[1px] my-[30px] '}></div>
        </>
    );
};

export default SkeletonLoader;
