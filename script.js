< !DOCTYPE html >
    <html lang="en">

        <head>

            <link rel="stylesheet" href="style.css">

                <title>Workbot</title>

</head>

            <body>
                <div class="header">
                    <a href="#default" class="header-img">Yrecorg Logo</a>
                    <div class="header-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>

                <img src="Yrecorg.logo.svg" alt="Yrecorg Logo" style="width:300px;height:400px;">

                    <h1>Reverse grocery list</h1>

                    <!-- Trigger/Open The Modal -->
    <button id="myBtn">Add Item</button>

                    <!-- The Modal -->
    <div id="myModal" class="modal">

                        <!-- Modal content -->
        <div class="modal-content">
                            <span class="close">&times;</span>
                            <h2> Add Item</h2>
                            <p>Item: <input type="text" value=""></p>
                                <p>Type: </p> <select>
                                    <option>Dairy & Eggs</option>
                                    <option>Fruit</option>
                                    <option>Canned Goods</option>
                                    <option>Vegetables</option>
                                </select>
        </div>

                        </div>

                        <script>
                            // Get the modal
                            var modal = document.getElementById("myModal");

                            // Get the button that opens the modal
                            var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
                            var span = document.getElementsByClassName("close")[0];

                            // When the user clicks the button, open the modal
        btn.onclick = function () {
                                    modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
                                        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                                        modal.style.display = "none";
            }
        }
    </script>

</body>

</html>