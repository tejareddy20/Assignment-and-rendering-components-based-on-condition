function Name(){
    const students= [{name:"student1",
                    age:21,
                    marks:90},
                    {name:"student2",
                        age:23,
                        marks:95
                    },
                    {name:"student3",
                        age:25,
                        marks:98
                    }];
    

    return(
        <>
        <h1>Student details</h1>
        <table border="1px">
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
                {students.map((ele,idx) => <tr key={idx}>
                                            <td>{ele.name}</td>
                                            <td>{ele.age}</td>
                                            <td>{ele.marks}</td>
                                        </tr>)}
            </tbody>
        </table>
        </>
    )
}

function Cars(){
    const cars = [{
        image:"https://mediapool.bmwgroup.com/cache/P9/202104/P90417929/P90417929-first-view-on-the-upcoming-bmw-i4-pre-production-model-shown-3-2021-2250px.jpg",
        name:"BMW",
        milage: "80kmph",
        price: "20lacs"
        },
        {
        image:"https://th.bing.com/th/id/R.0558be3d121d1dedba488b82d45ce1b6?rik=np7EY9%2fXR14LaQ&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f4200000%2faudi-cars-audi-4294880-1280-933.jpg&ehk=a0Ih%2f%2fn9BcW7Q3zSBs2DHfFd%2fkKL6TeBrlP%2bCwR2%2feU%3d&risl=&pid=ImgRaw&r=0",
        name:"Audi",
        milage: "70kmph",
        price: "30lacs"
        },
        {
        image:"https://ic1.maxabout.us/autos/cars_india/N/2020/10/new-tata-nexon-front-3-quarter-view.jpg",
        name:"Nexon",
        milage: "90kmph",
        price: "15lacs"
        }];

    return(
        <>
            <h1>Cars details</h1>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Car Name</th>
                        <th>Milage</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((ele,idx) => <tr key={idx}>
                                                <td><img src={ele.image} alt={ele.name} width = "100"/></td>
                                                <td>{ele.name}</td>
                                                <td>{ele.milage}</td>
                                                <td>{ele.price}</td>
                                            </tr>)}
                </tbody>
            </table>
        </>
    )
}

function App(){
    let showcars = true;

    if(showcars){
        return <Cars/>
    }                             // This is called conditional rendering (rendering components based on a condition)
    return(
        <>
        <Name/>
        </>
    )                             
}
function User(){
    let userlogin = false;
    let name = "Tej"

    if(userlogin){                         // using if condition outside jsx 
        return <><p>Hello {name}!!</p></>
    } 
    else{
        return <><p>Hello user!!</p></>
    }
}

function Ternary(){
    let userlogin = true;                   // conditional rendering using ternary operator inside jsx
                                            // using && (AND) operator
    let fname = "teja"
    let lname = "reddy"
    
    return(
        // <><h1>Hello {userlogin?"Tej":"User"}</h1>               "using AND with ternary operator"
        <><h1>Hello {userlogin && fname && lname?lname:"User"}</h1>
        <p>{userlogin && "Welcome to the portal"}</p>
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Ternary/>)

