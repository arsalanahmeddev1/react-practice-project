import {videosData} from '../constants'
const Video = () => {
  return (
    <>
      <div className="video-wrap">
        {
          videosData.map((video) => {
            return (
              <>
              <img src={video.img} alt="" />
              <h3>{video.title}</h3>
              <h6>16 views</h6>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Video