import React from 'react';


interface Props {
    children?: any;
}

const withUserCard: React.FC<Props> = ({ children }) => {


    return (
        <div>
            {children}
        </div>

    )
}

export default withUserCard;
