import "@/styles/blog-details.css";
import Image from 'next/image'
import _ from 'lodash'
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Link from "next/link";
import Router from 'next/router';
import moment from "moment";
import ReactSearchBox from "react-search-box";
const data = [
    {
        key: "john",
        value: "John Doe",
    },
    {
        key: "jane",
        value: "Jane Doe",
    },
    {
        key: "mary",
        value: "Mary Phillips",
    },
    {
        key: "robert",
        value: "Robert",
    },
    {
        key: "karius",
        value: "Karius",
    },
];

function blogDetail({ post, posts }) {
          const [filterdata,setFilterData]=useState(posts.map(item=>{return {key:item.slug,value:item.title}}))
    return (
        <>
            <NextSeo
                title={post.meta_title}
                description={post.meta_description}
            />
            <section className="blog-details-page">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li>
                                    <Link href="/">supercosts.com</Link> /
                                </li>
                                <li>{post.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="searchBlog">
                                <div className="dateCat">
                                    <span className="date">{moment(post.updated_at).format('LL')}</span>
                                    <span className="catg">{post.category.length > 0 && post.category[0].title}</span>
                                </div>
                                <div className="searchBox">
                                  
                                    <ReactSearchBox
                                        placeholder="Search Blog"
                                        value="Doe"
                                        data={filterdata}
                                        clearOnSelect={true}
                                        onSelect={(record) =>  Router.push('/blog/'+record.item.key)}
                                        leftIcon={<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row blogBox">
                        <div className="col-md-8 p-0">
                            <div className="blogContent">
                                <div>
                                    <h1 className="blogTitle">
                                        {post.title}
                                    </h1>
                                </div>
                                <div className="autorbox">
                                    <div className="authorImg">
                                        <img
                                            src="https://secure.gravatar.com/avatar/ec0a6ac9bd172932148a187240330fd8?s=450&d=mm&r=g"
                                            width={38}
                                            height={38}
                                            alt="Blog Author"
                                            title="Blog Author"
                                        />
                                    </div>
                                    <span className="authorName">Freida McFadden</span>
                                </div>
                                <div className="firstImage">
                                    <Image 
                                        src={`${post.image}`}
                                        alt="Featured Image" 
                                        width={0} 
                                        height={0} 
                                        layout="responsive"
                                        priority 
                                    />
                                </div>
                                <div className="blogcontentData" dangerouslySetInnerHTML={
                                    { __html: post.body }}>

                                </div>
                                {/* comment */}
                                <div className="commentbox">
                                    <div className="row comment mx-auto">
                                        <h3>Leave a Reply</h3>
                                        <p>
                                            Your email address will not be published. Required fields are
                                            marked <span>*</span>
                                        </p>
                                    </div>
                                    <div className="row input mx-auto">
                                        <form className="d-block" role="post">
                                            <textarea
                                                name=""
                                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                rows={10}
                                                placeholder="Input your thought ..."
                                                required=""
                                                defaultValue={""}
                                            />
                                            <label htmlFor="name" className="d-block">
                                                <i className="fa-regular fa-user" /> Name <span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                required=""
                                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                                            />
                                            <label htmlFor="email" className="d-block">
                                                <i className="fa-regular fa-envelope" /> Email <span>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                placeholder="Enter your email address"
                                                required=""
                                            />
                                            <label htmlFor="url" className="d-block">
                                                <i className="fa-solid fa-globe" /> Website
                                            </label>
                                            <input
                                                type="text"
                                                className="col-sm-12 col-md-10 col-lg-10 d-block"
                                                placeholder="website url"
                                            />
                                            <button type="submit" onclick="">
                                                Post Comment
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="sidebar">
                                <div className="newsLetterBox">
                                    <h4 className="sidebarHeading">Daily Discount Upadte</h4>
                                    <p>
                                        Unlock exclusive discounts, personalized deals, and early access
                                        to limited-time offers by subscribing to our daily newsletter.
                                        Join a community of SuperCosts and never miss out on savings
                                        again. Sign up now to start saving and make every purchase count!
                                    </p>
                                    <form action="NoWhere">
                                        <div className="inputBox">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-envelope"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                            </svg>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                                required=""
                                            />
                                        </div>
                                        <div className="consent">
                                            <small>
                                                We care about your data. Read our{" "}
                                                <a href="#">privacy policy</a> for more information.{" "}
                                            </small>
                                        </div>
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                                <div className="recentPost">
                                    <h4 className="sidebarHeading">Recent Posts</h4>
                                    {posts.slice(0, 4).map(item =>
                                        item.slug !== post.slug &&
                                        <Link href={`/blog/${item.slug}`} className="recentLink">
                                            <div className="authorImg">
                                                <img
                                                    src="https://secure.gravatar.com/avatar/ec0a6ac9bd172932148a187240330fd8?s=450&d=mm&r=g"
                                                    width={38}
                                                    height={38}
                                                    alt="Blog Author"
                                                    title="Blog Author"
                                                />
                                            </div>
                                            <div>
                                                <h2 className="recentTitle">
                                                    {item.title}
                                                </h2>
                                                <p className="recentDesc">
                                                    {item.body.replace(/(<([^>]+)>)/ig, '').substring(0, 235)}
                                                </p>
                                            </div>
                                        </Link>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {

    const res = await fetch(`https://backend.supercosts.com/posts/${params.slug}`)
    const post = await res.json()
    if (post.detail) {
        return {
            notFound: true
        };
    }
    const resPosts = await fetch(`https://backend.supercosts.com/posts/?ordering=-updated_at`)
    const posts = await resPosts.json()

    return {
        props: {
            post,
            posts
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch('https://backend.supercosts.com/posts')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((item) => ({
        params: { slug: item.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

export default blogDetail