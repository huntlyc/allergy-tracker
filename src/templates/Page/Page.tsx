import React, { FunctionComponent } from 'react';
import {Link} from "react-router-dom";


interface PageProps {
    title: string,
}

const Page:FunctionComponent<PageProps> = ({title = 'Allergy Diary', children}) => {

    return (
        <>
            <header className="container">
                <div className="row">
                <div className="col">
                    <h1 className="text-center">
                        <Link to="/">{title}</Link>
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