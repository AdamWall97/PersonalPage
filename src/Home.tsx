import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {

  var settings = {
    infinite: true,
    outerWidth:300,
    speed: 500,
    dots: false,
    draggable: false,
    swipe: false,
    autoplaySpeed: 2000,
    vertical: true,
    autoplay: true,
    arrows: false
  }
  return (
    <div>
      <div className="jumbotron bg-secondary pr-5">   
      <div className="row pr-5">
        <div className="col-xl-8 mt-5">
        <div className=" d-flex flex-row-reverse text-right">
          <div style={{"fontSize": "7rem"}}>
            Engineer
          </div>
          <div className="text-right pr-4" style={{"fontSize": "7rem"}}>
            <Slider {...settings} >
            <div>Software</div>
            <div>Automation</div>
            <div>Mechanical</div>
            <div>Test</div>
            </Slider>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <h1 className="col-lg-10 mt-5 pt-5 text-right">I'm Adam! I'm an ambitious engineer looking to merge my coding skills with my technical background.</h1>
        </div>
          </div>
        <div className="col-xl-4 d-flex">
          <img src="./Headshot.JPG" className="ml-auto mr-5" alt="Headshot" height="600" style={{"borderRadius":"50%"}} />
        </div>
      </div>
      </div>
      <div className="row m-2">
        <div className="col-md">
        <div className="card h-100">
          <i className="bi bi-gear card-img-top text-center text-primary" style={{"fontSize":"10rem"}}></i>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Engineering Background</h5>
            <p className="card-text">I have 1.5 years of experience with mechanical test engineering and 1.5 years of experience with full stack software development. I obtained a mechanical engineering degree from the University of Minnesota with a minor in computer science.</p>
            <a href="/experience" className="btn btn-primary">Go to Experience</a>
          </div>
          </div>
        </div>
        <div className="col-md"><div className="card h-100">
          <i className="bi bi-code-slash card-img-top text-center text-primary" style={{"fontSize":"10rem"}}></i>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Professional Coding Skills</h5>
            <p className="card-text">I have experience coding professionally with Typescript, React, .NET / C#, and Visual Basic. I have worked in many different technical teams that has led me to use my coding skills for real world applications.</p>
            <a href="/skills" className="btn btn-primary">Go to Skills</a>
          </div>
          </div> 
        </div>  
      </div>
    </div>
  );
}
export default Home;
