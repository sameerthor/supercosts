'use client';

import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faSearch
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from 'axios';
import ReactSearchBox from "react-search-box";
import { useRouter } from 'next/router';

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const toggleRef = useRef(null);
    const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    const router = useRouter();
    const [postCategories, setPostCategories] = useState([]);
    useEffect(() => {
        axios.get('https://backend.supercosts.com/post-categories')
            .then(function (response) {
                // handle success
                console.log(response.data)
                setPostCategories(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    const [filterdata, setFilterdata] = useState([]);
    function fetchData() {
        axios.get('https://backend.supercosts.com/store-search/')
            .then(function (response) {
                var d = response.data.map(item => { return { key: item.slug, value: item.title } })
                setFilterdata(d);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
    return (
        <>
            <nav className="nav headerNav">
            <button className="navOpenBtn" aria-label="Open Navigation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
                <a href="/" className="logo">
                    Super<span>Costs</span>
                </a>
                <ul className="nav-links">
                <button className="navCloseBtn" aria-label="Close Navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                </svg>
        </button>

                    <li>
                        <Link className="link-hover" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link-hover" href="/stores">
                            Stores
                        </Link>
                    </li>
                    <li>
                        <Link className="link-hover" href="/blog">
                            Blog
                        </Link>
                    </li>
                    {/* <li>
                        <div className="dropdown dropdown-hover">
                            <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" href="/blog">
                                        All Blogs
                                    </Link>
                                </li>
                                {postCategories && postCategories.map((item, index) =>
                                    <li key={index}>
                                        <Link className="dropdown-item" href={`/blog/category/${item.slug}`}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </li> */}
                    <li>
                        <Link className="link-hover" href="/category">
                            Category
                        </Link>
                    </li>
                </ul>
                <div className='searchDropWrapper'>
                    <button id="searchIcon" className="search-icon" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                    </button>
                    {/* <div className="profile-wrapper">
                        <div
                        className="profile-icon"
                        id="profileToggle"
                        ref={toggleRef}
                        onClick={toggleDropdown}
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                           
                            viewBox="0 0 448 512"
                        >
                            <path
                            fill="#2ec4b6"
                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                            />
                        </svg>
                        </div>
                        <div
                        className="dropdown-menu"
                        id="profileDropdown"
                        ref={dropdownRef}
                        style={{ display: showDropdown ? 'block' : 'none' }}
                        >
                        <div className="dropdown-header">Albert Schultz</div>
                        <a href="/reward-dashboard" className="dropdown-item">
                            <i className="fa-solid fa-chart-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#2ec4b6"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3 13h2V7H3v6zm4 0h2V3H7v10zm4 0h2V9h-2v4z" />
                            </svg>
                            </i>
                            Dashboard
                        </a>
                        <a href="/user-profile" className="dropdown-item">
                            <i className="fa-solid fa-user">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#2ec4b6"
                                viewBox="0 0 448 512"
                            >
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                            </svg>
                            </i>
                            Profile
                        </a>
                        <a
                            href="/login"
                            className="dropdown-item"
                        >
                            <i className="fa-solid fa-right-from-bracket">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#2ec4b6"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 2a1 1 0 0 0-1 1v3h1V3h7v10H6v-3H5v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6z" />
                                <path d="M.146 8.354a.5.5 0 0 0 0-.708L3.793 4H2.5a.5.5 0 0 0 0 1h1.793L.146 7.646a.5.5 0 1 0 .708.708L4.293 9H2.5a.5.5 0 0 0 0 1h1.793L.146 8.354z" />
                            </svg>
                            </i>
                            Login
                        </a>
                        </div>
                    </div> */}
                </div>
                
                <div className="search-box">
               
                <ReactSearchBox
                    placeholder="Search Store"
                    value=""
                    className="search-box"
                    data={filterdata}
                    onFocus={() => fetchData()}
                    clearOnSelect={true}
                    onSelect={(record) => router.push('/' + record.item.key)}
                    leftIcon={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#2f3c97"
                        className="fa fa-search search-icon"
                        viewBox="0 0 20 20"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>}
                />
                </div>
                {/* <FontAwesomeIcon className='search-icon' id="searchIcon" icon={faSearch} /> */}
                
            </nav>

        </>
    )

}
