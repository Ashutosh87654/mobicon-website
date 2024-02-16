const AddSpan=(text)=>{
    let match= ['mobicon', 'esports','crypto']
    let arr= text.split(' ');
    let arr2= arr.map(word=>{
        if(match.includes(word.toLowerCase())){
            console.log(word)
            return `<span className=${word}>${word}</span>`
        }
        return  word
    })
    let str= ""
    for(let i=0;i<arr2.length;i++){
        str+=arr2[i]+" ";
        if(typeof(arr2[i])=="object")console.log(arr[i])
    }
    return <>{str}</>

}

export default AddSpan;