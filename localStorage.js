
const getStoredJobApplications = ()=>{
    const storedJobApplications = localStorage.getItem('job-applications');
    if(storedJobApplications){
        JSON.parse(storedJobApplications)
    }
    return [];
}


const saveDataLocalStorage =id=>{
    const storedJobApplications = getStoredJobApplications();
    const isExists = storedJobApplications.find(jobId => jobId === id);
    if(!isExists){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
    }
    


}

export {saveDataLocalStorage,getStoredJobApplications}