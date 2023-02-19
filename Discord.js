export const createEle = (type) => {
    try {
        const element = document.createElement(type);
        return element;
    } catch (error) {
        console.log(error.message);
    }
}

export const addChild = (parent,child) => {
    try {
        parent.appendChild(child);
    } catch (error) {
        console.log(error.message);
    }
} 

// export const replaceChild = (newNode, oldNode) => {
//     try {
        
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const getByID = (id) => {
    try {
        const element = document.getElementById(id);
        return element;
    } catch (error) {
        console.log(error.message);
    }
}

const hamburgerOpenBtn = getByID("hamburger_OpenBtn");
const hamburgerCloseBtn = getByID("hamburger_CloseBtn");
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
hamburgerOpenBtn.addEventListener("click", () => expandResponsiveNavBar());

const closeResponsiveNavBar = () => {
    try {
        responsiveNavBar.classList.add(
            "transition-all",
            "duration-500",
            "ease-in-out"
        );
        responsiveNavBar.classList.replace(
            "translate-x-[0%]",
            "translate-x-[100%]"
        );
    } catch (error) {
        console.log(error.message);
    }
};
hamburgerCloseBtn.addEventListener("click", ()=>closeResponsiveNavBar())

// TODO: Responsive Nav-Bar Lists and SubLists

const ResponsiveNavBarArray = [
    {
        navItem: "Home",
        subNavList: [],
    },
    {
        navItem: "Download",
        subNavList: [],
    },
    {
        navItem: "Nitro",
        subNavList: [],
    },
    {
        navItem: "Discover",
        subNavList: [],
    },
    {
        navItem: "Safety",
        subNavList: [
            {
                title: "Safety Center",
                navList: ["Overview"]
            },
            {
                title: "Controlling Your Experience",
                navList: [
                    "Four steps to a super safe account",
                    "Four steps to a super safe server",
                    "Role of administrators and moderators on Discord",
                    "Reporting problems to Discord",
                    "Mental health on Discord",
                    "Age-Restricted Content on Discord",
                    "Tips against span and hacking",
                ]
            },
            {
                title: "Parents & Educators",
                navList: [
                    "What is Discord?",
                    "Discord's commitment to a safe and trusted experience",
                    "Helping your teen stay safe on Discord",
                    "Talking about online safety with your teen",
                    "Answering parent's and educator's top questions",
                    "If your teen encounters an issue",
                    "Working with CARU to protect users on Discord"
                ]
            },
            {
                title: "How We Enforce Rules",
                navList: [
                    "Our policies",
                    "Enforcing our rules",
                    "How we investigate",
                    "What actions we take",
                    "How you can appeal our actions",
                    "Discord's Transparency Report",
                    "Working with law enforcement"
                ]
            },
        ],
    },
    {
        navItem: "Mod Academy",
        subNavList: [
            {
                title: "Moderator Academy",
                navList: ["Overview"]
            },
            {
                title: "Basics",
                navList: [
                    "100: An Intro to the DMA",
                    "103: Basic Channel Setup",
                    "104: How to Report Content to Discord",
                    "110: Moderator Etiquette",
                    "111. Your Responsibilities as a Moderator"
                ]
            },
            {
                title: "Setup and Function",
                navList: [
                    "201: Permissions on Discord",
                    "202: Handling Difficult Scenarios",
                    "203: Developing Server Rules",
                    "204: Ban Appeals",
                    "205: Utilizing Role Colors",
                    "206: Best Practices for Reporting Tools",
                    "210: Moderator Recruitment"
                ]
            },
            {
                title: "Advanced Community Management",
                navList: [
                    "301: Implementing Verification Gates",
                    "302: Developing Moderator Guidelines",
                    "303: Facilitating Positive Environments",
                    "310: Managing Moderation Teams",
                    "311: Understanding and Avoiding Moderator Burnout",
                    "312: Internal Conflict Resolution",
                    "313: How to Moderate Voice Channels",
                    "314: Training and Onboarding New Moderators",
                    "321: Auto Moderation in Discord",
                    "322: Usage and Benefits of Webhooks and Embeds ",
                    "323: Usage of XP Systems",
                    "331: Community Engagement",
                    "332: Fostering Healthy Communities",
                    "333: Planning Community Events",
                    "334: Community Partnerships",
                    "341: Understanding Your Community Through Insights"
                ]
            },
            {
                title:"Moderation Seminars",
                navList: [
                    "401: Transparency in Moderation",
                    "403: Sensitive Topics",
                    "405: Practicalities of Moderating Adult Channels",
                    "407: Managing Exponential Membership Growth",
                    "432: Internationalization of a Community",
                    "441: Community Governance Structures",
                    "442: Using Insights to Improve Community Growth and Engagement",
                    "443: Ban Evasion and Advanced Harassment",
                    "451: Reddit x Discord",
                    "452: Twitch x Discord",
                    "453: Patreon x Discord",
                    "454: Bringing Other Communities To Discord",
                    "455: Schools x Discord"
                ]
            },
            {
                title: "Graduate Courses",
                navList: ["531: Parasocial Relationships"]
            },
            {
                title: "Author Credits",
                navList: ["Author Credits"]
            }
        ],
    },
    {
        navItem: "Support",
        subNavList: [],
    },
    {
        navItem: "Blog",
        subNavList: [],
    },
    {
        navItem: "Careers",
        subNavList: [],
    }
]

