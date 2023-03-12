import react from 'react';



const AboutUs = () => {

    return(
        <>
        
            <div className='container border border-secondary'>
                <h4 >
                This basically scraps the data inside the cart of an ecommerce website such as Amazon (for now).The data related to the product such as product name and product price. This was done by performing web scrapping in python using selenium and data was stored in the database mongoDB using Pymongo. So frontend was done using react app and backend was done using pymongo . The idea was to make it easy for the user to keep a track of the items added to cart across various ecommerce websites.

                </h4>
            </div>

        </>
    );
};

export default AboutUs;