import React from "react";
import { getData } from "../utils/data";
import ContactList from "./ContactList";
import ContactInput from "./ContactInput";


class ContactApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contacts: getData(),
        };

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteEventHandler(id){
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({contacts});
    }

    onAddContactHandler({name, tag}) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: '/images/default.jpg',
                    }
                ]
            }
        });
    }

    render() {
        return(
            <div className="contact-app">
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler}/>
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler}/>
            </div>
        )
    }
}

// const ContactApp = () => {
//     const contacts = getData();
//     console.log(contacts)

//     return (
//         <div className="contact-app">
//             <h1>Daftar Kontak</h1>
//             <ContactList contacts={contacts} />
//         </div>
//     )
// }

export default ContactApp;