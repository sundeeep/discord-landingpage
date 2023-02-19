const createEle = (type) => {
    try {
        const element = document.createElement(type);
        return element;
    } catch (error) {
        console.log(error.message);
    }
}

const addChild = (parent,child) => {
    try {
        parent.appendChild(child);
    } catch (error) {
        console.log(error.message);
    }
} 
const footerNav = document.querySelector("#footer-navigation");
    const footerNavList = [
        {
            footerNavTitle: "Product",
            footerNavList: ['Download', 'Nitro', 'Status'],
        },
        {
            footerNavTitle: "Company",
            footerNavList: ['About', 'Jobs', 'Branding', 'Newsroom'],
        },
        {
            footerNavTitle: "Resources",
            footerNavList: ['College', 'Support', 'Safety', 'Blog', 'Feedback', 'Developers', 'StreamKit', 'Creators', 'Community'],
        },
        {
            footerNavTitle: "Policies",
            footerNavList: ["Terms", 'Privacy', 'Cookie Settings', 'Guidelines', 'Acknoeledgments', 'Licenses', 'Moderation'],
        },
    ]

    footerNavList.map((navList) => {
        const ul = createEle('ul');
        ul.setAttribute("class", "basis-[40%] md:flex-1 flex flex-col gap-2")
        
        const h4 = createEle('h4');
        h4.classList.add("text-[#404eed]");
        h4.innerText = navList.footerNavTitle;
        addChild(ul, h4);

        navList.footerNavList.map((navItem) => {
            const li = createEle('li');
            const a = createEle('a');
            a.setAttribute("href", "#");
            a.setAttribute("class", "hover:underline mt-5");
            a.innerText = navItem;
            addChild(li, a);
            addChild(ul, li)
        })

        addChild(footerNav, ul);
})