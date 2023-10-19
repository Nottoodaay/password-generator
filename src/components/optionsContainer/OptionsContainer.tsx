import { useState } from 'react'
import './OptionsContainer.scss'

export const OptionsContainer = () => {
    const [password, setPassword] = useState<string>('')
    const [upperCase, setUpperCase] = useState<boolean>(false)
    const [lowerCase, setLowerCase] = useState<boolean>(false)
    const [numbers, setNumbers] = useState<boolean>(false)
    const [symbols, setSymbols] = useState<boolean>(false)

    const generateRandomPassword = () =>{
        let charSet = ''
        let newPAssword = ''

        if(upperCase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(lowerCase) charSet += 'abcdefghijklmnopqrstuvwxyz'
        if(numbers) charSet += '0123456789'
        if(symbols) charSet += '!@#$%^&*()'

        for(let i = 0; i < 8; i++){
            newPAssword += charSet.charAt(
                Math.floor(Math.random() * charSet.length)
            ) 
        }

        setPassword(newPAssword)
    }

  return (
    <div className="optionsContainer">
        
        <div>{password}</div>

        <div className='checkBoxContainer'>
            <div>
                <input type="checkbox" onChange={()=>setUpperCase(!upperCase)}/>
                <label>include uppercase latters</label>
            </div>
            <div>    
                <input type="checkbox" onChange={()=>setLowerCase(!lowerCase)} />
                <label>include lower latters</label>
            </div>
             <div>   
                <input type="checkbox" onChange={()=>setNumbers(!numbers)} />
                <label>include numbers</label>
            </div>
            <div>
                <input type="checkbox" onChange={()=> setSymbols(symbols)} />
                <label>include symbol</label>
            </div> 
        </div>

        <button onClick={generateRandomPassword}>generate new password</button>


        <div className='passwordStrength'>
            <div className='strengthBox'></div>
        </div>
    </div>
  )
}
