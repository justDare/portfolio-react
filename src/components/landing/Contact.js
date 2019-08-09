import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="container">
            <form className="contact2-form validate-form" action="https://formspree.io/dsampare04@gmail.com" method="POST">
                <h2 className="text-center">contact</h2>
                <div className="wrap-input2 validate-input" data-validate="Name is required">
                    <input className="input2" type="text" name="name" />
                    <span className="focus-input2" data-placeholder="NAME"></span>
                </div>

                <div className="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input2" type="text" name="email" />
                    <span className="focus-input2" data-placeholder="EMAIL"></span>
                </div>

                <div className="wrap-input2 validate-input" data-validate="Message is required">
                    <textarea className="input2" name="message"></textarea>
                    <span className="focus-input2" data-placeholder="MESSAGE"></span>
                </div>

                <div className="contact-form-btn">
                    <button className="bttn bttn__2 button__expand">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;