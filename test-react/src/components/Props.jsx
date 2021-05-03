
    

  function Welcome (props){//props =properties, props is  a placeholder that we can pass values to 
    // Inside this function we have defined a variable called msg 
    // In this variable we have assigned an element with a text value of Hello {props.name}
    //In {props.name} the props is the value that will be passed and .name is what we will reference when
    // When using the corresponding component tag <Welcome /> passing the value as follows <Welcome name="value">
    //The reference can be anything it dosen't have to be name

   
  const msg = <h2 style={{backgroundColor: "dodgerblue",color:"white"}}> Hello {props.name} </h2>
  return msg
}

 
  function Element (){
       return <Welcome name ="Trevor" /> // This renders the Welcome component and passes the text value "Trevor" to the prop
                                         // This displays Hello Trevor to the page
  }

export default Element
