import React from 'react'

const PostReview = () => {
  return (
    <div>
      <div id='pro'>Product Review</div>
      <form>
        <label htmlFor='Product Name'>Product Name</label>
        <input type='Text' id='ProName' name='Product Name' placeholder='Product Name' />


        <label htmlFor='Purchase Date'>Purchase Date</label>
        <input type='date' id='Purdate' name='Purchase Date' />


        <label htmlFor='Product Review'>Product Review</label>
        <input type='textarea' id='ProReview' name='Product Review' placeholder='Product Review' />

        <label htmlFor='Product Image'>Product Image</label>
        <input type='file' multiple id='Image' name='Product Image' />

        <button>Post Review</button>

      </form>
    </div>
  )
}

export default PostReview