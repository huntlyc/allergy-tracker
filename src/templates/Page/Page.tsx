import React, { FunctionComponent } from 'react';
import {Link} from "react-router-dom";


interface PageProps {
    title: string,
}

const Page:FunctionComponent<PageProps> = ({title, children}) => {

    let displayTitle = 'Allergy Diary';
    if(title !== ''){
        displayTitle = title;
    }

    return (
        <>
            <header className="container">
                <div className="row">
                <div className="col">
                    <h1 className="text-center">
                        <Link to="/">{displayTitle}</Link>
                    </h1>
                </div>
                </div>
            </header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};


export default Page;