import React from 'react'
import "../content.css";

const Education = () => {
  return (
    <div>
      <h2 className='headings' >Education</h2>
      <ul style={{listStyle:"none"}}>
        <li>Bachelor of Technology - Computer Science
          <p>Mar Athanasius College of Engineering, Kothamangalam, Kerala | 2018-2022
            <br />
            CGPA: 8.96 
          </p>
          
        </li>
        <li>Higher Secondary Education - Science
        <p>Vimalagiri Public School, Kothamangalam, Kerala | 2016 - 2018
          <br />
          Percentage: 80% </p>
        </li>
        <li>Secondary Education (10th)
          <p>St. Thomas Public School, Iringole, Ernakulam, Kerala | 2015 - 2016
            <br />
            Percentage: 95%</p>
        </li>
        
      </ul>
    </div>
  )
}

export default Education