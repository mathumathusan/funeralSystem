import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const data =[
    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      date:"24 Oct , 2021",
      comment:"136",
      name:"Mr Hxcdfrghdf Dehbbdfg ",
      live:"1950 - 2013",
      place:"Jaffna, Sri Lanka",
      area:"Toronto, Canada",
      about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      date:"24 Oct , 2021",
      comment:"136",
      name:"Mr Hxcdfrghdf Dehbbdfg ",
      live:"1950 - 2013",
      place:"Jaffna, Sri Lanka",
      area:"Toronto, Canada",
      about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      date:"24 Oct , 2021",
      comment:"136",
      name:"Mr Hxcdfrghdf Dehbbdfg ",
      live:"1950 - 2013",
      place:"Jaffna, Sri Lanka",
      area:"Toronto, Canada",
      about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      date:"24 Oct , 2021",
      comment:"136",
      name:"Mr Hxcdfrghdf Dehbbdfg ",
      live:"1950 - 2013",
      place:"Jaffna, Sri Lanka",
      area:"Toronto, Canada",
      about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    }
  ]








  return (
 <>
 <NavBar/>
<br/>
<br/>
<Card data={data}/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
 <Footer/>
 </>
  )
}

export default App
