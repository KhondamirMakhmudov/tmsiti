import React from 'react';
import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import Footer from "@/components/footer";
import {useTranslation} from "react-i18next";

const Main = ({children}) => {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </Wrapper>
    );
};

export default Main;