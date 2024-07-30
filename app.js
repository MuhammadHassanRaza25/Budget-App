var budgetInput = document.getElementById('budgetInput')
var setbudgetBtn = document.getElementById('setbudgetBtn')
var ptitleInput = document.getElementById('ptitleInput')
var pcostInput = document.getElementById('pcostInput')
var checkBtn = document.getElementById('checkBtn')
var showBudget = document.getElementById('showBudget')
var showExp = document.getElementById('showExp')
var showBalance = document.getElementById('showBalance')
var showList = document.getElementById('showList')

// Set Budget Functionality Start
setbudgetBtn.addEventListener('click',()=>{
    if(budgetInput.value == '' ){
        Swal.fire({
            title: "Oops...",
            text: "Please Fill This Input Field!",
            icon: "error"
          });
    }
    else{
      showBudget.innerHTML = budgetInput.value
      Swal.fire({
        title: "Good job!",
        text: "Budget Set Successfully 💰",
        icon: "success"
      });
      budgetInput.value = ''
    }
})
// Set Budget Functionality End

// Check Amount Functionality Start
var expenseSum = 0
checkBtn.addEventListener('click',()=>{
    if(ptitleInput.value == '' && pcostInput.value == ''){
        Swal.fire({
            title: "Oops...",
            text: "Please Fill These Input Fields!",
            icon: "error"
          });
    }
    else{
       //show total expense start
        var convertToNum = Number(pcostInput.value)
        var expenseArr = []
        expenseArr.push(convertToNum)
        for (let i = 0; i < expenseArr.length; i++) {
            expenseSum += expenseArr[i]
        }
        showExp.innerHTML = expenseSum
        //summary: cost input se number string main a rhy thy unko string se number main convert kia hai. or sarae numbers ka sum uper 1var main add kia hai.
        //show total expense end

        //show balance amount start
        
        //show balance amount end

        // showing items in list
         showList.innerHTML += `
        <p class="listItem">${ptitleInput.value} <span>${pcostInput.value}</span> <i class="bi bi-trash3-fill" onclick="del(this)"></i></p>
        `
        Swal.fire({
            title: "Good job!",
            text: "Expenses Add Successfully ✅",
            icon: "success"
          });
        ptitleInput.value = ''
        pcostInput.value = ''
    }
})
// Check Amount Functionality End


// Delete icon Functionality Start
function del(e) {
   e.parentNode.remove()
}
//summary: del ke argument main this dia hai or parameter main (e) laga ke icon get kia hai. phir uska parent get karke remove kia hai.
// Delete icon Functionality End