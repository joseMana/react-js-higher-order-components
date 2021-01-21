import React, { PropsWithChildren } from 'react';

const Header: React.FC<PropsWithChildren<{}>> = (props) => {
    return <header className="header">
        {props.children}
    </header>
}

export default Header;