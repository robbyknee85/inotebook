import React from 'react'
// import noteContext from '../contex/notes/noteContext'



export default function Home() {
  // const {notes,setNotes}=useContext(noteContext);
  return (
    <div>
          <div class="container-fluid">
            <div class="row">
                <div className='col-md-6 description-text'>
                      <h2>Cloud Book</h2>
                      <p>""The first cloud reader comes to my mind is Kindle Cloud Reader, also called Amazon Cloud Reader which was free and web-based. If you purchase kindle books a lot, Kindle Cloud Reader is the ideal opportunity to read and manage your ebooks online. What's more, it has the core reading function, such as highlights, notes, change fonts and font-size or search within a book, remember your reading location etc.""</p>
                </div>  
                <div className='col-md-6 description-img'>
                  <img src='https://media.istockphoto.com/vectors/office-worker-in-casual-clothes-sitting-at-desk-and-working-on-laptop-vector-id1263794117?k=20&m=1263794117&s=612x612&w=0&h=nuNqv6BsdFo9Jrqs126MNlzW3AMAg94k-8QKCHG_iJg=' alt=''></img>
                </div>  
            </div>
          </div>
    </div>
  )
}
