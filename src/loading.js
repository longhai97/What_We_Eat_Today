import * as React                                        from 'react';
import { ShimmerBadge, ShimmerThumbnail, ShimmerTitle, } from "react-shimmer-effects";


export const Loading = (props) => {
    return (
        <div>
            <ShimmerThumbnail height={ 300 } width={ 500 } className="m-0" rounded/>
            <ShimmerBadge width={ 200 }/>
            <ShimmerBadge width={ 200 }/>
            <ShimmerBadge width={ 200 }/>
            <ShimmerTitle/>
        </div>
    );
};
