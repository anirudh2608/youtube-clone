import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchCategoryVideosStart, fetchPopularVideosStart } from "../../store/videos/videos.action"

import { selectNextPageToken } from "../../store/videos/videos.selector"

import "./_categoriesbar.scss"

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
]

const CategoriesBar = () => {

    const dispatch = useDispatch()

    const nextPageToken = useSelector(selectNextPageToken)

    const [activeElement, setActiveElement] = useState("All")

    const handleClick = (value) => {
        setActiveElement(value)

        if (value === "All") {
            dispatch(fetchPopularVideosStart(nextPageToken))
        } else {
            dispatch(fetchCategoryVideosStart(value, nextPageToken))
        }
    }


    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => (
                <span
                    onClick={() => handleClick(value)}
                    key={i}
                    className={activeElement === value ? 'active' : ""}
                >{value}</span>
            ))}
        </div>
    )
}

export default CategoriesBar