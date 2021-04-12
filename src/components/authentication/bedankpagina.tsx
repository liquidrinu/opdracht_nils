import React from "react";
import { useHistory } from "react-router-dom";

export default function BedankPagina() {

    let history = useHistory();
    let data: any = history.location.state;

    return <h2>{data.message}</h2>
}
