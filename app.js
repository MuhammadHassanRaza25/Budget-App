var budgetInput = document.getElementById('budgetInput')
var setbudgetBtn = document.getElementById('setbudgetBtn')
var ptitleInput = document.getElementById('ptitleInput')
var pcostInput = document.getElementById('pcostInput')
var checkBtn = document.getElementById('checkBtn')
var showBudget = document.getElementById('showBudget')
var showExp = document.getElementById('showExp')
var showBalance = document.getElementById('showBalance')
var showList = document.getElementById('showList')
var addmoreBtn = document.getElementById('addmoreBtn')

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
      //alert start
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Budget Set Successfully"
      });
      //alert end
      budgetInput.value = ''
    }
})
// Set Budget Functionality End

// Add More Budget Functionality Start
addmoreBtn.addEventListener('click',()=>{
  if(budgetInput.value == '' ){
    Swal.fire({
        title: "Oops...",
        text: "Please Fill This Input Field!",
        icon: "error"
      });
}
else{
  var budgetTonum = Number(budgetInput.value)
  var valueTonum = Number(showBudget.innerHTML) // ye jo value pehly se total budget main thi usko number main convert kia hai.
  showBudget.innerHTML = valueTonum += budgetTonum // phir convert wali value jo pehly se thi usme or budget add kia hai.
  //alert start
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "More Budget Add Successfully"
  });
  //alert end
 showBalance.innerHTML = valueTonum-expenseSum
 budgetInput.value = ''
}
})
// Add More Budget Functionality End

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
       //show total expense Start
        var convertToNum1 = Number(pcostInput.value)
        var expenseArr = []
        expenseArr.push(convertToNum1)
        for (let i = 0; i < expenseArr.length; i++) {
            expenseSum += expenseArr[i]
        }
        showExp.innerHTML = expenseSum
        //summary: cost input se number string main a rhy thy unko string se number main convert kia hai. or sarae numbers ka sum uper 1var main add kia hai.
        //show total expense End

        //show balance amount Start
        var convertToNum2 = Number(showBudget.innerHTML)
        showBalance.innerHTML = convertToNum2-expenseSum
        //summary: 
        //ye value budgetInput se mil rahi hai. hamny showbudget ki value ko number main convert kia hai or phir is value ko total expense se - kia hai or balance amount main show kia hai.
        //show balance amount End

        // showing items in list
         showList.innerHTML += `
        <p class="listItem"><span>${ptitleInput.value}</span> <span style="text-align: center;">${pcostInput.value}</span> <i style="width: 33%; text-align: end;" class="bi bi-trash3-fill" onclick="del(this)"></i></p>
        `
        //alert start
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Expenses Add Successfully"
          });
          //alert end
          
        ptitleInput.value = ''
        pcostInput.value = ''
    }

    // Budget Out Functionality Start
    if(expenseSum > convertToNum2){
      Swal.fire({
        title: "Oops...",
        text: "Budget Limit Is Out",
        icon: "error"
      });
      showList.innerHTML += 'Budget Limit Is Out'
      showBalance.innerHTML = 'Budget Limit Is Out'
      showExp.innerHTML = 'Budget Limit Is Out'
    }
    // Budget Out Functionality End
})
// Check Amount Functionality End


// Delete icon Functionality Start
function del(e) {
   e.parentNode.remove()
}
//summary: del ke argument main this dia hai or parameter main (e) laga ke icon get kia hai. phir uska parent get karke remove kia hai.
// Delete icon Functionality End