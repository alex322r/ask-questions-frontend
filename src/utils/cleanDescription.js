export default function cleanDescription(description) {
    // remove \\n and \\r
    let cleanedDescription = description.replace(/\\n/g, "")
    //remove ``` 
    cleanedDescription = cleanedDescription.replace(/```/g, "")
    
    
    return cleanedDescription
}