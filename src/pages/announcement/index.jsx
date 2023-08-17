import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import AnnounceTemplate from "@/components/announce-template";
import Pagination from "@/components/pagination";
import ListView from "@/containers/list-view";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";

const Announcement = () => {
    return (
        <Main>
            <Menu/>


            <div className={'grid grid-cols-12 container mx-auto'}>
                <div className={'col-span-12'}>
                    <ListView
                        HeaderBody={<Title>Barcha e`lonlar</Title>}
                        key={KEYS.ads}
                        url={URLS.ads}
                        date={'ads_dateTime'}
                        title={'ads_title'}
                        description={'ads_text'}
                        defaultPageSize={0}
                    />
                </div>
            </div>
            {/*<section className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>*/}
            {/*    <div className={'col-span-12'}>*/}
            {/*        <Title>*/}
            {/*            Barcha e’lonlar*/}
            {/*        </Title>*/}
            {/*    </div>*/}

            {/*    <div className={'col-span-12'}>*/}
            {/*        <AnnounceTemplate*/}
            {/*            date={'19.07.2023'}*/}
            {/*            title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
            {/*            description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
            {/*        />*/}

            {/*        <AnnounceTemplate*/}
            {/*            date={'19.07.2023'}*/}
            {/*            title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
            {/*            description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
            {/*        />*/}

            {/*        <AnnounceTemplate*/}
            {/*            date={'19.07.2023'}*/}
            {/*            title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
            {/*            description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
            {/*        />*/}

            {/*        <AnnounceTemplate*/}
            {/*            date={'19.07.2023'}*/}
            {/*            title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
            {/*            description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
            {/*        />*/}

            {/*        <AnnounceTemplate*/}
            {/*            date={'19.07.2023'}*/}
            {/*            title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
            {/*            description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
            {/*        />*/}

            {/*        <Pagination className={'mb-[169px]'}/>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </Main>
    );
};

export default Announcement;