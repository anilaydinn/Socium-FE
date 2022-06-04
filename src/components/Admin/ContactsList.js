import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../api/contactApi";
import { fetchContacts } from "../../redux/actions/contactActions";

const ContactList = (props) => {
  const { fetchContacts, contacts } = props;

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDeleteContact = async (contactId) => {
    await deleteContact(contactId);
    fetchContacts();
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Contact Messages</h1>
      </div>
      {contacts &&
        contacts.map((contact) => (
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="card-title">
                        <b>
                          {contact.name} {contact.surname}
                        </b>
                      </h6>
                      <p className="card-text">
                        <b>Email:</b> {contact.email} <br />
                        <b>Message:</b> {contact.message} <br />
                      </p>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteContact(contact.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
