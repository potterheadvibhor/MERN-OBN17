import { Card } from "./Components/Card";
import { UserProfile } from "./Components/UserProfile";

function App()
{



const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    status: "normal"
  },
  {
    id: 2,
    name: "Priya Verma",
    status: "vip"
  },
  {
    id: 3,
    name: "Amit Patel",
    status: "normal"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    status: "vip"
  },
  {
    id: 5,
    name: "Vikram Singh",
    status: "normal"
  },
  {
    id: 6,
    name: "Anjali Mehta",
    status: "vip"
  }
];

  return (
    <>
<div className="grid grid-cols-4 p-2 gap-4">
{users.map((profile)=>{
  return < UserProfile name={profile.name} status={profile.status} />

})}
    </div>
    </>
  )
}

export default App