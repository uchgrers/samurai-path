import {Suspense} from "react";

export const withSuspense = (children, fallback) => {
    return <Suspense children={children} fallback={fallback}/>
}