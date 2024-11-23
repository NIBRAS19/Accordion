import React, { useState } from 'react';

const Accordions =({accordionData}) => {  

    const [open, setOpen] = useState([]);

    console.log(open);

    const accordionHandler = (id) => {
        setOpen((prevopen) => {
            return open.includes(id) ? prevopen.filter((acc_id) => acc_id !== id) : [...prevopen, id]
        })
    }
    


    return (
        <div className="accordion-container">
            {accordionData?.map(({ id, title, description })=> (
                <div className="accordion-item" key={id}>
                    <div className="accordion-title" onClick={() => accordionHandler(id)} >
                        <h2>{title} <span className="accordion-icon">+</span></h2>
                    </div>
                    {
                        open?.map((acc_id, index)=>(
                            acc_id === id && (
                                <div className="accordion-content" key={index}>
                        <p>{description}</p>
                    </div>
                            )
                        ))
                    }
                </div>
            ) 
        )}
        </div>
    );
};

export default Accordions;