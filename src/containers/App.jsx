import React , {useState , useEffect} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



function App() {

  

    const [robots , setRobots] = useState([])
    const [searchBoxChange , setSearchBoxChange] = useState('')

  const  UpdateSearchBox = (event) => {
    setSearchBoxChange(event.target.value);

    };


 

    useEffect(() => {
               fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()).then(users => setRobots(users))
    }, [])


  

    
        const filtterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchBoxChange.toLowerCase())
        })


        return !robots.length ?
            <h1>loading</h1>
            : (


                <React.Fragment>
                    <h1 className="search1 bg-warning" >RoboFriends</h1>

                    <SearchBox searchBoxChange={UpdateSearchBox} />


                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filtterRobot} />
                        </ErrorBoundry>
                    </Scroll>

                </React.Fragment>


            )


    }
    

export default App;