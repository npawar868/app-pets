import {useState, useEffect} from 'react'
import axios from 'axios'
import PetCard from '../PetCard'
const PetList = ()=>{
    const [petList, setPetList]  = useState([])

    useEffect(async() => {
      const result = await axios.get('http://localhost:9000/pet/list')
      console.log(result.data.data);
      setPetList(result?.data?.data || [])
    }, [])
    return (<div style={{display: 'flex', flexWrap: 'wrap', border: '1px solid green'}}>{petList.map((pet)=>{
        return (<PetCard key={pet.pet_id} petData = {pet}/>)
    })}</div>)
}

export default PetList