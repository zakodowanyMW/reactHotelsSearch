import React from 'react';
import './featured.css';

function Featured() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/376384792.webp?k=301e61e82cc2b1f1168a019d5caa7a879d2d97c1499c983c0367ce2b213c0f8b&o=&s=1" alt="" />
                <div className="featuredTitles">
                    <h1>Sao Pedro</h1>
                    <h2>123 propertis</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/384574286.webp?k=2455d0bca46075ce429b69d3e5e0bb615dc5df3d154a20a3c3757721d57a8472&o=&s=1" alt="" />
                <div className="featuredTitles">
                    <h1>Doublin</h1>
                    <h2>534 propertis</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/259312265.webp?k=45aa2e952e44709a615407ad73f661335c0fff3726cc4ffd2b5c20fe7f7554ca&o=&s=1" alt="" />
                <div className="featuredTitles">
                    <h1>Majorca</h1>
                    <h2>888 propertis</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured