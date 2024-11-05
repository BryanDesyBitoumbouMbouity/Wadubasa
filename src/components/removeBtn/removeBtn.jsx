"use client"
import React from 'react'
import Styles from './removeBtn.module.css'
import { useRouter } from 'next/navigation'
 
 
const RemoveBtn = ({id}) => {
 
    const router = useRouter();
    const removeEvent = async () => {
        const confirmed = confirm("Etes vous sure de vouloir supprimer cette evenement ?")
 
        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/events?id=${id}`,{
                method:'DELETE',
            });
            if(res.ok){
                router.refresh();
            }
        }
    }
  return (
    <button className={Styles.button} onClick={removeEvent}>Supprimer</button>
  )
}
 
export default RemoveBtn