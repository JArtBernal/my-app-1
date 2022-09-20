import React, {Fragment, useState} from 'react'
import './styles.css'

const addName = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, {tarea: userInput}];
  }