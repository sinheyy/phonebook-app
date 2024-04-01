import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const ContactList = () => {
    const { contactList, searchName } = useSelector(state => state)
    let [searchList, setSearchList] = useState([]);

    // searchName, contactList 지켜보다가 바뀌면 실행
    useEffect(() => {
        if (searchName == "") {
            setSearchList(contactList);
        }
        else {
            let tempList = contactList.filter((item) => (item.name.includes(searchName)));
            setSearchList(tempList);
        }

    }, [searchName, contactList]);

    return (
        <div>
            <SearchBox />
            {searchList.map((item) => (
                <ContactItem item={item} />
            ))}
        </div>
    )
}

export default ContactList
