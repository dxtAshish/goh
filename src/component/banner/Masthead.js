import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Masthead = ({
    mastHead
}) => {
    useEffect(() => {
      console.log(mastHead,"this is masthead ")
    }, [mastHead])
    
  return (
    mastHead&&<div>
    
    <section id="sm-banner" className="section-p1">
        <Link to={`products/${mastHead[0].title}`} className="banner-box cursor-pointer bg-cover" style={{"background":`url(${mastHead&& mastHead[0].image})`,"backgroundSize":"cover"}}>
            <h4>crazy deals</h4>
            {/* <h2>buy 1 get 1 free</h2> */}
            <span>The best classic dress is on scale at Guarantee Ornament </span>
            <button className="white">Learn More</button>
        </Link>
        <Link to={`products/${mastHead[1].title}`}  className="banner-box cursor-pointer banner-box2 bg-cover" style={{"background":`url(${mastHead&& mastHead[1].image})`,"backgroundSize":"cover"}}>
            <h4>spring/summer</h4>
            <h2>upcomming season</h2>
            <span>The best classic Jewellery is on scale at Guarantee Ornament </span>
            <button className="white">Collection</button>
        </Link>
    </section>

    {/* <section id="banner3">
        <Link to={`products/${mastHead[2].title}`}  className="banner-box cursor-pointer bg-cover " style={{"background":`url(${mastHead&& mastHead[2].image})`}}>
            
           
        </Link>
        <Link to={`products/${mastHead[3].title}`}  className="banner-box cursor-pointer  banner-box2 " style={{"background":`url(${mastHead&& mastHead[3].image})`}}>
           
        </Link>
        <Link to={`products/${mastHead[4].title}`}  className="banner-box cursor-pointer  banner-box3 " style={{"background":`url(${mastHead&& mastHead[4].image})`}}>
         
        </Link>
    </section> */}
</div>
  )
}

const mapStateToProps = (state)=>{
    const {mastHead} = state.variables
    return {
        mastHead
    }
}


export default connect(mapStateToProps) (Masthead)