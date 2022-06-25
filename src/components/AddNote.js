import React from 'react'

export const AddNote = () => {
  return (
    <div className='container'>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
          <small id="helpId" className="form-text text-muted">English Notes 1...</small>
        </div>
        <div className="form-group">
          <label htmlFor="">Tag</label>
          <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
          <small id="helpId" className="form-text text-muted">#like Science and other..</small>
        </div>
        <div className="form-group">
          <label htmlFor="">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <small id="helpId" className="form-text text-muted">Your Description is 10 to 50 Words </small>
        </div>
        <a href="" type='button' className='btn btn-primary'>Add Note</a>
    </div>
  )
}
