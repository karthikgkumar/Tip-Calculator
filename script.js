
billInputdiv = document.getElementById('billTotalInput')
tipInputdiv = document.getElementById('tipInput')
peopleDiv = document.getElementById('numberOfPeople')
perpersonDiv = document.getElementById('perPersonTotal')

let people =Number(peopleDiv.innerText)
const calculateBill = () => {
    let bill = Number(billInputdiv.value)
  
    let tip = Number(tipInputdiv.value) / 100
    
    const Totaltip= bill*tip
    
    const Total= Totaltip + bill
    
    let perperson = Total/people
  
    perpersonDiv.innerText = `$${perperson.toFixed(2).toLocaleString('en-US')}`
  
  }
  
  const increasePeople = () => {

    people +=1
  
    peopleDiv.innerText = people
  
    calculateBill()
  
  }
  
  const decreasePeople = () => {
    if(people<=1){
        throw 'people less than one is not possible'
        return
    }
    people -=1
    peopleDiv.innerText = people
    calculateBill()
  
  }