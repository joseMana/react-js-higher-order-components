import React, { PropsWithChildren } from 'react';

type Props = {
    footerContent: React.ReactNode
}

const Footer: React.FC<PropsWithChildren<Props>> = (props) => {
    return <footer className="footer">
        <div>{props.footerContent}</div>
    </footer>
}

export default Footer;