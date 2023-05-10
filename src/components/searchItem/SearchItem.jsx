import React from 'react';
import './searchItem.css';

function SearchItem() {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt=""  className='siImg'/>
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Studio apartment with Air conditioning</span>
          <span className="siFeatures">Entire studio - 1 bathroom - 21m2 1 full bed</span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">You can cancel latter, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>9.8</button>
          </div>
          <div className="diDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className='isCheckButton'>See availibility</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem