let main_container = document.querySelector(".container-fluid");
let navbar = document.createElement("nav");

navbar.className = "navbar";
navbar.innerHTML = `
    <section id="logo">
        <img src='../Logo.png'/>
    </section>
    <section id="navigation">
        <ul>
            <li>
                <a href="../homepage/index.html">Home</a>
            </li>
            <li>
                <a href="../catagery/veg.html">Veg</a>
            </li>
            <li>
                <a href="../catagery/nonVeg.html">Non Veg</a>
            </li>
        </ul>
    </section>
    <section id="profile">
         <ul>
            <li>
                <a href="../cart/cart.html">Cart</a>
            </li>
            <li>
                <a href="../login/index.html">Login</a>
            </li>
            <li>
                <a href="../resgestration/index.html">Signin</a>
            </li>
        </ul>
    </section>
`;

main_container.before(navbar);
