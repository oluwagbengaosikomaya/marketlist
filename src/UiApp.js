import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./ui_component/Header";
import Navbar from "./ui_component/Navbar";
// import PageContent from "./ui_component/PageContent";
import Footer from "./ui_component/Footer";
import Students from "./ui_component/Students";


import "./main.css";  //how to import using css... by external js.



function UiApp(){
  let amount = 2000; //how to pass props. parent to childres
  let cartCount = 2;

  let programmers = [{
    name:'john', score:23,
    name:'ola', score:33,
    name:'yemi', score:45,
    name:'sule', score:23,
    name: 'goke', score:15,
    name: 'yemisi', score:49
}]


 // let students = ["kayode", "samson","gbenga","junior"];

  //every functional component must return a jsx
  return(
    <div className="container">
      <Header amt = {amount} ccc = {cartCount} />
      <Navbar xyz = {amount} ddd = {cartCount} />
      {/* <PageContent students = {students}/> */}
      <Footer/>
      <Students pro = {programmers}/>
     
    </div>
  )


}
export default UiApp;