import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lang from "@/components/lang";



const Header = () => {
    return (
        <header>
            <div className={'bg-[#182041] py-2'}>
                <div className={'container mx-auto text-white text-sm'}>
                    <div className={'flex items-center justify-end'}>
                        <div className={'flex mr-[40px] gap-x-[10px]'}>
                            <Image src={'/icons/phone.svg'} alt={'phone'} width={20} height={20}/>
                            <Link href={'tel:+998 71 244-51-84'}>+998 71 244-51-84</Link>
                        </div>

                        <div className={'flex mr-[30px] gap-x-[10px]'}>
                            <Image src={'/icons/mail.svg'} alt={'phone'} width={20} height={20}/>
                            <Link href={'mailto: info@tmsiti.uz'}>info@tmsiti.uz</Link>
                        </div>
                        <Lang/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;


