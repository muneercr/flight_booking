import Nav from "@/components/nav";
import Homepage from "./home";
import Footer from "@/components/footer"; 

 

export default function Home() {
  return ( 
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Nav/>
        <Homepage/> 
        <Footer/>
      </div>

    </div>
  )
}
