import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';

const footer=()=>{
    const style={
        height:'50px',
        fontFamily:'Roboto Mono'
    }
    return(
            <footer className='bg-dark w-100' style={style} >
                <section className="containter text-light text-center p-2">
                    <p>Copyright © 2020 MorePlex, Inc.</p>
                </section>
            </footer>
    )
}

export default footer;