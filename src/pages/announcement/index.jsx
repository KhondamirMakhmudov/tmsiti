import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import AnnounceTemplate from "@/components/announce-template";
import Pagination from "@/components/pagination";

const Announcement = () => {
    return (
        <Main>
            <Menu/>

            <section className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>
                <div className={'col-span-12'}>
                    <Title>
                        Barcha e’lonlar
                    </Title>
                </div>

                <div className={'col-span-12'}>
                    <AnnounceTemplate
                        date={'19.07.2023'}
                        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}
                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}
                    />

                    <AnnounceTemplate
                        date={'19.07.2023'}
                        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}
                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}
                    />

                    <AnnounceTemplate
                        date={'19.07.2023'}
                        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}
                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}
                    />

                    <AnnounceTemplate
                        date={'19.07.2023'}
                        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}
                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}
                    />

                    <AnnounceTemplate
                        date={'19.07.2023'}
                        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}
                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}
                    />

                    <Pagination className={'mb-[169px]'}/>
                </div>
            </section>
        </Main>
    );
};

export default Announcement;