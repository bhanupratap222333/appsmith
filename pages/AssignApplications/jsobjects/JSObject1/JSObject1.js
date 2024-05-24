export default {
	Status: () =>{
		const Status = ["Application Submitted","Process Initiated","Documents Pending","Waiting for payment","Ready to File", "Completed","Rejected","Other Reasons"];
		return Status.map(r => ({label:r,value:r}))
		
	}
	
}