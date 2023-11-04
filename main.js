document.querySelector('#calculate').addEventListener('click',function(e){
    e.preventDefault();

    var loanAmount = document.getElementById('loan-amount').value;
    var intrestRate = document.getElementById('intrest-rate').value;
    var loanTenure = document.getElementById('loan-tenure').value;
    const tenureType = document.querySelector('input[name="tenure-type"]:checked').value;
    
    if (isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTenure)) {
        alert("Please enter valid input values.");
        return;
    }
    const monthlyInterestRate = (intrestRate / 100) / (tenureType === "yearly" ? 12 : 1);
    const totalPayments = tenureType === "yearly" ? loanTenure * 12 : loanTenure;
   

    var noOfMonths=loanTenure*12;
    var monthlyRate=intrestRate/(12*100);
    var onePlusR=Math.pow(1+monthlyRate,noOfMonths)
    var denominator=onePlusR -  1;

    const emi = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    var totalAmount=noOfMonths*parseFloat(emi);
    var totalInt=Math.floor(totalAmount-loanAmount);

    
    const formatedEMI = emi.toFixed(1);
    const formatedINT = totalInt.toFixed(2);
    const formatedTotal = totalAmount.toFixed(3);

  
    var payableEmi=document.querySelector('.loanamount').textContent = `₹${formatedEMI}`;
    var payableInt=document.querySelector('.totalintrest').textContent = `₹${formatedINT}`;
    var payableAmount=document.querySelector('.totalamount').textContent = `₹${formatedTotal}`;

    payableEmi.innerHTML=parseFloat(emi)
    payableInt.innerHTML=parseFloat(totalInt)
    payableAmount.innerHTML=parseFloat(totalAmount)

})