import React from 'react'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton } from 'react-share'

const SocialShareButtons = ({url, title}) => {
  return (
    <div className='flex gap-3 mt-2'>
      <FacebookShareButton url={url} quote={title}>
        <i className='fa fa-facebook fa-2x hover:scale-105'></i>
      </FacebookShareButton>

      <TwitterShareButton url={url} quote={title}>
      <i className='fa fa-twitter fa-2x hover:scale-105'></i>
      </TwitterShareButton>

      <LinkedinShareButton url={url} quote={title}>
      <i className='fa fa-linkedin fa-2x hover:scale-105'></i>
      </LinkedinShareButton>

      <PinterestShareButton url={url} quote={title}>
      <i className='fa fa-pinterest fa-2x hover:scale-105'></i>
      </PinterestShareButton>
    </div>
  )
}

export default SocialShareButtons