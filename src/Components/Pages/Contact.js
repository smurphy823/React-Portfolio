import React from "react";
import Wrapper from "../Wrapper";
import '../styles/contact.css';

function Contact() {
    return (
        <>
            <Wrapper>
                <section className="container bg-cover p-2">
            

                    <section className="row m-3 p-3">
                        <section className="col-sm-9">
                            <h1 className="display-5 text-info">Contact</h1>
                        </section>
                    </section>

                    <section className="card p-2 m-4">
                        <section className="card-body">

                            <section className="row gx-5 mb-3">
                                <section className="col">
                                    <label for="lableName" className="form-label">Name</label>
                                    <input type="email" className="form-control" id="lablename" placeholder="name" />
                                </section>
                            </section>


                            <section className="row gx-5 mb-3">
                                <section className="col">
                                    <label for="lableemail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="lableemail" placeholder="email" />
                                </section>
                            </section>


                            <section className="row gx-5 mb-3">
                                <section className="col">
                                    <label for="lablemessage" className="form-label">Message</label>
                                    <textarea className="form-control" id="lablemessage" rows="4s" placeholder="message"></textarea>                         </section>
                            </section>


                            <section className="col-12 ml-1 p-2">
                                <button type="submit" className="btn btn-info">Submit</button>
                            </section>
                        </section>
                    </section>
                </section>
            </Wrapper>
        </>
    );
}

export default Contact;
