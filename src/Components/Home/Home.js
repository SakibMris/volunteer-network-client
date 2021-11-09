import React, { useEffect, useState } from 'react';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="d-flex justify-content-center align-items-center flex-column m-5">
            <div className="mb-3">
                <h1 className="fw-bold">I GROW BY HELPING PEOPLE IN NEED</h1>
            </div>
            <div class="input-group mb-3 w-50">
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button className="btn btn-primary" type="button" id="button-addon1">Search</button>
            </div>
            <div className="container-fluid row row-cols-1 row-cols-md-4 g-4">
                {
                    services.map(service =>
                        <div>
                            <div class="col">
                                <div class="card">
                                    <img style={{ height: "250px" }} src={service.imageURL} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{service.eventName}</h5>
                                        <p class="card-text">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;