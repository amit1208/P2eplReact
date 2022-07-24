import React,{useEffect, useState} from 'react'
// import React,{ useState} from 'react'
import Axios from 'axios';

const Testimony = () => {

      
    const [test, settest] = useState()



useEffect( () => {
  
       Axios.get('http://localhost:5000/view/')
       .then((res)=>{
           settest(res.data)
           console.log(res.data)
           
        })
        
    
}, [])


  


  return (
      <div>
            <section id="testimonial" className="testimonial-area">
                <div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-10">
                                <h4 className="title">Testimonial</h4>
                                <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            </div>
                        </div>
                    </div>
                    
         
                        
                    
                    

                            <div  className="row testimonial-active">
                       {test.map((mine) => { return (
                                <div key={mine._id} className="col-lg-4">
                                    <div className="single-testimonial mt-30 mb-30 text-center">
                                        <div className="testimonial-image">
                                            <img src="assets/images/author-3.jpg" alt="Author"/>
                                        </div>
                                        <div className="testimonial-content ">
                                            <p className="text">{mine.Testimonial_Description}</p>
                                            <h6 className="author-name">{mine.Name}</h6>
                                            <span className="sub-title">{mine.Post}</span>
                                        </div>
                                    </div>
                                </div>
                                 )})}
                            </div>

                      

                       
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="row testimonial-active">
                                <div className="col-lg-4">
                                    <div className="single-testimonial mt-30 mb-30 text-center">
                                        <div className="testimonial-image">
                                            <img src="assets/images/author-3.jpg" alt="Author"/>
                                        </div>
                                        <div className="testimonial-content ">
                                            <p className="text">dfadfaklsfa</p>
                                            <h6 className="author-name">safnklsanfklsf</h6>
                                            <span className="sub-title">jflkajs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div> */}
                    

                           
                            
                            
         
            
                </div>
            </section>
    </div>
  )
        }

export default Testimony