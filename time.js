

export function currentTimeDate() {
    
    let currentTime = new Date();
  
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let year = currentTime.getFullYear();
    let day = currentTime.getDate();
    let month = currentTime.getMonth() + 1;
  
  if (min < 10)
    min = "0" + min;
  
  

  
    return hour + ":" + min + ", " + year + "/" + month + "/" + day;
  }
  
  