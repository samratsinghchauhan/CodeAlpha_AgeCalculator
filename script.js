document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const dobInput = document.getElementById("dob").value;
    const resultDiv = document.getElementById("result");
  
    if (!dobInput) {
      resultDiv.innerHTML = "Please enter a valid date of birth.";
      return;
    }
  
    const birthDate = new Date(dobInput);
    const today = new Date();
  
    if (birthDate > today) {
      resultDiv.innerHTML = "Date of birth cannot be in the future!";
      return;
    }
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    resultDiv.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
  });
  