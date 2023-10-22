import { useState } from 'react'
import './OptionsContainer.scss'

export const OptionsContainer = () => {
    const [password, setPassword] = useState<string>('')
    const [passwordLength, setPasswordLength] = useState<number>(0)
    
    const [upperCase, setUpperCase] = useState<boolean>(false)
    const [lowerCase, setLowerCase] = useState<boolean>(false)
    const [numbers, setNumbers] = useState<boolean>(false)
    const [symbols, setSymbols] = useState<boolean>(false)
    
    const [passwordStrength, setPasswordStrength] = useState<string>('')
    const [strengthNumber, setStrengthNumber] = useState<number>(0)
    const [color, setColor] = useState<string>('')

    const generateRandomPassword = () =>{
        let charSet = ''
        let newPAssword = ''

        if(upperCase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(lowerCase) charSet += 'abcdefghijklmnopqrstuvwxyz'
        if(numbers) charSet += '0123456789'
        if(symbols) charSet += '!@#$%^&*()'

        for(let i = 0; i < passwordLength; i++){
            newPAssword += charSet.charAt(
                Math.floor(Math.random() * charSet.length)
            ) 
        }

        setPassword(newPAssword)
        checkPasswordStrength()
    }

    const checkPasswordStrength = () =>{
        let bgColorCheck = 0

        if(upperCase) bgColorCheck += 1
        if(lowerCase) bgColorCheck += 1
        if(numbers) bgColorCheck += 1
        if(symbols) bgColorCheck += 1

        if(bgColorCheck == 1){
            setPasswordStrength('TOO WEAK')
           setColor('#A4FFAF')
        } 
        if(bgColorCheck == 2){
            setPasswordStrength('WEAK')
             setColor('#F64A4A')
        } 
        if(bgColorCheck == 3){
            setPasswordStrength('MEDIUM')
            setColor('#FB7C58')
        } 
        if(bgColorCheck == 4){
            setPasswordStrength('STRONG')
            setColor('#F8CD65')
        } 
        
        setStrengthNumber(bgColorCheck)
    }

  return (
    <div className="optionsContainer">
        
        <div>{password}</div>

        <input
         type='range' 
         min='0'
         max='20' 
         step={1} 
         value={passwordLength} 
         onChange={e=>setPasswordLength(parseInt(e.target.value))} 
         />
        <p>{passwordLength}</p>

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
                <input type="checkbox" onChange={()=> setSymbols(!symbols)} />
                <label>include symbol</label>
            </div> 
        </div>

        <button onClick={generateRandomPassword}>generate new password</button>

        <div>{passwordStrength}</div>


        <div className='passwordStrength'>
            <div className='strengthBox' style={{
                backgroundColor: 
                strengthNumber === 0 ? '' : color}}></div>
            <div className='strengthBox' style={{
                backgroundColor: 
                strengthNumber === 1 ? '' : color}} ></div>
            <div className='strengthBox' style={{
                backgroundColor: 
                strengthNumber === 1 ? ''
                :strengthNumber === 2 ? '' 
                :color}}></div>
            <div className='strengthBox' style={{
                backgroundColor: 
                strengthNumber === 4 ? color : ''}}></div>
        </div>
    </div>
  )
}
