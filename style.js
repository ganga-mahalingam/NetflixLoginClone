
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop actual submission

    const email = document.querySelector("input[type='text']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();
    const remember = document.querySelector("input[type='checkbox']").checked;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Fake login logic for demo
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", remember);

    alert("✅ Logged in successfully (Demo Only)");
  });