import React from "react";
import {useQuery } from "@tanstack/react-query";
import {toast} from 'react-hot-toast';
import {useTranslation} from "react-i18next";
import {request, requestSHNK} from "@/services/api";

const useGetSHNKQuery = ({
                    key='get-all',
                    url='/',
                    params = {},
                    headers = {},
                    showSuccessMsg = false,
                    showErrorMsg = true,
                    enabled = true,
}) => {
    const {t} = useTranslation();
    const {
        isLoading,
        isError,
        data,
        error,
        isFetching,

    } = useQuery([key, params], () => requestSHNK.get(url, {
        params,
        headers
    }), {
        keepPreviousData: true,
        onSuccess: () => {
            if (showSuccessMsg) {
                toast.success(t('SUCCESS'));
            }
        },

        onError: (error) => {
            if (showErrorMsg) {
                toast.error(t('ERROR'))
            }
        },
        enabled
    });

    return {
        isLoading,
        isError,
        data,
        error,
        isFetching
    }
}

export default useGetSHNKQuery;
