import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./style.scss"
import Img from '../../../components/lazyLoadImage/img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const HeroBanner = () => {
    const navigate = useNavigate();
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const { data, loading } = useFetch("/movie/upcoming")
    const { url } = useSelector((state) => state.home)

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data]);


    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }
    const buttonSearch =() => {
        if (query.length>0){
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className="heroBanner">
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
<div className="opacity-layer">
    
</div>
            <ContentWrapper><div className="heroBannerContent">
                <span className="title">Welcome.</span>
                <span className="subTitle">  Millions of movies, TV shows and people to discover.
                    Explore now.</span>
                <div className="searchInput">
                    <input type="text" placeholder='Search for Movies or TV Shows...' onKeyUp={searchQueryHandler}
                        onChange={(e) => setQuery(e.target.value)} />
                    <button onClick={buttonSearch}>Search</button>
                </div>
            </div></ContentWrapper>

        </div>
    )
}

export default HeroBanner