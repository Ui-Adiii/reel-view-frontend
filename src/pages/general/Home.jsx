import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../styles/reels.css'
import ReelFeed from '../../components/ReelFeed'
import { backendUrl } from '../../App';
import { toast } from 'react-toastify';

const Home = () => {
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        axios.get(`${backendUrl}/api/food/`, { withCredentials: true })
            .then(response => {
                if(response.data.success)
                    setVideos(response.data.foodItems)
            })
            .catch((err) => { toast.error(err.message) })
    }, [])


    async function likeVideo(item) {
        const response = await axios.post(`${backendUrl}/api/food/like`, { foodId: item._id }, {withCredentials: true})
        if(response.data.like){
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: v.likeCount + 1 } : v))
        }else{
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: v.likeCount - 1 } : v))
        }
    }

    async function saveVideo(item) {
        const response = await axios.post(`${backendUrl}/api/food/save`, { foodId: item._id }, { withCredentials: true })
        if(response.data.save){
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, saveCount: v.saveCount + 1 } : v))
        }else{
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, saveCount: v.saveCount - 1 } : v))
        }
    }

    return (
        <ReelFeed
            items={videos}
            onLike={likeVideo}
            onSave={saveVideo}
            emptyMessage="No videos available."
        />
    )
}

export default Home