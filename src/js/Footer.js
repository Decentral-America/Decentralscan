import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/wavesplatform/'
}, {
    id: 'twitter',
    url: 'https://twitter.com/@wavesplatform'
}, {
    id: 'facebook',
    url: 'https://www.facebook.com/wavesplatform/'
}, {
    id: 'telegram',
    url: 'https://telegram.me/wavesnews'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version}</div>
            <div>Un producto de DecentralAmerica</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://decentralamerica.com" target="_blank">decentralamerica.com</a>
            </div>
        </div>
    );
}

export default Footer;
