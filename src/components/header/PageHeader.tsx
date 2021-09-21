import React, {FC} from 'react';
import  cl from './PageHeader.module.scss'

const PageHeader:FC = () => {
    return (
        <div className={cl.headerWrapper}>
            <div className={cl.mainBlock}>
                <div className={cl.companyBlock}>
                    <div>
                        <div className={cl.companyLogo} >
                            <div className={cl.letter}>R</div>
                            <div className={cl.divForGap}></div>
                        </div>
                    </div>
                    <div className={cl.companyName}>
                        <span>requestum</span>
                        <div className={cl.companyInfo}>
                            web development company
                        </div>
                    </div>
                </div>
                <div className={cl.nameOfApp}>Github users search app</div>
            </div>
            <hr/>
        </div>
    );
};

export default PageHeader;