//inDays : -1 for days before 1 for days after
const getDate = (inDays, plusMinus) => {
    const today = new Date(); 
    return new Date(today.getFullYear(),
                    today.getMonth(),
                    today.getDate() + (inDays * plusMinus)).toLocaleDateString();
}

export default getDate;