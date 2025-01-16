import React from 'react'
import { useAlert } from 'react-alert';
import { useParams } from "react-router-dom";
import { ItemRefetchState } from '../global-states/GlobalStates';
import { useHookstate } from '@hookstate/core';

function WithRouter(Component) {
    function ComponentWithRouter(props) {
        const { items_refetch } = useHookstate(ItemRefetchState);
        let params = useParams();
        const alert = useAlert();
        return <Component {...props} params={params} alert={alert} items_refetch={items_refetch}/>
    }
    return ComponentWithRouter
}

export default WithRouter