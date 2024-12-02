import {   useContext, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Adding, Edit, Remove } from './Action/Action';
  
function App() {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.datas);

  const [data, setData] = useState("");   
  const [editId, setEditId] = useState(null);   
   
  const dataAdding = ()=>{
    if(data){
      const newData ={
        id:Date.now(),
        value:data,
      }
      dispatch(Adding(newData))
      setData("")
    }
  }
   
  const handleEdit = (item) => {
    setData(item.value);   
    setEditId(item. id);   
  };

  const dataDelete = (id) => {
    dispatch(Remove(id)); 
  };

  const dataUpdating = () => {
    if (editId && data) {
      const updatedData = {
        id: editId,        
        updatedData: { value: data },
      };
      dispatch(Edit(updatedData)); 
      setData(""); 
      setEditId(null); 
    }
  };
  
  const[theme,setTheme]=useState('light')

  const body =document.body
 theme=='light'?body.style.backgroundColor='white':body.style.backgroundColor='black'

 function handleclick(){
   theme=="light"?setTheme('dark'):setTheme('light')
 }

  return (
    <>    
    <input onClick={handleclick}  type="checkbox" name="" id="" />
    <label htmlFor="">DarkMode</label><br /><br />
<center style={{ height:'500px'}}>
<input style={{height:'50px',width:"50%",borderRadius:'20px'}} type="text" value={data}  onChange={(e) => setData(e.target.value)} />
       <button  style={{height:'50px',width:"7%",marginLeft:"10px",borderRadius:'20px'}} onClick={dataAdding}>Add</button>
        
      {
      
      editId && <button  style={{height:'50px',width:"7%",marginLeft:"10px",borderRadius:'20px'}} onClick={dataUpdating}>Update</button>
      }  
       <br /><br /><br /><br /><br />
      <div>
        <table>
          <thead style={{backgroundColor: '#009879',borderRadius:'30px'}}>
            <tr >
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody style={{backgroundColor:'#f3f3f3'}}>
            {datas.map((item) => (
              <tr key={item.id}>
                <td>{item.value}</td>
                <td>
                  <button style={{borderRadius:'20px'}} onClick={() => dataDelete(item.id)}><img src="./public/images/remove.png" width={20} style={{outline:'none',border:'none' }} alt="" /></button>
                  <button style={{borderRadius:'20px',marginLeft:"10px"}}  onClick={() => handleEdit(item)}> <img src="./public/images/edit-text.png" width={20} style={{border:'none'}} alt="" /> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
</center>
    
    </>
  );
}

export default App;
