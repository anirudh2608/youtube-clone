import { Helmet } from "react-helmet"

const HelmetCustom = (title = "Youtube Clone", description = "Project By Anirudh") => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default HelmetCustom