
        function calculateMaturityAmount() {
            // Getting input values from elements
            const principle = parseFloat(document.getElementById('principle').value);
            const interestRate = parseFloat(document.getElementById('interestRate').value);
            const tenure = parseFloat(document.getElementById('tenure').value);

            // Validate input
            if (isNaN(principle) || isNaN(interestRate) || isNaN(tenure) || principle <= 0 || interestRate <= 0 || tenure <= 0) {
                document.getElementById('result').innerHTML = 'Please enter valid positive numbers for all fields.';
                return;
            }

            // Calculate maturity amount
            const amount = principle * (1 + (interestRate * tenure) / 100);

            // Display the result
            document.getElementById('result').innerHTML = 'Maturity amount is: ' + amount.toFixed(2);
        }

        // Attach event listener to the button
        document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
