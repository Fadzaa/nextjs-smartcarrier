import React from "react";
import DetailHero from "./detail-component/detail-hero";
import DetailDescription from "./detail-component/detail-description";
import jobDetail from "@/app/lib/services/endpoint/api/job-detail";

export default async function DetailPage({params}) {
    const id = params.id;


    return(
        <>
            <DetailHero id={id} />
            <DetailDescription id={id}/>
        </>
    );
}