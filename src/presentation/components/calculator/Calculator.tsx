import React from 'react'
import './Calculator.css'
import axios from 'axios'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { changedDisplayValue } from '../../../store/ducks/calc/actions'

function Calculator() {
  const dispatch = useAppDispatch()
  const displayValue = useAppSelector((state) => state.calc.displayValue)

  const handleClickBtn = (btnValue: string[]) => {
    let display: any = [ ...displayValue, btnValue + '']
    dispatch(changedDisplayValue(display))
  } 

  const handleClickDel = () => {
    let delOne: any = [ ...displayValue]
    delOne.pop()
    dispatch(changedDisplayValue(delOne))
  }

  const handleClickReset = () => {
    let emptyArray: any = []
    dispatch(changedDisplayValue(emptyArray))
  }

  const handleClickResult = () => {
    let displayValueToString = [...displayValue]

    axios.post('http://localhost:2000/api/record/', {
      display: displayValueToString.toString().replace(/,/g, ''),
      name: 'Gabriel'
    }).then((data) => {
      let dataString = data.data.result
      dispatch(changedDisplayValue(dataString.toString()))
    })
  }

  return (
    <main className="container-calc d-flex flex-column justify-content-around align-items-center shadow p-0 rounded">

      <div className="c-themes px-2 d-flex justify-content-between">

        <p>Standart Calc</p>

        <div className="">
          <p>theme</p>
        </div>

      </div>

      <div className="c-display px-2 rounded">
        <div className="d-flex align-items-center justify-content-end h3 h-100">
          {displayValue}
        </div>
      </div>

      <div className="c-calcBtns p-2 rounded d-flex flex-column">

        <div className="container-btns d-flex">
          <button onClick={(e, btnValue: any = '7') => handleClickBtn(btnValue)} className='default-btn'>7</button>
          <button onClick={(e, btnValue: any = '8') => handleClickBtn(btnValue)} className='default-btn' >8</button>
          <button onClick={(e, btnValue: any = '9') => handleClickBtn(btnValue)} className='default-btn' >9</button>
          <button onClick={handleClickDel} className='del-btn' >DEL</button>
        </div>

        <div className="container-btns d-flex">
          <button onClick={(e, btnValue: any = '4') => handleClickBtn(btnValue)} className='default-btn' >4</button>
          <button onClick={(e, btnValue: any = '5') => handleClickBtn(btnValue)} className='default-btn' >5</button>
          <button onClick={(e, btnValue: any = '6') => handleClickBtn(btnValue)} className='default-btn' >6</button>
          <button onClick={(e, btnValue: any = '+') => handleClickBtn(btnValue)} className='default-btn' >+</button>
        </div>

        <div className="container-btns d-flex">
          <button onClick={(e, btnValue: any = '1') => handleClickBtn(btnValue)} className='default-btn' >1</button>
          <button onClick={(e, btnValue: any = '2') => handleClickBtn(btnValue)} className='default-btn' >2</button>
          <button onClick={(e, btnValue: any = '3') => handleClickBtn(btnValue)} className='default-btn' >3</button>
          <button onClick={(e, btnValue: any = '-') => handleClickBtn(btnValue)} className='default-btn' >-</button>
        </div>

        <div className="container-btns d-flex">
          <button onClick={(e, btnValue: any = '.') => handleClickBtn(btnValue)} className='default-btn' >.</button>
          <button onClick={(e, btnValue: any = '0') => handleClickBtn(btnValue)} className='default-btn' >0</button>
          <button onClick={(e, btnValue: any = '/') => handleClickBtn(btnValue)} className='default-btn' >/</button>
          <button onClick={(e, btnValue: any = '*') => handleClickBtn(btnValue)} className='default-btn' >x</button>
        </div>

        <div className="container-btns d-flex">
          <button onClick={(e, btnValue: any = '(') => handleClickBtn(btnValue)} className='default-btn' >(</button>
          <button onClick={(e, btnValue: any = ')') => handleClickBtn(btnValue)} className='default-btn' >)</button>
          <button onClick={handleClickReset} className='reset-btn' >RESET</button>
          <button onClick={handleClickResult} className='equal-btn' >=</button>
        </div>

      </div>

    </main>
  )
}

export default Calculator