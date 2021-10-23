import React, {useEffect,useState} from 'react'
import './covid.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Covid = () => {

  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try{
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      setData(actualData.statewise[0]);

    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {

    getCovidData();

  },[]);

  return(
    <>
    <section className="m-3 text-light"><strong>
    <div className="container text-center mt-5 ">
      <h2 id="head1">🔴 Livechgchg</h2> 
      <h3 id="head2">COVID-19 CORONAVIRUS 😷 TRACKER </h3>
    </div>

      <div className="m-3">
      <div className="card-group mt-5 ">
          <div className="card bg-primary m-2">
             <div className="card-body text-center ">
               <h5 className="card_name"><span> OUR </span> COUNTRY </h5>
               <h1 className="card_small"> INDIA </h1>
             </div>               
          </div>          
        

        
          <div className="card bg-warning m-2">
             <div className="card-body text-center">
               <h5 className="card_name"><span> TOTAL </span> RECOVERED </h5>
               <h1 className="card_small"> {data.recovered} </h1>
             </div>               
          </div>          
        

        
          <div className="card bg-success m-2">
             <div className="card-body text-center">
               <p className="card_name"><span> TOTAL </span> CONFIRMED </p>
               <h1 className="card_small"> {data.confirmed} </h1>
             </div>               
          </div>         
        
      </div>

      <div className="card-group mt-3">
        
          <div className="card bg-danger m-2">
             <div className="card-body text-center">
               <h5 className="card_name"><span> TOTAL </span> DEATH </h5>
               <h1 className="card_small"> {data.deaths} </h1>
             </div>               
          </div>          
        

        
          <div className="card bg-info m-2">
             <div className="card-body text-center">
               <h5 className="card_name"><span> TOTAL </span> ACTIVE </h5>
               <h1 className="card_small"> {data.active} </h1>
             </div>               
          </div>          
        

        
          <div className="card bg-secondary m-2">
             <div className="card-body text-center">
               <h5 className="card_name"><span> LAST </span> UPDATED </h5>
               <h1 className="card_small"> {data.lastupdatedtime} </h1>
             </div>               
          </div>          
        


      </div>
      </div></strong>

      <div className="footer mt-5">
      <p>MadeBy: Ajoe <br/> MadeIn: India</p>
      </div>
    </section>
    </>
    )
}

export default Covid;
