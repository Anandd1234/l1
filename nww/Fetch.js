import React from "react";
import { useState, useEffect } from "react";
import './Fetch.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Fetch(){
  const [find_title,setfindtitle]=useState();
  const Navigate=useNavigate();
  const BlogPost=()=>{
    Navigate('/Blog')
  };
  const EditBlog=()=>{
    Navigate('/edit');

  };
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      // Fetch data when the component mounts
      fetchData('/blog');
    }, []);
  
    const fetchData = async () => {
      try {
       {/* const response = await fetch('https://localhost:7010/api/Blog');*/}
       const response = await fetch('https://localhost:7019/api/Blog')
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
         

        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error.message);
      }
    };
    const handleLogout = () => {
      // Clear session logic (e.g., removing tokens, clearing state)
      // Redirect to the login page
      Navigate('/');
    };
   
    const [showFormForCards, setShowFormForCards] = useState([]);
    const toggleFormForCard = (index) => {
      setShowFormForCards(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    };
    {/**comment insertion started from this point  */}
    const[UserName,setusername]=useState();
    const[DateToday_Find,setDateToday]=useState(new Date());
    const[Message,setmessage]=useState();
    const handel_username=(event)=>{
   setusername(event.target.value);
    };
    var DateToday=DateToday_Find.toISOString();
    const handlesubmitted = async (event) => {
      event.preventDefault();
      
      try {
        const response = await fetch('https://localhost:7019/api/Comment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({UserName,DateToday,Message}),
        });
  
        if (response.ok) {
          alert('You commented successfully');
          setusername('');
     
          
          
          // You may want to reset the form fields or do other actions upon successful insertion
         
        } else {
          // Handle error response
          alert('not commented comment again again...');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
      };
    };

    {/**comment insertion ends from this point  */}
    return(
        <>
      {/*}   <div>
      <h2>User List</h2>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} {user.title} - {user.body}
          </li>
        ))}
      </ul>
        </div>*/}



        {/**--------------------------------------------------------------------------------------------------- */}
             <div id="n1">
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
  <div className="container-fluid" >
    <a className="navbar-brand" href="#">Blogging.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=""   onClick={BlogPost}>Create Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="" onClick={EditBlog}>Update Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="">Contact me</a>
        </li>    
      </ul>      
    </div>
    <select name="" id="b2" onChange={handleLogout}>
    <option value="Log out" selected>haii anand</option>  
    
    <option value="Log out" >Log out</option>
 
      </select>
      
 
  </div>
</nav>
</div>
      
        {/**-------------------------------------------------------------------------------------------------------------------------- */}
         <div className="container-fluid">
            <div className="row">
                <div className="col-3 d-none d-sm-block" id="l7">

                </div>
                <div className="col-lg-6 col-sm-12">
            
              {/**card */}
                 <ul  className="aa3">
                {users.map((user,index) => (
          <li key={user.id}>
              <div className="card" id="c1" >    
            <div class="card-body">
                <label>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg> <span id="l5"> {user.userName}</span>
                </label>
               <br/><br/>
                <label id="l6">Date Posted</label>
                <h5 className="float-left" id="f3">{user.dateToday}</h5>
                <label id="l6">Title</label>
            <h5 class="card-title" id="l3">{user.title}</h5>
            <label id="l6">Subject:</label>
            <h6 class="card-subtitle mb-2  " id="l4">{user.subject}</h6>
            <label id="l6">Body:</label>
            <p class="card-text" id="l5">{user.body}</p>
          
            
              {/*This the starting point of comments*/}
           
                 {/* Existing card content... */}
          <button onClick={() => toggleFormForCard(index)}>&nbsp;Comment  &nbsp; &nbsp;</button>
          {showFormForCards[index] && (
            <form onSubmit={handlesubmitted}>
             
              <label>
               
                Message:
                <input type="text" value={UserName} onChange={handel_username} />
              
              </label>
              <input type="text" value={user.title} 
             onChange={()=>setmessage(user.title)}
              
              /> 
              {/* Add other necessary input fields */}
              <button type="submit">Send</button>
            </form>
          )}
            
            {/*this is the ending point of the comments*/}
          <button>&nbsp;Edit</button>
            </div>
            
            </div>
            <br/>
          </li>
       ))}  
      </ul> 
    
        

                </div>
                <div className="col-3 d-none d-sm-block" id="l8">
              
                </div>
            </div>

        </div>
        {/*footer section starts*/}
        <footer class="footer">
  <div class="footer-content">
    <div class="footer-logo">
    
      <h3>Blogging.com</h3>
      </div>
      </div>
  
  
  <div class="footer-bottom">
    <p>&copy; 2023 Your Brand. All rights reserved.</p>
  </div>
</footer>

        </>
    );
};
export default Fetch;