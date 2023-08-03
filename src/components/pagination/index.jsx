import React from 'react';
import ReactPaginate from 'react-paginate';
import Image from "next/image";

const Pagination = ({
                        page = 1,
                        pageCount = 10,
                        setPage = () => {
                        },
                        className

                    }) => {
    return (
        <div className={className}>
            <ReactPaginate forcePage={page - 1} onPageChange={({selected}) => setPage(selected + 2)}
                           pageCount={pageCount}
                           nextLabel={<span className={'bg-black'}><Image src={'/icons/arrow-right.svg'} alt={'right'} width={24} height={24} className={'bg-[#1A4DC2] rounded-[5px] p-[3px]'}/></span>}
                           previousLabel={<span><Image src={'/icons/arrow-left.svg'} alt={'left'} width={24} height={24} className={'bg-[#1A4DC2] rounded-[5px] p-[3px]'}/></span>} className={'flex justify-center my-2 items-center'}
                           pageClassName={'ml-2.5'}
                           pageLinkClassName={'inline-flex min-w-[32px] h-8 rounded-[5px] justify-center items-center bg-transparent text-[#001A57] text-lg p-1'}
                           nextClassName={'ml-2.5  text-sm text-[#313B3D]'} previousClassName={'text-sm text-[#313B3D]'}
                           breakLinkClassName={'ml-4 mr-1.5'} activeLinkClassName={'!bg-[#1A4DC2] !text-white'}/>
        </div>
    );
};

export default Pagination;