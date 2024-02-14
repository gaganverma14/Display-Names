const names = ["Aanav", "Samay", "Vikram", "Nehavi", "Rohit", "Priya", "Amit", "Mekhak", "Ravi", "Gagan"];
        let currentIndex = 0;

        function updateName(delta) {
            currentIndex = (currentIndex + delta + names.length) % names.length;
            document.getElementById("nameDisplay").innerText = names[currentIndex];
        }

        updateName(0);