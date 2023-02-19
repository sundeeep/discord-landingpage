const createEle = (type) => {
    try {
        const element = document.createElement("type");
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
