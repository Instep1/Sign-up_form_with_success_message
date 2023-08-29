import React from 'react';
import illustrationDesk from '../assets/img/illustration-sign-up-desktop.svg';

const MyForm = () => {
    return (
        <form action="">
            <div>
                <h1>Stay updated!</h1>
                <div>Join 60,000+ product managers receiving monthly updates on:</div>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <label htmlFor="">Email address</label>
                <input type="text" />
                <button>Subscribe to monthly newsletter</button>
            </div>
            <div>
                <img src={illustrationDesk} alt="picture_welcome" />
            </div>
        </form>
    );
};

export default MyForm;