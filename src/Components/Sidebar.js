import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../Images/Logo.svg'
import { links } from '../Utils/constants'
import NavButtons from './NavButtons'
import { useSidebarContext } from '../Context/SidebarContext'
import { useUserContext } from '../Context/UserContext'


const Sidebar = () => {

    const { isSidebarOpen, closeSidebar } = useSidebarContext()
    const { currentUser } = useUserContext()

    return (
        <Wrapper>
            <aside className={isSidebarOpen ? "sidebar show" : "sidebar"}>
                <div className="sidebar-header">
                    <img src={logo} alt="" />
                    <button className="close-button" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="sidebar-links">
                    {
                        links.map(link => {
                            const { id, text, url } = link
                            return (
                                <li key={id}>
                                    <Link to={url} className="sidebar-link" onClick={closeSidebar}>
                                        {text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {
                        currentUser && (
                            <li>
                                <Link to="/checkout" className="sidebar-link" onClick={closeSidebar}>
                                    Checkout
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <NavButtons className="buttons" />
            </aside>
        </Wrapper>
    )

}


const Wrapper = styled.div `

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        transform: translateX(-100%);
        background: var(--white);
        transition: var(--transition);
        padding: 0rem 1rem 1rem 1rem;
    }

    .show {
        transform: translateX(0);
        z-index: 999;
    }

    .sidebar-header {
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 150px;
    }

    .close-button {
        font-size: 2rem;
        display: grid;
        place-items: center;
        background: transparent;
        border: none;
        color: var(--dark-red);
        transition: var(--transition);
        &:hover {
            color: var(--light-red);
        }
    }

    .sidebar-links {
        margin-bottom: 2rem;
        li {
            display: block;
        }
        .sidebar-link {
            font-size: 1rem;
            letter-spacing: var(--letter-spacing);
            display: block;
            height: 100%;
            padding: 1rem;
            transition: var(--transition);
            &:hover {
                background: var(--gray-100);
                padding-left: 1.5rem;
            }
        }
    }

    @media all and (min-width: 850px) {
        display: none;
    }

`


export default Sidebar
