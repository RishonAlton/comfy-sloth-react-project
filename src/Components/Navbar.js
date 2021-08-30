import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../Images/Logo.svg'
import { links } from '../Utils/constants'
import NavButtons from './NavButtons'
import { useSidebarContext } from '../Context/SidebarContext'
import { useUserContext } from '../Context/UserContext'


const Navbar = () => {

    const { openSidebar } = useSidebarContext()
    const { currentUser } = useUserContext()

    return (
        <Wrapper>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="hamburger-button" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {
                        links.map(link => {
                            const { id, text, url } = link
                            return (
                                <li key={id}>
                                    <Link to={url}>
                                        {text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {
                        currentUser && (
                            <li>
                                <Link to="/checkout">
                                    Checkout
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <NavButtons />
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.nav `

    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-center {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90vw;
        max-width: var(--max-width);
    }

    .nav-header {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        width: 175px;
    }

    .hamburger-button {
        display: grid;
        place-items: center;
        background: transparent;
        border: none;
        color: var(--primary-500);
        font-size: 2rem;
        transition: var(--transition);
    }

    .hamburger-button:hover {
        color: var(--primary-600);
    }

    .nav-links {
        display: none;
        li {
                margin: 0 0.5rem;
        }
        a {
            color: var(--gray-700);
            font-size: 1rem;
            letter-spacing: var(--letter-spacing);
            padding: 0.5rem;
            &:hover {
                border-bottom: 2px solid var(--primary-400);
            }
        }
    }

    .nav-buttons {
        display: none;
    }

    @media all and (min-width: 850px) {
        .nav-center {
            display: grid;
            grid-template-columns: auto 1fr auto;
        }
        .hamburger-button {
            display: none;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .nav-buttons {
            display: flex;
        }
    }

    @media all and (max-width: 275px) {
        img {
            width: 125px;
        }
        .hamburger-button {
            font-size: 1.5rem;
        } 
    }

`


export default Navbar
