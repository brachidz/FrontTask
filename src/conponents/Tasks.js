import {React,useState,useEffect} from 'react';
import axios from 'axios';
import './Tasks.css';

export default  function Tasks() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJlMWNlMzVkODdiZmYxMzBiOTJlYyIsIm5hbWUiOiJCcmFjaGEiLCJpYXQiOjE2MzM4NzAyOTUsImV4cCI6MTYzNTA3OTg5NX0.IokUcLW1TsXWQtWRPSoirNdIvPCBURTPmLIhjOhZ41s";
    const[numOfTasks,setNumOfTasks]=useState(0);
    const[listOfTasks,setListOfTasks]=useState([]);
    const[numOfRemains,setNumOfRemains]=useState(0);
    const [task,setTask]=useState()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const bodyParameters = {
     title: task,
      body: "",
      done: 0
      };
    useEffect(()=>{
    axios.get( 
      'http://todo.etodo.xyz/api/v1/tasks',
       config
    )
    .then(res => {
        
        setListOfTasks( Object.values(res.data.docs));
        setNumOfTasks(res.data.docs.length);
        setNumOfRemains(res.data.docs.length);
       });
  });
  function  addTask() {
    axios.post( 
      'http://todo.etodo.xyz/api/v1/tasks',
      bodyParameters,
      config
    ).then(console.log).catch(console.log);
    
  }
  function  deleteTask(item) {
    let id=item._id;
    axios.delete( 
    `http://todo.etodo.xyz/api/v1/tasks/${id}`,
    config
    ).then(console.log).catch(console.log);
    
  }
  function  editTask(item) {
      let id=item._id;
      const bodyParametersForEdit = {
        title: task,
         body: item.body,
         
         done: item.done
         };
 
      axios.patch( 
      `http://todo.etodo.xyz/api/v1/tasks/${id}`,
      bodyParametersForEdit,
      config
    ).then(console.log).catch(console.log);
    
  }
  return (
    
<div >
<div className="row">
<div className="col-1" >

</div>
<div className="col-5" style={{fontSize:"1.4rem"}}>
<b>{numOfTasks} Tasks</b>
</div>
<div className="col-5" style={{fontSize:"1.1rem",top:'6px' ,position:'relative'}}>
<b>{numOfRemains} Remains</b>
</div>
<br></br>
<br></br>
<br></br>
<br></br>

{listOfTasks.map((item, index) => (
                  <div className="row" >
    
                  <div className="col-1"  >
              <input type="checkbox"  className="checked"></input>
                  </div>
                  <div className="col-9" style={{fontSize:"1.2rem",height:"3rem" , }} onClick={() => { editTask(item) }}>
                   {item.title}
                  </div>
                  <div className="col-2">
              <button   style={{ padding:'5px' ,borderRadius:'35px',backgroundColor:'white',fontSize:'15px',height:'2rem',width:'65px' ,float:'left',fontSize:'13px'}}  onClick={() => { deleteTask(item) }} >Delete</button>
                  </div>
              
              </div> 
                    
                ))}
                <div className="row">
                <div className="col-10">
                    <input  className="border" type="text" placeholder="Add Todo.." style={{borderRadius:'15px',fontSize:'11px',zoom:'1',height:'40px',width:'14rem',float:'left', padding:'10px'}}  onChange={e => setTask(e.target.value)}></input>
                </div>
                <div className="col-2">
<button style={{borderRadius:'20px',fontSize:'12px',zoom:'1',height:'40px' ,width:'50px',backgroundColor:'white' ,float:'left'}} id="inputAdd" onClick={() => { addTask() }}   > Add</button>
                </div>
                </div>





</div>
</div>
    
   
  );
}


