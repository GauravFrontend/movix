import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const {data,loading} = useFetch(`/trending/all/${endpoint}`)
    const onTabChange = (tab) => {
        setEndpoint(tab === "day" ? "day" : "week");
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper className="contentWrapper">
                <span className='carouselTitle' >Trending</span>
                <SwitchTabs onTabChange={onTabChange} data={["Day","Week"]}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    )   
}

export default Trending