const subNavBar = getByID("expandedSubNavBar");
const expandSubNavListResponsive = (main) => {
    try {
        subNavBar.classList.add("transition-all", "duration-500", "ease-in-out")
        console.log(subNavBar.childNodes[0])
        if(subNavBar.childNodes[0]){
            subNavBar.replaceChild(main, subNavBar.childNodes[0]);
            subNavBar.classList.replace("translate-x-[100%]", "translate-x-[0%]");
            return;
        }
        addChild(subNavBar, main)
        subNavBar.classList.replace("translate-x-[100%]", "translate-x-[0%]");
    } catch (error) {
        console.log(error.message);
    }
}

const closeSubNavListResponsive = () => {
    try {
        subNavBar.classList.add("transition-all", "duration-500", "ease-in-out")
        subNavBar.classList.replace("translate-x-[0%]", "translate-x-[100%]");
    } catch (error) {
        console.log(error.message);
    }
}

const responsiveNavBarList = getByID("responsiveNavBarList");

const ul = createEle('ul');
ul.setAttribute("class", "flex flex-col gap-5 py-5");

ResponsiveNavBarArray.map((NavList)=>{
    const li = createEle('li');
    const a = createEle('a');
    a.setAttribute("href", "#");
    a.setAttribute("class", "text-gray-800 hover:underline");

    if(NavList.subNavList.length !== 0){
        a.innerText = `${NavList.navItem}  >>>`
        a.classList.add("font-bold")
        addChild(li, a);
        li.addEventListener("click", ()=>{
                const main = createEle('main');
                main.setAttribute("class", "flex flex-col gap-5");

                const section = createEle('section');
                section.setAttribute("class", "flex justify-between sticky top-0 bg-white py-5");

                const backBtn = createEle('button');
                backBtn.innerText = "< Back";
                backBtn.setAttribute("class", "font-semibold text-lg text-black hover:underline text-gray-700");
                
                backBtn.addEventListener("click", ()=>{
                    closeSubNavListResponsive();
                })
                
                addChild(section, backBtn);

                const closeBtn = createEle('button');
                closeBtn.setAttribute("class", "");
                const span = createEle('span');
                span.setAttribute("class", "text-black text-3xl");
                const i = createEle('i');
                i.setAttribute("class", "fa-solid fa-xmark");
                addChild(span, i);
                addChild(closeBtn, span);

                closeBtn.addEventListener("click", ()=>{
                    closeSubNavListResponsive();
                    closeResponsiveNavBar();
                })
                addChild(section, closeBtn);

                addChild(main, section);

                const subNav = createEle('nav');
                subNav.setAttribute("class", "flex flex-col gap-5 py-5");

                NavList.subNavList.map((subNavItem) => {
                    const subUL = createEle('ul');
                    subUL.setAttribute("class", "flex flex-col gap-2");

                    const subH1 = createEle('h1');
                    subH1.innerText = subNavItem.title;
                    subH1.setAttribute("class", "font-semibold text-lg text-left");
                    addChild(subUL, subH1);

                    subNavItem.navList.map((listItem) => {
                        const subLI = createEle("li");
                        subLI.setAttribute("class", "text-gray-600 text-sm hover:underline");

                        const subA = createEle("a");
                        subA.setAttribute("href", "#")
                        subA.innerText = listItem;
                        addChild(subLI, subA);

                        addChild(subUL, subLI);
                    })
                    const hr = createEle('hr');
                    addChild(subNav, hr)
                    addChild(subNav, subUL);
                })

                addChild(main, subNav);

                expandSubNavListResponsive(main);
        })
    }else{
        a.innerText = NavList.navItem;
        addChild(li, a);
    }

    addChild(ul, li)
})

addChild(responsiveNavBarList, ul);