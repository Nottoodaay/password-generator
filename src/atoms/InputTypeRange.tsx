import React, {useState} from 'react'

type props = {
    passwordLength: number;
    setPasswordLength: (val: number) => void
}

export const InputTypeRange: React.FC<props> = ({passwordLength, setPasswordLength}) => {
    
    const [backgroundSize, setBackgroundSize] = useState<number>(0)
    
    const handleChange = (event: string) =>{
        setBackgroundSize((+event / 20) * 100)
        setPasswordLength(+event) 
    }

  return (
    <>
        <input
            type='range' 
            min='0'
            max='20' 
            step={1} 
            value={passwordLength} 
            onChange={e=>handleChange(e.target.value)} 
            style={{backgroundSize: `${backgroundSize}%`}}
            />
    </>
  )
}
