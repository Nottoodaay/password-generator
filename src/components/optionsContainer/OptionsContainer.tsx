import { useEffect, useState } from 'react'
import './OptionsContainer.scss'

import { InputTypeRange } from '../../atoms/InputTypeRange'

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
    }

    useEffect(()=>{
        let bgColorCheck = 0

        if(upperCase) bgColorCheck += 1
        if(lowerCase) bgColorCheck += 1
        if(numbers) bgColorCheck += 1
        if(symbols) bgColorCheck += 1

        if(bgColorCheck == 0){
            setPasswordStrength('')
            setColor('')
        }

        if(bgColorCheck == 1){
           setPasswordStrength('TOO WEAK')
           setColor('#A4FFAF')
        } 
        if(bgColorCheck == 2){
            setPasswordStrength('WEAK')
            setColor('#F8CD65')
        } 
        if(bgColorCheck == 3){
            setPasswordStrength('MEDIUM')
            setColor('#FB7C58')
        } 
        if(bgColorCheck == 4){
            setPasswordStrength('STRONG')
            setColor('#F64A4A')
        } 

        setStrengthNumber(bgColorCheck)
    },[upperCase, lowerCase, numbers, symbols])

  return (
    <div className='body'>

    <h1>Password Generator</h1>

    <div className='passwordContainer'>
        <h2>
            {password ? password : 'PTx1f5DaFX'}
        </h2>

        <div></div>
    </div>

    <div className="optionsContainer">
        <div className='rangeContainer'>
            <div className='charecterLengthContainer'>
                <h3>Charecter Length</h3>
                <div>
                    {passwordLength}
                </div>
            </div>
            <InputTypeRange passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
        </div>

        <div className='checkBoxContainer'>
            <div>
                <input type="checkbox" onChange={()=>setUpperCase(!upperCase)}/>
                <label className='label'>include uppercase latters</label>
            </div>
            <div>    
                <input type="checkbox" onChange={()=>setLowerCase(!lowerCase)} />
                <label className='label'>include lower latters</label>
            </div>
             <div>   
                <input type="checkbox" onChange={()=>setNumbers(!numbers)} />
                <label className='label'>include numbers</label>
            </div>
            <div>
                <input type="checkbox" onChange={()=> setSymbols(!symbols)} />
                <label className='label'>include symbol</label>
            </div> 
        </div>

       
        <div className='passwordStrength'>
            <h4>STRENGTH</h4>

            <div className='strengthBoxContainer'>
                <h4 className='passwordStrengthText'>{passwordStrength}</h4>

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
        
        <button className='generateBtn'  onClick={generateRandomPassword}>GENERATE</button>
    </div>
    </div>
  )
}
