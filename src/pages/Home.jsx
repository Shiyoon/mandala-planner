import React from "react";
import { useState } from 'react';

function Home() {
    const [main, setMain] = useState('');
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [six, setSix] = useState('');
    const [seven, setSeven] = useState('');
    const [eight, setEight] = useState('');
    const [nine, setNine] = useState('');

    return (
        <section className='content'>
        <div className='goal'>
            <h2>my main goal: {main}</h2>
        </div>

        <div className='blocks'>
            <form className='block'>
                <textarea disabled={!one}></textarea>
                <textarea disabled={!one}></textarea>
                <textarea disabled={!one}></textarea>
                <textarea disabled={!one}></textarea>
                <p>{one}</p>
                <textarea disabled={!one}></textarea>
                <textarea disabled={!one}></textarea>
                <textarea disabled={!one}></textarea>
                <textarea disabled={!one}></textarea>
            </form>      
            <form className='block'>
                <textarea disabled={!two}></textarea>
                <textarea disabled={!two}></textarea>
                <textarea disabled={!two}></textarea>
                <textarea disabled={!two}></textarea>
                <p>{two}</p>
                <textarea disabled={!two}></textarea>
                <textarea disabled={!two}></textarea>
                <textarea disabled={!two}></textarea>
                <textarea disabled={!two}></textarea>
            </form>  
            <form className='block'>
                <textarea disabled={!three}></textarea>
                <textarea disabled={!three}></textarea>
                <textarea disabled={!three}></textarea>
                <textarea disabled={!three}></textarea>
                <p>{three}</p>
                <textarea disabled={!three}></textarea>
                <textarea disabled={!three}></textarea>
                <textarea disabled={!three}></textarea>
                <textarea disabled={!three}></textarea>
            </form>  
            <form className='block'>
                <textarea disabled={!four}></textarea>
                <textarea disabled={!four}></textarea>
                <textarea disabled={!four}></textarea>
                <textarea disabled={!four}></textarea>
                <p>{four}</p>
                <textarea disabled={!four}></textarea>
                <textarea disabled={!four}></textarea>
                <textarea disabled={!four}></textarea>
                <textarea disabled={!four}></textarea>
            </form>  
            <form className='block main-block'>
                <textarea disabled={!main} value={one} onChange={(e) => setOne(e.target.value)}></textarea>
                <textarea disabled={!main} value={two} onChange={(e) => setTwo(e.target.value)}></textarea>
                <textarea disabled={!main} value={three} onChange={(e) => setThree(e.target.value)}></textarea>
                <textarea disabled={!main} value={four} onChange={(e) => setFour(e.target.value)}></textarea>
                <textarea className={`${main? 'main-goal': ''}`} value={main} onChange={(e) => setMain(e.target.value)}></textarea>
                <textarea disabled={!main} value={six} onChange={(e) => setSix(e.target.value)}></textarea>
                <textarea disabled={!main} value={seven} onChange={(e) => setSeven(e.target.value)}></textarea>
                <textarea disabled={!main} value={eight} onChange={(e) => setEight(e.target.value)}></textarea>
                <textarea disabled={!main} value={nine} onChange={(e) => setNine(e.target.value)}></textarea>
            </form>  
            <form className='block'>
                <textarea disabled={!six}></textarea>
                <textarea disabled={!six}></textarea>
                <textarea disabled={!six}></textarea>
                <textarea disabled={!six}></textarea>
                <p>{six}</p>
                <textarea disabled={!six}></textarea>
                <textarea disabled={!six}></textarea>
                <textarea disabled={!six}></textarea>
                <textarea disabled={!six}></textarea>
            </form>  
            <form className='block'>
                <textarea disabled={!seven}></textarea>
                <textarea disabled={!seven}></textarea>
                <textarea disabled={!seven}></textarea>
                <textarea disabled={!seven}></textarea>
                <p>{seven}</p>
                <textarea disabled={!seven}></textarea>
                <textarea disabled={!seven}></textarea>
                <textarea disabled={!seven}></textarea>
                <textarea disabled={!seven}></textarea>
            </form>  
            <form className='block'>
                <textarea disabled={!eight}></textarea>
                <textarea disabled={!eight}></textarea>
                <textarea disabled={!eight}></textarea>
                <textarea disabled={!eight}></textarea>
                <p>{eight}</p>
                <textarea disabled={!eight}></textarea>
                <textarea disabled={!eight}></textarea>
                <textarea disabled={!eight}></textarea>
                <textarea disabled={!eight}></textarea>
            </form>  
            <form className='block'>
                <textarea disabled={!nine}></textarea>
                <textarea disabled={!nine}></textarea>
                <textarea disabled={!nine}></textarea>
                <textarea disabled={!nine}></textarea>
                <p>{nine}</p>
                <textarea disabled={!nine}></textarea>
                <textarea disabled={!nine}></textarea>
                <textarea disabled={!nine}></textarea>
                <textarea disabled={!nine}></textarea>
            </form>  
        </div>
        </section>
    )
}

export default Home;
