import React from "react";

const Icon = ({type}) => {
    switch(type){
        case 'eye-noslash':
            return(
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z" fill="black"/>
                    <path d="M12.0004 9.14001C10.4304 9.14001 9.15039 10.42 9.15039 12C9.15039 13.57 10.4304 14.85 12.0004 14.85C13.5704 14.85 14.8604 13.57 14.8604 12C14.8604 10.43 13.5704 9.14001 12.0004 9.14001Z" fill="black"/>
                </svg>
            )
        case 'eye-slash':
            return(
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2704 9.18005C20.9804 8.72005 20.6704 8.29005 20.3504 7.89005C19.9804 7.42005 19.2804 7.38005 18.8604 7.80005L15.8604 10.8001C16.0804 11.4601 16.1204 12.2201 15.9204 13.0101C15.5704 14.4201 14.4304 15.5601 13.0204 15.9101C12.2304 16.1101 11.4704 16.0701 10.8104 15.8501C10.8104 15.8501 9.38044 17.2801 8.35044 18.3101C7.85044 18.8101 8.01044 19.6901 8.68044 19.9501C9.75044 20.3601 10.8604 20.5701 12.0004 20.5701C13.7804 20.5701 15.5104 20.0501 17.0904 19.0801C18.7004 18.0801 20.1504 16.6101 21.3204 14.74C22.2704 13.2301 22.2204 10.6901 21.2704 9.18005Z" fill="#2B2B2B"/>
                    <path d="M14.0196 9.97989L9.97965 14.0199C9.46965 13.4999 9.13965 12.7799 9.13965 11.9999C9.13965 10.4299 10.4196 9.13989 11.9996 9.13989C12.7796 9.13989 13.4996 9.46989 14.0196 9.97989Z" fill="#2B2B2B"/>
                    <path d="M18.25 5.74993L14.86 9.13993C14.13 8.39993 13.12 7.95993 12 7.95993C9.76 7.95993 7.96 9.76993 7.96 11.9999C7.96 13.1199 8.41 14.1299 9.14 14.8599L5.76 18.2499H5.75C4.64 17.3499 3.62 16.1999 2.75 14.8399C1.75 13.2699 1.75 10.7199 2.75 9.14993C3.91 7.32993 5.33 5.89993 6.91 4.91993C8.49 3.95993 10.22 3.42993 12 3.42993C14.23 3.42993 16.39 4.24993 18.25 5.74993Z" fill="#2B2B2B"/>
                    <path d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z" fill="#2B2B2B"/>
                    <path d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z" fill="#2B2B2B"/>
                </svg>
            )
        case 'trash':
            return
        case 'edit':
            return
        case 'check':
            return
        default:
            return <></>;
    }
}

export default Icon;