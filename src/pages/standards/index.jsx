import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import RSelect, {components} from 'react-select';
import Select from "@/components/select";
import Checkbox from "@/components/checkbox";
import CheckboxTemplate from "@/components/checkbox";
import Template from "@/components/template";
import Pagination from "@/components/pagination";


const Standards = () => {
    return (
        <Main>
            <Menu/>

            <section className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>
                <div className={'col-span-12'}>
                    <Title>
                        faol, muomaladan chiqarilgan davlat standartlar, tashkilot standartlari va xalqaro standartlar reestri
                    </Title>

                </div>
            </section>

            <div className={'bg-[#28366D] bg-no-repeat bg-cover  pt-[30px] pb-[20px]  mb-[30px]'} style={{backgroundImage: "url(/images/background-search-box.png)"}}>
                <div className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>
                    <form className={'col-span-12 flex gap-x-[30px] '}>
                        <input type={'text'} placeholder={"Standart raqami"} className={'max-w-[270px] w-full text-sm py-[15px] px-[20px] placeholder-[#001A57] outline-0 rounded-[5px]'}/>
                        <input type={'text'} placeholder={"Standart nomi"} className={'w-full text-sm py-[15px] px-[20px] placeholder-[#001A57] outline-0 rounded-[5px]'}/>
                    </form>

                    <form className={'col-span-12 flex gap-x-[30px] mb-[20px]'}>

                        <Select
                            placeholder={'Standart toifasini tanlang'}
                        />
                        <Select
                            placeholder={'Shartli belgisi'}
                        />
                        <Select
                            placeholder={'OKS klassifikator'}
                        />

                    </form>

                    <div className={'col-span-12'}>
                        <h4 className={'font-semibold text-sm text-[#fff] mb-[14px]'}>Holati</h4>
                    </div>

                    <div className={'col-span-12 flex justify-between items-center'}>
                        <div className={'flex gap-x-[20px] items-center '}>
                            <CheckboxTemplate>Amalda</CheckboxTemplate>

                            <CheckboxTemplate>Amalda emas</CheckboxTemplate>

                            <CheckboxTemplate>Muddati o‘tgan</CheckboxTemplate>

                            <CheckboxTemplate>Reestrdan chiqarilgan</CheckboxTemplate>
                        </div>

                        <p className={'italic text-xs font-medium text-[#fff] '}>*Tizimdagi ma’lumotlar O‘zStandart reestridan olingan</p>
                    </div>


                </div>
            </div>

            <div className={'grid grid-cols-12 container mx-auto'}>
                <Template
                    code={'O‘zDSt 652:2011'}
                    content={'Комбикорма, сырье. Методь определения металломагнитной примеси'}
                />

                <Template
                          code={'O‘zDSt EN 13850:2021 (EN 13850:2020, IDT)'}
                          content={'Сосудм под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. Unfired pressure vessels - Part 6: Requirements for the design and fabrication of pressure vessels and pressure parts constructed from spheroidal graphite...'}
                />

                <Template
                          code={'O‘zDSt 653:2011'}
                          content={'Сосуды под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. '}
                />

                <Template
                          code={'O‘zDSt 652:2011'}
                          content={'Комбикорма, сырье. Методь определения металломагнитной примеси'}
                />


                <Template
                          code={'O‘zDSt 652:2011'}
                          content={'Комбикорма, сырье. Методь определения металломагнитной примеси'}
                />

                <Template
                          code={'O‘zDSt EN 13850:2021 (EN 13850:2020, IDT)'}
                          content={'Сосудм под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. Unfired pressure vessels - Part 6: Requirements for the design and fabrication of pressure vessels and pressure parts constructed from spheroidal graphite...'}
                />

                <Template
                          code={'O‘zDSt 653:2011'}
                          content={'Сосуды под давлением без огня - Часть 6: Требования к проектированию и изготовлению сосудов под давлением и деталей под давлением, изготовленных из чугуна с шаровиднмм графитом. '}
                />

                <Template
                          code={'O‘zDSt 652:2011'}
                          content={'Комбикорма, сырье. Методь определения металломагнитной примеси'}
                />

                <Pagination className={'col-span-12 mt-[10px] mb-[50px]'}>

                </Pagination>
            </div>
        </Main>
    );
};

export default Standards;