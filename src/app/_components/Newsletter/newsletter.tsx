import React from 'react';
import clsx from 'clsx';

const Newsletter: React.FC<{ isFooter?: boolean, isAside?: boolean }> = ({ isFooter, isAside }) => {

  if (isAside) {
    return (
      <div className="widget">
        <h6 className="widget-title">Newsletter</h6>
        <div className="side-newsletter">
          <form>
            <input type="email" placeholder="Enter Your email Addres..." />
            <label>
              <input type="checkbox" />
              I agree terms of newsletter.
            </label>
            <input type="submit" value="JOIN NOW" />
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className={clsx({ 'newsletter-box': isFooter }, { 'side-newsletter': !isFooter })}>
      <h3>{isFooter ? "SUBSCRIBE TO OUR NEWSLETTERS" : 'OUR NEWSLETTERS'}</h3>
      <p>Now to get notified about exclusive offers every week!</p>
      <form>
        <input type="email" placeholder="Enter Your email Address..." />
        {/* {isFooter && <input type="submit" value="JOIN NOW" />} */}
        <label>
          <input type="checkbox" />
          {isFooter ? 'I would like to receive news and special offers.' : 'I agree to the terms of the newsletter.'}
        </label>
        <input type="submit" value={isFooter ? 'JOIN NOW' : 'SUBSCRIBE'} />
      </form>
    </div>
  );
};

export default Newsletter;
