const getByID = (id) => {
    try {
        const element = document.getElementById(id);
        return element;
    } catch (error) {
        console.log(error.message);
    }
}

const hamburgerBtn = getByID("hamburger_Btn");
const responsiveNavBar = getByID("responsiveNavBar");

const expandResponsiveNavBar = () => {
    try {
        responsiveNavBar.classList.add("transition-all", "duration-500", "ease-in-out")
        responsiveNavBar.classList.replace(
        "translate-x-[100%]",
        "translate-x-[0%]"
        
        );
    } catch (error) {
        console.log(error.message);
    }
};

hamburgerBtn.addEventListener("click", ()=>expandResponsiveNavBar());

