import React from "react";

let companies = [
  {
    name: "Colorz",
    from: "2014",
    to: "2016",
  }
  ,
  {
    name: "Danka",
    from: "2017",
    to: "2021",
  },
  {
    name: "Freelance",
    from: "2021",
    to: "Today",
  },
  {
    name: "LG2",
    from: "2023",
    to: "Today",
  }
]
function About() {
    
    return(
        <div className="about-section">
          <div className="leftInfo">
            <p>I craft websites <br></br>with a <span id="great">great <br></br> attention</span> to <br></br> details</p>
          </div>
        <div className="rightInfo">
          <div>
          <p>I have 6+ years of experience in front-end development.<br></br>
          I love working on smooth 2D animations and challenging layouts.
          </p><br></br>
          <p>Technologies I commonly use : SCSS, Javascript (ES2020), Nuxt3, Wordpress, DatoCMS, GSAP, Vite, Webpack.</p>
          </div>
          <table className="companies-container">
            <tbody>
            {companies.map((company,index)=>{
                return (
                  <tr key={index} className="company">
                    <td>{company.name}</td>
                    <td>{company.from}</td>
                    <td>{company.to}</td>
                  </tr>
                )
            })}
            </tbody>
          </table>
        </div>
        </div>
    )
}


export default About;