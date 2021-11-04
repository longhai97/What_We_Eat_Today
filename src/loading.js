import * as React                                        from 'react';
import { ShimmerBadge, ShimmerThumbnail, ShimmerTitle, } from "react-shimmer-effects";


export const Loading = (props) => {
    return (
        <div className={"skeleton"}>
            <ShimmerThumbnail height={ 200 } width={ 200 } className="m-0" rounded/>
            <ShimmerBadge width={ 200 }/>
            <ShimmerBadge width={ 200 }/>
        </div>
    );
};
