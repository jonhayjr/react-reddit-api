import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import Components
import Header from './components/Header';
import Posts from './components/Posts';

const App = () => {

  //Set state   
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Function that gets API Data
  const getAPIData = () => {
    //Reset loading state to true
    setLoading(true);
    axios.get('https://www.reddit.com/r/reactjs.json')
      .then(res => {
        const newPosts = res.data.data.children.map(obj => obj.data);
        setPosts(newPosts);
        setLoading(false);
      })
  }

  //Use Effect hook to load API data on page load
  useEffect(getAPIData, []);

  return (
    <div className='container text-center mt-5'>
        <Header title='/r/reactjs'/>
        <Posts posts={posts} isLoading={isLoading}/>
    </div>
  );
}

export default App;
